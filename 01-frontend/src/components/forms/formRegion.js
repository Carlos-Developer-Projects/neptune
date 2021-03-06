//dependencies
import { useReducer, useEffect } from "react";
//components
import Forms from "./index";
//component
export default function FormRegion({settings, setRegionData, saveSection, initialState, handleCancel}){
    //state
    const [state, dispatch] = useReducer(reducer, initialState);
    
    //functions
    function reducer(state, action){
        switch(action.type){
            case "change":
                return {...state, [action.field]: action.payload};
            default:
                return state;
        }
    };
    const handleChange = (e)=>{
        dispatch({
            type: "change",
            field: e.target.id,
            payload: e.target.value
        });
    };
    const handleChangeFile = (e)=>{
        dispatch({
            type: "change",
            field: e.target.id,
            payload: event.target.files[0]
        });
    };
    const handleChangeList = (e)=>{
        
    };
    const renderFields = (field)=>{
        switch(field.type){
            case "text":
                return <Forms.InputText 
                    type={field.type} 
                    value={state[field.id]} 
                    name={field.name} 
                    id={field.id} 
                    placeholder={field.placeholder ? field.placeholder : undefined} 
                    settings={field.settings} 
                    handleChange={handleChange}
                />;
            case "file":
                return <Forms.InputFile 
                    type={field.type} 
                    name={field.name}
                    id={field.id}
                    settings={field.settings} 
                    handleChange={handleChangeFile}
                />;
            case "textarea":
                return <Forms.TextArea 
                    name={field.name}  
                    value={state[field.id]} 
                    rows={field.rows} 
                    id={field.id} 
                    placeholder={field.placeholder ? field.placeholder : undefined} 
                    settings={field.settings} 
                    handleChange={handleChange} 
                />;
            case "select":
                return <Forms.Dropdown
                    name={field.name}
                    value={state[field.id]}
                    id={field.id} 
                    settings={field.settings} 
                    handleChange={handleChange} 
                    options={field.options}
               />;
            default:
                break;
        }
    };
    const renderFieldGroups = (fields)=>{
        const render = fields.map((field, index)=>{
            return(
                <Forms.Group 
                    key={index} 
                    prefix={field.prefix ? field.prefix : undefined} 
                    message={field.message ? field.message: undefined}
                    label={field.label} 
                    id={field.id}>
                {renderFields(field)}
                </Forms.Group>
            );
        });
        return render;
    };
    //lifecycle
    useEffect(()=>{
        setRegionData(state);
    },[state]);

    //render
    return(
        <>
            <Forms.Section 
                name={settings.meta.name} 
                intro={settings.meta.intro}
                cta={settings.meta.cta}
                handleClick={saveSection} 
                currentState={state}
                handleCancel={handleCancel ? handleCancel : null}
                dataid={state.id ? state.id : "none"}
            >
                {renderFieldGroups(settings.fields)}
            </Forms.Section>
        </>
    )
}
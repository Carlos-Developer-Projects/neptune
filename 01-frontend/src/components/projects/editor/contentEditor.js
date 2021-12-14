//dependencies
import { useState, useMemo, useReducer, useRef, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
//components
import Button from "../../elements/button";
import ToggleArea from "../../dashboard/toggleArea";
import FormRegion from "../../forms/formRegion";
import { VscClose } from 'react-icons/vsc';
//rule components
import RuleCard from "./rule";

//data
import { ruleTypes } from "../../../../data/projects";

//component
export default function ContentEditor(props){
    //state
    const[state, dispatch] = useReducer(reducer, props.state);
    const rulesRef = useRef();
    rulesRef.current = state;
    

    const[editorActive, setEditorActive] = useState(false);
    const[activeEditor, setActiveEditor] = useState({});

    const[managerActive, setManagerActive] = useState(false);
    const[activeManager, setActiveManager] = useState("");

    //functions
    function reducer(state, action){
        let updateState = {...state};
        switch(action.type){
            case "update":
                if(updateState.memory[action.payload.type].items){
                    if(!updateState.memory[action.payload.type].items[action.id]){
                        updateState.memory[action.payload.type].count = updateState.memory[action.payload.type].count + 1;
                    }
                }else{
                    updateState.memory[action.payload.type].count = 0;
                }

                updateState.memory[action.payload.type].items[action.id] = action.payload;

                return updateState;

            case "init":
                if(!updateState.memory[action.name]){
                    updateState.memory[action.name] = {
                        items: {},
                        count: 0
                    }
                }
                return updateState;
                
            case "delete":
   
                delete updateState.memory[action.editor].items[action.payload];
                updateState.memory[action.editor].count = updateState.memory[action.editor].count - 1;

                return updateState;

            default:
                return state;
        }
    };

    //rules specific
    const[ruleCards, setRulesCards] = useState({});

    const updateRuleCardsUI = ()=>{
        let updateRuleCards = {...ruleCards};
        setRulesCards(updateRuleCards);
    };

    //generic
    const load = ()=>{

        //for each rule type I want to render it's card
        let rulesLoad = {...ruleTypes.cards};

        Object.values(rulesLoad).forEach((rule)=>{

            dispatch({
                type: "init",
                name: rule.type
            });

            //check if the rule has a count in memory
            if(state.memory[rule.type]){
                rulesLoad[rule.type].count = state.memory[rule.type].count;
            }
        });

        setRulesCards(rulesLoad);
    };

    const renderRuleCards = useMemo(()=>{

        if(ruleCards.length === 0) return;

        const render = Object.values(ruleCards).map((card, index)=>{
            return(<RuleCard 
                key={index} 
                icon={card.icon} 
                name={card.name} 
                type={card.type}
                design={card.design}
                count={state.memory[card.type].count} 
                description={card.description} 
                edit={addRule}
                manage={manageRules}
            />);
        });
        return render;

    }, [ruleCards]);

    function addRule(type){

        //get rule master settings
        const masterSettings = {...ruleTypes[type]};
        const newid = uuidv4();
        masterSettings.schema.meta.id = newid;
        masterSettings.schema.state.id = newid;

        //activate editor
        setActiveEditor(masterSettings);
        setEditorActive(true);

        //update counter for cards
        updateRuleCardsUI();

    }

    function manageRules(type){

        setActiveManager(type);
        setManagerActive(true);

    }

    function cancelRule(e, id){
        dispatch({
            type: "delete",
            editor: activeEditor.name,
            payload: id
        });
        
        updateRuleCardsUI();

        setEditorActive(false);
        setActiveEditor({});
    }   

    function deleteRule(e, id){
        console.log(activeManager);
        dispatch({
            type: "delete",
            editor: activeManager,
            payload: id
        });

        updateRuleCardsUI();

        setManagerActive(false);
        setActiveManager("");

    }

    function updateMemory(sectionState){
        dispatch({
            type: "update",
            id: sectionState.id,
            payload: sectionState
        });
    }

    function saveRule(){

        //saving to database
        console.log(rulesRef.current);

        //display item count increment
        updateRuleCardsUI();

        //clearing state
        setEditorActive(false);
        setActiveEditor({});
        setManagerActive(false);
        setActiveManager("");
    }

    const renderEditor = ()=>{
        return(
            <ToggleArea title={`Name: ${state.memory[activeEditor.schema.meta.type].items[activeEditor.schema.meta.id] ? state.memory[activeEditor.schema.meta.type].items[activeEditor.schema.meta.id].name : activeEditor.schema.meta.name}`}>{
                <FormRegion 
                    settings={activeEditor.schema} 
                    initialState={state.memory[activeEditor.name] && state.memory[activeEditor.name].items && state.memory[activeEditor.name].items[activeEditor.schema.meta.id] ?  state.memory[activeEditor.name].items[activeEditor.schema.meta.id] : activeEditor.schema.state} 
                    setRegionData={updateMemory} 
                    saveSection={saveRule}
                    handleCancel={cancelRule}  
                />
            }</ToggleArea>
        )
    };

    const renderManager = ()=>{
        const render = Object.values(state.memory[activeManager].items).map((item)=>{

            const manageSettings = {...ruleTypes[activeManager]};
            manageSettings.schema.meta.id = item.id;
            manageSettings.schema.state.id = item.id;

            return(
                <ToggleArea key={item.id} title={`Name: ${state.memory[activeManager].items[item.id].name}`}>{
                    <FormRegion 
                        settings={manageSettings.schema} 
                        initialState={state.memory[activeManager].items[item.id]} 
                        setRegionData={updateMemory} 
                        saveSection={saveRule}
                        handleCancel={deleteRule}  
                    />
                }</ToggleArea>
            );
        });
        return render;
    };

    const closeManager = ()=>{
        setManagerActive(false);
        setActiveManager("");
    };


    //lifecycle
    useEffect(()=>{
        load();
    },[]);

    //render
    return(
        <>  
            <section className="mb-4">
                <Button custom="bg-button" text="Log State" handleClick={()=>{console.log(state)}}>Log State</Button>
            </section>

            {/* Edit Item */}
            {editorActive && renderEditor()}

            {/* Manage All Items */}
            {managerActive && (
                <section>
                    <div className="flex items-center justify-end">
                        <Button handleClick={closeManager} custom="bg-button" text="Exit Manager" icon={VscClose} />
                    </div>
                    {renderManager()}
                </section>
            )}

            {/* Render Cards */}
            {!editorActive && !managerActive && (<section id="game-rules" className="flex items-center justify-between flex-wrap">{renderRuleCards}</section>)}
            
        </>
    )
}
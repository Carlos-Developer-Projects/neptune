//dependencies
import { useState, useMemo, useReducer, useRef, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
//components
import Rule from "./rule";
import ToggleArea from "../../dashboard/toggleArea";
import FormRegion from "../../forms/formRegion";
import {GiCardDraw, GiNautilusShell} from 'react-icons/gi';
//data
const ruleTypes = {
    decks: {
        name: "decks",
        schema: {
            meta: {
                id: "",
                name: "New Deck",
                intro: "Enter the settings for your deck.",
                cta: "Save Deck"
            },
            state: {
                type:"decks",
                name: "",
                icon: "",
            },
            fields: [
                {
                    id: "name",
                    label: "Name",
                    required: true,
                    type: "text",
                    placholder: "Name your deck.",
                    settings: {},
                    message: "Name of the rule."
                },
                {
                    id: "icon",
                    label: "Deck Icon (optional)",
                    required: false,
                    type: "file",
                    settings: {},
                    message: "Icon that represents your rule."
                }
            ]
        }
    },
    cards:{
        decks: {
            icon: GiCardDraw,
            type: "decks",
            name: "Decks",
            description: "Decks of cards are a major staple in most modern games.",
            count: 0
        }
    }
};

//component
export default function RuleEditor(props){
    //state
    const[state, dispatch] = useReducer(reducer, props.state);
    const rulesRef = useRef();
    rulesRef.current = state;
    const[editorActive, setEditorActive] = useState(false);
    const[activeEditor, setActiveEditor] = useState({});
    const[ruleCards, setRulesCards] = useState({});

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
            
            default:
                return state;
        }
    };

    const loadRules = ()=>{

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
            return(<Rule 
                key={index} 
                icon={card.icon} 
                name={card.name} 
                type={card.type}
                count={state.memory[card.type].count} 
                description={card.description} 
                edit={addRule}
                manage={deleteRule}
            />);
        });
        return render;

    }, [ruleCards]);

    function addRule(name){

        //get rule master settings
        const masterSettings = {...ruleTypes[name]};
        const newid = uuidv4();
        masterSettings.schema.meta.id = newid;
        masterSettings.schema.state.id = newid;

        //activate editor
        setActiveEditor(masterSettings);
        setEditorActive(true);

        //update counter for cards
        let updateRuleCards = {...ruleCards};
        setRulesCards(updateRuleCards);

    }

    function manageRules(name){
        alert(name);
    }

    function deleteRule(){

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
        let updateRuleCards = {...ruleCards};
        setRulesCards(updateRuleCards);

        //clearing state
        setEditorActive(false);
        setActiveEditor({});
    }

    function createRule(){

    }

    //lifecycle
    useEffect(()=>{
        loadRules();
    },[]);

    //render
    return(
        <>  
            {/* Edit Item */}
            {editorActive && (
                <ToggleArea title={`Name: ${activeEditor.schema.meta.name ? activeEditor.schema.meta.name : activeEditor.schema.meta.name}`}>{
                    <FormRegion 
                        settings={activeEditor.schema} 
                        initialState={state.memory[activeEditor.name] && state.memory[activeEditor.name].items && state.memory[activeEditor.name].items[activeEditor.schema.meta.id] ?  state.memory[activeEditor.name].items[activeEditor.schema.meta.id] : activeEditor.schema.state} 
                        setRegionData={updateMemory} 
                        saveSection={saveRule}  
                    />
                }</ToggleArea>
            )}

            {/* Manage All Items */}

            {/* Render Cards */}
            <section id="game-rules" className="flex items-center flex-wrap">{renderRuleCards}</section>

            <section>
                <button onClick={()=>{console.log(state)}}>Log State</button>
            </section>
            
        </>
    )
}
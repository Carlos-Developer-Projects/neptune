//depedencies
import { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
//layout
import Dashboard from "../../src/layouts/dashboard";
import Meta from "../../src/components/global/meta";
import PageHeader from "../../src/components/dashboard/pageHeader";
import SectionHeader from "../../src/components/dashboard/SectionHeader";
import FormRegion from "../../src/components/forms/formRegion";
import TabRegions from "../../src/components/dashboard/tabRegions";
import ToggleArea from "../../src/components/dashboard/toggleArea";
import Button from "../../src/components/elements/button";
import TransitionArea from "../../src/components/dashboard/transtionArea";
import Rule from "../../src/components/projects/editor/rule";
//icons
import {GiCardDraw} from 'react-icons/gi';
//components
//data
import { theme } from "../../data/theme";
const crumbs = [
    {
      "text": "Home",
      "link": "/user"
    },
    {
        "text": "Projects",
        "link": "/projects"
    }
];
const tabsData = [
    { name: 'Project Data'},
    { name: 'Rules & Settings'},
    { name: 'Editions'},
    { name: 'Design'},
    { name: 'Marketing'}
];
const masterCopy = {
    rules:{
        intro:"Rules are the way your item NFT interaction which each other. Each NFT is connected to all others in the game and can send their status and data to each player."
    }
};
//page
export default function(){
    //state
    const[currentTab, setCurrentTab] = useState("Rules & Settings");
    const[rules, setRules]= useState([]);
    const[rulesSettings, setRulesSettings] = useState({});
    const rulesRef = useRef();
    const[project, setProject] = useState({
        name: "",
        description: "",
        image: "",
        type: "tcg",
        url: "none"
    });

    rulesRef.current = rulesSettings;
    //functions

    //Main project settings
    const saveMetaSection = (e)=>{
        console.log("save");
        console.log(project);
        //set a project id
        
        //save to user data via backend

        //return save state or error

    };
    const renderFromSections = (sections)=>{
        const render = sections.map((section)=>{
            return(<FormRegion key={section.meta.id} settings={section} initialState={section.controls.initialState} setRegionData={section.controls.regionData} saveSection={section.controls.saveSection}  />);
        });
        return render;
    };
    const projectFormsData = {
        sections: [
            {
                meta: {
                    id: "meta",
                    name: "Project Details",
                    intro: "Enter the basic details about your project.",
                    cta: "Save"
                },
                controls: {
                    regionData: setProject,
                    initialState: project,
                    saveSection: saveMetaSection
                }, 
                fields: [
                    {
                        id: "name",
                        label: "Name",
                        type: "text",
                        placholder: "Name your project",
                        settings: {},
                        message: "Name as it will be displayed to customers."
                    },
                    {
                        id: "description",
                        label: "Description",
                        type: "textarea",
                        placholder: "Describe your project",
                        settings: {},
                        rows: 6
                    },
                    {
                        id: "image",
                        label: "Project Image",
                        type: "file",
                        settings: {},
                        message: "Thumbnail for your project."
                    },
                    {
                        id: "logo",
                        label: "Logo",
                        type: "file",
                        settings: {},
                        message: "Master logo for the project."
                    },
                    {
                        id: "type",
                        label: "Game Type",
                        type: "select",
                        settings: {
                            default: "tcg"
                        },
                        options: [
                            {
                                value: "tcg",
                                name: "Trading Card Game"
                            },
                            {
                                value: "board",
                                name: "Board Game"
                            },
                            {
                                value: "d20",
                                name: "Tabletop RPG"
                            }
                        ]
                    },
                    {
                        id: "Url",
                        label: "Website URL (Optional)",
                        type: "text",
                        placholder: "Website of your project",
                        settings: {},
                        message: "Link to a landing page or other website that showcases your project."
                    },
                ]
            }
        ]
    };

    //Rules settings
    const updateRule = (updateState)=>{
        const updateRuleSettings = {...rulesRef.current};
        updateRuleSettings[updateState.id] = updateState;
        setRulesSettings(updateRuleSettings);
    };
    const saveRule = ()=>{
        console.log(rulesRef.current);
    };
    const addRule = ()=>{
        const ruleID = uuidv4();
        //update rule state
        const updateRuleSettings = {...rulesSettings};
        updateRuleSettings[ruleID] = {
            "name": "",
            "id": ruleID,
            "type": "please choose",
            "target":"please choose",
            "icon":"please choose"
        };
        setRulesSettings(updateRuleSettings);

        //update rule fields
        setTimeout(()=>{
            const updateRules = [...rules];
            updateRules.push({
                    meta: {
                        id: ruleID,
                        name: "New Rule",
                        intro: "Enter the settings for your game rule.",
                        cta: "Save Rule"
                    },
                    controls: {
                        regionData: updateRule,
                        initialState: rulesRef.current[ruleID],
                        saveSection: saveRule
                    },
                    fields: [
                        {
                            id: "name",
                            label: "Name",
                            type: "text",
                            placholder: "Name your rule.",
                            settings: {},
                            message: "Name of the rule."
                        },
                        {
                            id: "type",
                            label: "Rule Type",
                            type: "select",
                            settings: {
                                default: "please select"
                            },
                            options: [
                                {
                                    value: "number",
                                    name: "Number"
                                },
                                {
                                    value: "ability",
                                    name: "Ability"
                                }
                            ]
                        },
                        {
                            id: "target",
                            label: "Rule Applies To",
                            type: "select",
                            settings: {
                                default: "please select"
                            },
                            options: [
                                {
                                    value: "player",
                                    name: "Rule Applies to Players"
                                },
                                {
                                    value: "item",
                                    name: "Rule Applies to Items, Creature, or any Non Player Element"
                                },
                                {
                                    value: "global",
                                    name: "Rule Applie to the entire game"
                                }
                            ]
                        },
                        {
                            id: "icon",
                            label: "Rule Icon",
                            type: "file",
                            settings: {},
                            message: "Icon that represents your rule."
                        }
                    ]
            });
            setRules(updateRules);
        }, 50);
       
    };
    const renderRules = (allRules)=>{
        const render = allRules.map((rule)=>{
            return(<ToggleArea title={
                `Name: ${rulesSettings[rule.meta.id].name ? rulesSettings[rule.meta.id].name : rule.meta.name} ${rulesSettings[rule.meta.id].type ? `  -- Type: ${rulesSettings[rule.meta.id].type}` : ''}`} 
                key={rule.meta.id}>{
                <FormRegion 
                    key={rule.meta.id} 
                    settings={rule} 
                    initialState={rulesSettings[rule.meta.id]} 
                    setRegionData={rule.controls.regionData} 
                    saveSection={rule.controls.saveSection}  
                />
            }</ToggleArea>);
        });
        return render;
    };

    const manageRules = ()=>{

    };

    const ruleCreators = [
        {
            icon: "",
            name: "",
            description: "",
            create: addRule,
            manage: manageRules,
            count: 0
        }
    ];
   
    //lifecycle
    useEffect(()=>{
    },[rulesSettings]);

    //render
    return(
        <>
            <Meta title="New Project" />
            <Dashboard>
                <PageHeader theme={theme} title={!project.name ? "New Project" : project.name} crumbs={crumbs} />
                <div className="mt-6 px-4 pb-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
                    {/* Tab Menu */}
                    <TabRegions tabs={tabsData} currentTab={currentTab} setTabs={setCurrentTab} />

                    {currentTab === "Project Data" && (
                        <TransitionArea comparison={currentTab} name="Project Data">
                            <ToggleArea title="Project Main Details">{renderFromSections(projectFormsData.sections)}</ToggleArea>
                        </TransitionArea>
                    )}

                    {currentTab === "Rules & Settings" && (
                        <>
                            <TransitionArea comparison={currentTab} name="Rules & Settings">
                                <div className="flex items-start justify-between">
                                    <p className="mb-4 max-w-4xl">{masterCopy.rules.intro}</p>
                                </div>

                                <section id="game-rules" className="flex items-center flex-wrap">
                                    <Rule icon={GiCardDraw} name="Decks" count={0} description="Decks of cards are a major staple in most modern games." />
                                </section>

                                <section id="settings-type" className="mt-3 mb-3 flex items-center justify-start">
                                    <Button text="Rule" handleClick={addRule} custom="bg-button" />
                                    <Button text="Player Actions" handleClick={()=>{}} custom="ml-3 bg-button" />
                                    <Button text="Card Deck" handleClick={()=>{}} custom="ml-3 bg-button" />
                                    <Button text="Card Hand" handleClick={()=>{}} custom="ml-3 bg-button" />
                                    <Button text="Conditions" handleClick={()=>{}} custom="ml-3 bg-button" />
                                    <Button text="Element Types" handleClick={()=>{}} custom="ml-3 bg-button" />
                                    <Button text="Turn Phases" handleClick={()=>{}} custom="ml-3 bg-button" />
                                    <Button text="Board Regions" handleClick={()=>{}} custom="ml-3 bg-button" />
                                </section>

                                {rules.length > 0 && renderRules(rules)}
                            </TransitionArea>
                        </>
                    )}
                    
                </div>
            </Dashboard>
        </>
    )
}
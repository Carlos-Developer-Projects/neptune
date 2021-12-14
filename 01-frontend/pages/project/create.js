//depedencies
import { useEffect, useState, useRef, useMemo } from "react";
//layout
import Dashboard from "../../src/layouts/dashboard";
import Meta from "../../src/components/global/meta";
import PageHeader from "../../src/components/dashboard/pageHeader";
import FormRegion from "../../src/components/forms/formRegion";
import TabRegions from "../../src/components/dashboard/tabRegions";
import ToggleArea from "../../src/components/dashboard/toggleArea";
import TransitionArea from "../../src/components/dashboard/transtionArea";
import ContentEditor from "../../src/components/projects/editor/contentEditor";
//components
//data
import { theme } from "../../data/theme";
import { tabsData } from "../../data/projects";

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

const masterCopy = {
    rules:{
        intro:"Rules are the way your item NFT interaction which each other. Each NFT is connected to all others in the game and can send their status and data to each player."
    }
};
//page
export default function(){
    //state
    const[currentTab, setCurrentTab] = useState("Rules & Settings");
    const[project, setProject] = useState({
        name: "",
        description: "",
        image: "",
        type: "tcg",
        url: "none"
    });
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

    //lifecycle
    useEffect(()=>{
        console.log(tabsData);
    },[]);

    //render
    return(
        <>
            <Meta title="New Project" />
            <Dashboard>
                <style jsx>{`
                    .page-bg{
                        margin-bottom:-2rem;
                        display:block;
                        opacity: .25;
                        background-repeat:no-repeat;
                        background-size:cover;
                        background-position: 100% -20%;
                        width:100%;
                        height:400px;
                        background-image:url('/img/backgrounds/market-opt.png');
                    }
                    .page-content{
                        min-height: 900px;
                    }
                `}</style>
                
                <section className="page-content">
                    <PageHeader theme={theme} title={!project.name ? "New Project" : project.name} crumbs={crumbs} />
                    <div className="relative mt-6 px-4 pb-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">

                        {/* Tab Menu */}
                        <TabRegions tabs={tabsData} currentTab={currentTab} setTabs={setCurrentTab} />

                        {/* Project Info */}
                        {currentTab === "Project Info" && (
                            <TransitionArea comparison={currentTab} name="Project Info">
                                <ToggleArea title="Project Main Details">{renderFromSections(projectFormsData.sections)}</ToggleArea>
                            </TransitionArea>
                        )}

                        {/* Rules Editor */}
                        {currentTab === "Rules & Settings" && (
                            <>
                                <TransitionArea comparison={currentTab} name="Rules & Settings">
                                    <div className="flex items-start justify-between">
                                        <p className="mb-4 max-w-4xl">{masterCopy.rules.intro}</p>
                                    </div>

                                    <ContentEditor state={{
                                        memory: {}
                                    }} />

                                    {/* <section id="settings-type" className="mt-3 mb-3 flex items-center justify-start">
                                        <Button text="Rule" handleClick={addRule} custom="bg-button" />
                                        <Button text="Player Actions" handleClick={()=>{}} custom="ml-3 bg-button" />
                                        <Button text="Card Deck" handleClick={()=>{}} custom="ml-3 bg-button" />
                                        <Button text="Card Hand" handleClick={()=>{}} custom="ml-3 bg-button" />
                                        <Button text="Conditions" handleClick={()=>{}} custom="ml-3 bg-button" />
                                        <Button text="Element Types" handleClick={()=>{}} custom="ml-3 bg-button" />
                                        <Button text="Turn Phases" handleClick={()=>{}} custom="ml-3 bg-button" />
                                        <Button text="Board Regions" handleClick={()=>{}} custom="ml-3 bg-button" />
                                    </section> */}

                                </TransitionArea>
                            </>
                        )}
                        
                    </div>
                </section>
                
                <div className="page-bg"></div>
            </Dashboard>
        </>
    )
}
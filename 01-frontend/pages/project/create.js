//depedencies
import { useEffect, useState, useRef, useMemo } from "react";
import { useMoralis, useMoralisFile } from "react-moralis";
import { v4 as uuidv4 } from 'uuid';
//layout
import Dashboard from "../../src/layouts/dashboard";
//components
import Meta from "../../src/components/global/meta";
import PageHeader from "../../src/components/dashboard/pageHeader";
import FormRegion from "../../src/components/forms/formRegion";
import TabRegions from "../../src/components/dashboard/tabRegions";
import ToggleArea from "../../src/components/dashboard/toggleArea";
import TransitionArea from "../../src/components/dashboard/transtionArea";
import ContentEditor from "../../src/components/projects/editor/contentEditor";
import Banner from "../../src/components/global/banner";
import FooterBackground from "../../src/components/global/footerBackground";
//helpers
import {axiosSave} from "../../helpers/handleAxios";
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
    const {
        error,
        isUploading,
        moralisFile,
        saveFile,
      } = useMoralisFile();
    const{ user, isAuthenticated } = useMoralis();
    const[currentTab, setCurrentTab] = useState("Project Info");
    const[project, setProject] = useState({
        id: uuidv4(),
        name: "",
        description: "",
        image: "",
        type: "tcg",
        url: "none"
    });
    //functions

    //Main project settings
    const saveMetaSection = async(e)=>{
        e.preventDefault();

        //find images and store them to IPFS with Moralis
        console.log(project);

        //replace the reference to the images in the project to the moralis IPFS links
        saveFile(`${project.id}_logo`, project.logo, { saveIPFS: true });
        console.log(moralisFile.ipfs());
        console.log(moralisFile.hash());

 
        //Set this project to belong to the user
        project.user = user.id;

        //save to user data via backend
        //const results = await axiosSave(project, null);

        //return save state or error
        //console.log(results);

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

    //Load Project
    

    //lifecycle
    useEffect(async()=>{
    },[]);

    useEffect(()=>{
        console.log(user);
    },[isAuthenticated]);

    //render
    return(
        <>
            <Meta title="Project Editor" />
            <Dashboard>
                <section className="page-content">
                    
                    <PageHeader theme={theme} title={!project.name ? "New Project" : project.name} crumbs={crumbs} />
                    <div className="relative mt-6 px-4 pb-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
                        <Banner src={"/img/banners/top-dragon.jpg"} alt="Dragon Banner" />
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

                                </TransitionArea>
                            </>
                        )}
                        
                    </div>
                </section>

                {/* Image Footer */}
                <FooterBackground image="/img/backgrounds/market-opt.png" />
            </Dashboard>
        </>
    )
}
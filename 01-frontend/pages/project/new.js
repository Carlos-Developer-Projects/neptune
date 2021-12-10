//depedencies
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
//layout
import Dashboard from "../../src/layouts/dashboard";
import Meta from "../../src/components/global/meta";
import PageHeader from "../../src/components/dashboard/pageHeader";
import SectionHeader from "../../src/components/dashboard/SectionHeader";
import FormRegion from "../../src/components/forms/formRegion";
import TabRegions from "../../src/components/dashboard/tabRegions";
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
    { name: 'Rules'},
    { name: 'Editions'},
    { name: 'Design'},
    { name: 'Marketing'},
    { name: 'Products'}
];
//page
export default function(){
    //state
    const[currentTab, setCurrentTab] = useState("Project Data");
    const[project, setProject] = useState({
        name: "",
        description: "",
        image: "",
        type: "tcg",
        url: "none"
    });
    //functions
    const saveMetaSection = (e)=>{
        console.log("save");
        console.log(project);
        //set a project id
        
        //save to user data via backend

    };
    const renderFromSections = (sections)=>{
        const render = sections.map((section)=>{
            return(<FormRegion key={section.meta.id} settings={section} initialState={section.controls.initialState} setRegionData={section.controls.regionData} saveSection={section.controls.saveSection}  />);
        });
        return render;
    };
    //region data
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
                initialState : {
                    name: "",
                    description: "",
                    image: "",
                    type: "tcg",
                    url: "none"
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
                        id: "image",
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
    //render
    return(
        <>
            <Meta title="New Project" />
            <Dashboard>
                <PageHeader theme={theme} title={!project.name ? "New Project" : project.name} crumbs={crumbs} />
                <div className="mt-6 px-4 pb-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
                    <TabRegions tabs={tabsData} currentTab={currentTab} setTabs={setCurrentTab} />
                    {currentTab === "Project Data" && renderFromSections(projectFormsData.sections)}
                    
                </div>
            </Dashboard>
        </>
    )
}
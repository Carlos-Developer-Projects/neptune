//dependencies
import { useEffect } from "react";
//layout
import Dashboard from '../../src/layouts/dashboard';
//components
import Meta from "../../src/components/global/meta";
import PageHeader from "../../src/components/dashboard/PageHeader";
import SectionHeader from "../../src/components/dashboard/SectionHeader";
import MainContainer from "../../src/components/dashboard/mainContainer";
import PreviewLightRow from "../../src/components/projects/preview/preview_light_row";
//data
import { theme } from "../../data/theme";
import { dummy_projects } from "../../data/projects";
const crumbs = [
    {
      "text": "Home",
      "link": "/user"
    }
];

//page
export default function(){
    //state
    //functions
    //lifecycle
    useEffect(()=>{

    },[]);
    //render
    return(
        <>
            <Meta title="User Dashboard" />
            <Dashboard>
                <PageHeader theme={theme} title="User Dashboard" crumbs={crumbs} />
                <MainContainer>
                    <SectionHeader title="Latest Projects" />
                    <PreviewLightRow projects_data={dummy_projects} />
                </MainContainer>
            </Dashboard>
        </>
    )
}
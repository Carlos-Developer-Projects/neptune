//dependencies
import { useEffect } from "react";
//layout
import Dashboard from "../../src/layout/Dashboard";
//components
import Meta from "../../src/components/components/Meta";
import PageHeader from "../../src/components/components/PageHeader";
import SectionHeader from "../../src/components/components/SectionHeader";
import MainContainer from "../../src/components/dashboard/mainContainer";
//data
import { theme } from "../../data/theme";
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
    //render
    return(
        <>
            <Meta title="User Dashboard" />
            <Dashboard>
                <PageHeader theme={theme} title="User Dashboard" crumbs={crumbs} />
                <MainContainer>
                    <SectionHeader title="Latest Projects" />
                </MainContainer>
            </Dashboard>
        </>
    )
}
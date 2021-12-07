//dependencies
import { useEffect } from "react";
//layout
import Dashboard from '../../src/layouts/dashboard';
//components
import Meta from "../../src/components/global/Meta";
import PageHeader from "../../src/components/dashboard/PageHeader";
import SectionHeader from "../../src/components/dashboard/SectionHeader";
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
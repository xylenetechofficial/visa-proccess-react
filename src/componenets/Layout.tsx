import React from 'react'
import { CustomNavbarV2, CustomNavbarV3, MainContent } from './CustomComponents'
import {navigations} from "../navigation"
import { CustomSideBar } from './Sidebar'
function Layout(props: { children: any }) {
    return (
        <div>
            {/* <CustomNavbarV2></CustomNavbarV2> */}

            <CustomSideBar navigation={navigations}></CustomSideBar>

            <MainContent>
                {props.children}
            </MainContent>
        </div>
    )
}

export default Layout
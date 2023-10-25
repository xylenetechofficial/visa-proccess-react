import React from 'react'
import { CustomNavbarV2, CustomNavbarV3, MainContent } from './CustomComponents'
import {navigations} from "../navigation"
import { CustomSideBar } from './Sidebar'
import { NavigationInterface } from './model'
function Layout(props: { children: any ,navigations:NavigationInterface[]}) {
    return (
        <div>
            {/* <CustomNavbarV2></CustomNavbarV2> */}

            <CustomSideBar navigation={props.navigations}></CustomSideBar>

            <MainContent>
                {props.children}
            </MainContent>
        </div>
    )
}

export default Layout
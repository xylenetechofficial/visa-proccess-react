import React, { ReactHTMLElement, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { FaDocker } from "react-icons/fa";
import { Icon } from '@mui/material';
import visaIcon from '../assets/VisaIcon.png'
import { navigations } from '../navigation';
/**
 * Custom Sidebar Button
 * 
 * Call korbina jodi childer na thake
 * @param props NavigationInterface
 * @returns 
 */

function CustomSidebarButton(props: { navigation: NavigationInterface, currentDept: string, changeCurrentDept: (value: string) => void }) {
    const classStyleSelected = "flex items-center w-full p-2 transition duration-75 rounded-sm group  text-black bg-[#EEEEEE] text-[#414141]";
    const classStyleNonSelected = "flex items-center w-full p-2 transition duration-75 rounded-sm group  text-black hover:bg-[#EEEEEE] hover:text-[#414141]"
    return (<li>
        <NavLink to={props.navigation.path ?? ""} onClick={() => {
            if (props.currentDept == props.navigation.name) {
                props.changeCurrentDept('')
            } else {
                props.changeCurrentDept(props.navigation.name)

            }
        }} className={props.currentDept == props.navigation.name ? classStyleSelected : classStyleNonSelected}>
            {props.navigation.icon == '' ? <svg aria-hidden="true" className="w-6 h-6 text-black transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                : <Icon>{props.navigation.icon}</Icon>}
            <span className="ml-3">{props.navigation.name}</span>
        </NavLink>
    </li>);
}


function CustomSidebarbuttonMultiLevel(props: { navigation: NavigationInterface, currentDept: string, changeCurrentDept: (value: string) => void }) {
    // const [showChildren, setShowChildren] = useState(false)
    const classStyleNonselect = "flex items-center w-full p-2 transition duration-75 rounded-sm group  text-black hover:bg-[#EEEEEE] hover:text-[#414141]";
    const classStyleSelected = "flex items-center w-full p-2 transition duration-75 rounded-sm group  text-black bg-[#EEEEEE] text-[#414141]"
    return (<li>
        <button onClick={() => {
            // setShowChildren(!showChildren)
            if (props.currentDept == props.navigation.name) {
                props.changeCurrentDept('')
            } else {
                props.changeCurrentDept(props.navigation.name)

            }

        }} type="button" className={props.currentDept == props.navigation.name ? classStyleSelected : classStyleNonselect} aria-controls={props.navigation.name} data-collapse-toggle={props.navigation.name}>
            {/* <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-100 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path></svg> */}
            <Icon>{props.navigation.icon}</Icon>
            <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>{props.navigation.name}</span>
            <svg sidebar-toggle-item className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
        {props.navigation.children?.length && props.currentDept == props.navigation.name ? <ul id={props.navigation.name} className="   py-2 space-y-2 mt-[-2] bg-[#f8f8f8]">
            {props.navigation.children.map((ele) => (
                <li>
                    <NavLink to={ele.path ?? ""} className="flex items-center w-full p-2  transition duration-75 pl-11 group rounded-sm text-black  hover:bg-[#EEEEEE] hover:text-[#414141]">
                        {/* <Icon fontSize='small'>{ele.icon}</Icon> */}
                        {ele.name}
                    </NavLink>
                    {/* <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700">{ele.name}</a> */}
                </li>

            ))}

            {/* <li>
                <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700">Submenu 2</a>
            </li>
            <li>
                <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700">Submenu 3</a>
            </li> */}
        </ul> : ""}
    </li>);
}


export function CustomSideBar(props: { navigation: NavigationInterface[] }) {
    // states
    const [localNavigations, setLocalNavigations] = useState<NavigationInterface[]>([])
    const [searchQuery, setSearchQuery] = useState("")
    const [currentDept, setCurrentDept] = useState("")

    useEffect(() => {
        // set local navigations from props
        setLocalNavigations(props.navigation)
    }, [props.navigation])

    const onChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        // get value, trim space & store to search query
        const value = event.target.value
        value.trim()
        setSearchQuery(value)

        // define new navigation array
        const newNavigation: NavigationInterface[] = []
        // if search query empty the return props navigation
        if (value == "") {
            setLocalNavigations(props.navigation)
            return
        }

        // loop through all navigation department
        for (let i = 0; i < props.navigation.length; i++) {
            const department = props.navigation[i];
            // if no children then skip
            if (department.children == undefined)
                continue

            const pages = department.children;
            // loop through all pages
            for (let j = 0; j < pages.length; j++) {
                const page = pages[j];
                // if page name not match then skip
                if (!page.name.toLowerCase().includes(value.toLowerCase()))
                    continue

                // store page in new navition
                newNavigation.push(page)
            }
        }

        // change local nanvigation with search navigation
        setLocalNavigations(newNavigation)
    }

    const sidebarToggle = (<button data-drawer-target="logo-sidebar" onClick={() => {
        const target = document.getElementById("logo-sidebar");
      if(target)
        if (target.classList.contains("-translate-x-full")) {
            // console.log("Found class -- removing it");
            target.classList.remove("-translate-x-full")

        } else {
            // console.log("unable to find class -- adding it");
            target.classList.add("-translate-x-full")

        }
    }} data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="absolute inline-flex items-center p-2 text-sm text-gray-500 rounded-lg right-1 top-1 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span className="sr-only" >Close sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" fillRule="evenodd" d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"></path>
        </svg>
    </button>)

    const companyIcon = (<img src={visaIcon} className="h-8 ml-5 my-[25px]" alt="FlowBite Logo" />)

    const searchInput = (

        <div className='mx-5 my-8'>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input
                    onChange={onChangeSearchInput}
                    value={searchQuery}
                    type="search" id="default-search" className="block w-full p-3 pl-10 text-sm text-gray-900 border rounded-lg border-hover-bg bg-hover-bg focus:ring-gray-700 focus:border-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />

            </div>
        </div>

    )

    const scrollableMenuArea = (
        <div className="h-full px-3 pb-4 overflow-y-auto bg-main-bg dark:bg-gray-800">
            <p className='text-sm ml-3 my-5 text-[#919191]'>Menu</p>
            <ul className="space-y-2 font-medium">
                {localNavigations.map((ele) => (
                    <>
                        {ele.children?.length ?
                            <CustomSidebarbuttonMultiLevel
                                currentDept={currentDept}
                                navigation={ele}
                                changeCurrentDept={(value) => setCurrentDept(value)}
                            />
                            :
                            <CustomSidebarButton
                                navigation={ele}
                                currentDept={currentDept}
                                changeCurrentDept={(value) => setCurrentDept(value)}
                            />
                        }
                    </>

                ))}
                <div className='h-[250px]'>

                </div>


            </ul>
        </div>)

    return (

        <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full drop-shadow-sidebar bg-main-bg sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
            {sidebarToggle}
            {companyIcon}
            {searchInput}
            {scrollableMenuArea}




        </aside>);
}
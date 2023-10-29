import './scrollbar.css'
import { useRef, useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { FaRegBell, FaUsers, } from "react-icons/fa";
import { MdRefresh } from "react-icons/md";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUserAuth } from '../features/context/UserAuthContext';
import { getInitials, toTitleCase } from '../utils/function';
import './style.css'
import { useNavigate } from 'react-router-dom';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';


const MultiSelectCheckbox = (props: {
    option: { name: string, value: any }[]
    onChange: (value: any) => void
    value?: any
    inlined?: boolean
}) => {

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        console.log("OnClicked ")
        console.log(event.target.value)
        if (event.target.checked) {
            const newArray = [...props.value, value];
            props.onChange(newArray)
        } else {
            const newArray = props.value.filter((v: any) => v !== value)
            props.onChange(newArray)
            //   setSelectedOptions();
        }
    };


    // console.log(props.value)
    // console.log(props.option)
    return (
        <div>
            {/* {props.option.map((ele, index) => {
                return (
                    <label>
                        <input
                            type="checkbox"
                            value={ele.value}
                            checked={props.value.includes(ele.value)}
                            onChange={handleCheckboxChange}
                        />
                        {ele.name}
                    </label>
                )
            })} */}
            <FormGroup sx={{ m: 1, minWidth: 150, width: "80%" }}>
                {props.option.map((option: any) => (
                    <FormControlLabel
                        key={option.value}
                        control={
                            <Checkbox
                                checked={props.value && props.value.includes(option.value.toString())}
                                onChange={(event) => {
                                    const value = event.target.value;
                                    console.log(value);
                                    console.log(event.target.checked);
                                    console.log(props.value)
                                    if (event.target.checked) {
                                        const arr = [...props.value, value];
                                        props.onChange(arr);
                                    } else {
                                        const arr = props.value.filter((v: any) => v != value);

                                        props.onChange(arr);

                                    }
                                }}
                                value={option.value}
                            />
                        }
                        label={option.name}
                    />
                ))}
            </FormGroup>


        </div>
    );
};

export default MultiSelectCheckbox;

export function CustomButton2(props: { buttonText: string, icon: any, onClick: any }) {
    return (
        <button
            type="button"
            onClick={props.onClick}
            className="text-gray-900 hover:text-white border  border-highlight hover:bg-highlight focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        >
            {props.icon && <div className="me-2">{props.icon}</div>}
            {props.buttonText}
        </button>
    );
}
CustomButton2.propTypes = {
    buttonText: PropTypes.string.isRequired,
    icon: PropTypes.element, // Add prop type validation for icon prop as React element
    onClick: PropTypes.func, // Add prop type validation for onClick prop as a function
};

export function CustomButton(props: { buttonText: string, icon: any, onClick: any }) {
    return (
        <button
            type="button"
            onClick={props.onClick}
            className="text-white hover:text-white border  border-highlight hover:bg-highlight focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        >
            {props.icon && <div className="me-2">{props.icon}</div>}
            {props.buttonText}
        </button>
    );
}

CustomButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
    icon: PropTypes.element, // Add prop type validation for icon prop as React element
    onClick: PropTypes.func, // Add prop type validation for onClick prop as a function
};


function CustomSearchBar() {
    return (<div>
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
        </label>
        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
            <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search here..." />
            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Search
            </button>
        </div>
    </div>);
}



export function NavbarResponsiveFeatures(props: { searchFunction: (ele: string) => void, refresh?: () => void }) {
    // ! becarefull
    const { authUser, authLogOut } = useUserAuth();
    const navigate = useNavigate();

    const [notifications, setNotifications] = useState<NotificationInterface[]>([
        { message: "khabo", category: "eating" }]);
    const handleButtonClick = () => {
        // Handle button click logic here
        console.log("Button clicked!");
    };

    const [showHideClass, setShowHideClass] = useState(false)

    useEffect(() => {
        return () => {
            setShowHideClass(false)
        };
    }, [])

    return (<ul className="flex flex-wrap justify-between p-4 mt-4 font-medium border rounded-lg md:justify-normal md:items-center md:p-0 md:flex-row-reverse md:space-x-8 md:mt-0 md:border-0 ">
        {/* <li className='mb-3 md:mb-0'>
            <NotificationView notifications={notifications} />
        </li>
        <li className='mb-3 md:mb-0'>
            <CustomButton buttonText="Add filter" icon={<FaFilter />} onClick={handleButtonClick} />
        </li>

        <li className='mb-3 md:mb-0'> <CustomSearchBar />
        </li> */}


        {/* <li className='mb-0 md:mb-0 md:ml-2'>
            <CustomButton buttonText="Super Admin" icon={<FaUserCircle />} />
        </li> */}
        <li className='mb-3 cursor-pointer md:mb-0 md:ml-3'
            onClick={() => {
                console.log("here");   // Only Dev
                // authLogOut()
                setShowHideClass(!showHideClass)
            }}
        >
            <div data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" className="flex items-center space-x-4">
                <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-[#FFE0B2] rounded-full dark:bg-gray-600">
                    <span className="font-medium text-gray-600 dark:text-gray-300">{getInitials(authUser.name)}</span>
                </div>
                <div className="font-medium dark:text-white">
                    <div>{authUser.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{toTitleCase(authUser.role ?? "")}</div>
                </div>
            </div>

            <div id="userDropdown"
                className={showHideClass ? "z-10 show bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 class-2" :
                    "z-10 show bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 class-1"}>
                {/* <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div>Jese Leos</div>
                    <div className="font-medium truncate">name@email.com</div>
                </div> */}
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                    <li>

                        <a href="#"
                            onClick={() => {
                                navigate("/user/change-password")
                            }}
                            className="flex px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2" viewBox="0 0 16 16">
                                <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                                <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg> Change password</a>
                    </li>
                    <li>
                        {/* <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a> */}
                    </li>

                </ul>
                <div className="py-1">
                    <a href="#"
                        onClick={() => {
                            authLogOut()
                        }}
                        className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z" />
                            <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                        </svg>
                        Log out</a>
                </div>
            </div>
        </li>


        <li className='mb-3 md:mb-0'>
            <button type="button" className="relative inline-flex items-center p-2 mb-2 mr-2 text-sm font-medium text-center rounded-lg text-navbar-text hover:bg-highlight focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                <FaRegBell className="w-8 h-8" />
                <span className="sr-only">Notifications</span>
                <div className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white border-2 border-white rounded-full bg-[#E10000] top-1 right-1 dark:border-gray-900"></div>
            </button>
        </li>
        {props.refresh ?
            <li className='mb-3 md:mb-0'>
                <button type="button"
                    onClick={props.refresh}
                    className="relative inline-flex items-center p-2 mb-2 mr-2 text-sm font-medium text-center rounded-lg text-navbar-text hover:bg-highlight focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                    <MdRefresh className="w-8 h-8" />
                </button>
            </li>
            : ""}

        <li className='mb-3 md:mb-0 '>
            <div className=''>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        className="block w-full p-3 pl-10 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-gray-700 focus:border-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search..."
                        required
                        onChange={(event) => props.searchFunction(event.target.value)}
                    />

                </div>
            </div>

        </li>

    </ul>);
}


export function CustomNavbar() {


    return (
        <>
            <nav className="border-gray-200 bg-main-bg dark:bg-gray-900">
                <div className="flex flex-wrap items-center justify-between p-4 mx-auto max-w-screen-2xl">
                    <a href="#" className="flex items-center me-8">
                        {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" /> */}
                        <FaUsers />
                        <span className="self-center text-2xl font-semibold text-white whitespace-nowrap">Visa Management</span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-expanded="false" >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                    </button>
                    <div className="hidden w-full mx-4 grow md:block md:w-auto" id="navbar-default">
                        {/* <NavbarResponsiveFeatures /> */}
                    </div>
                </div>
            </nav>


        </>
    );
}

export function CustomNavbarV2() {
    return (<nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-main-bg dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex flex-wrap items-center justify-between mx-auto ">
                <div className="flex items-center justify-start">
                    <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <span className="sr-only">Open sidebar</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                        </svg>
                    </button>
                    <a href="https://flowbite.com" className="flex items-center ml-2 md:mr-24">
                        {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="FlowBite Logo" /> */}
                        <FaUsers className="mr-3 text-white h-7 w-7" />
                        <span className="self-center text-2xl font-semibold text-white whitespace-nowrap">Visa Management</span>
                    </a>
                </div>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-expanded="false" >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                </button>
                <div className="hidden w-full mx-4 grow md:block md:w-auto" id="navbar-default">
                    {/* <NavbarResponsiveFeatures /> */}
                </div>

            </div>
        </div>
    </nav>);
}
export function CustomNavbarV3(props: { pageName: string, searchFunction: (ele: string) => void, refresh?: () => void }) {

    return (<nav className="mb-3 -mx-2 shadow-navbar md:-mx-6 bg-main-bg dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-2 lg:px-5 lg:pl-3">
            <div className="flex flex-wrap items-center justify-between mx-auto ">
                <div className="flex items-center justify-start">
                    <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" onClick={
                        () => {
                            const target = document.getElementById("logo-sidebar");
                            const targetMain = document.getElementById("MainContent");
                            if (target && targetMain) {
                                if (targetMain.classList.contains("sm:ml-64")) {

                                    // target.style.display="none";
                                    target.classList.add("sm:hidden");
                                    targetMain.classList.remove("sm:ml-64");
                                } else {
                                    // target.style.display="block";
                                    target.classList.remove("sm:hidden");
                                    targetMain.classList.add("sm:ml-64");
                                    targetMain.classList.add("translate-x-0");
                                }

                                // Check if the class exists
                                if (target.classList.contains("-translate-x-full")) {
                                    // console.log("Found class -- removing it");
                                    target.classList.remove("-translate-x-full")

                                } else {
                                    // console.log("unable to find class -- adding it");
                                    target.classList.add("-translate-x-full")

                                }


                            }
                        }
                    } type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <span className="sr-only">Open sidebar</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                        </svg>
                    </button>
                    <a href="" className="flex items-center ml-2 md:mr-24">
                        {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="FlowBite Logo" /> */}

                        <span className="self-center text-[28px] font-semibold whitespace-nowrap text-primary-text">{props.pageName}</span>
                    </a>
                </div>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-expanded="false" >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                </button>
                <div className="hidden w-full mx-4 grow md:block md:w-auto" id="navbar-default">
                    <NavbarResponsiveFeatures refresh={props.refresh} searchFunction={props.searchFunction} />
                </div>

            </div>
        </div>
    </nav>);
}



export function MainContent(props: { children: any }) {
    return (<div id='MainContent' className="px-2 md:px-6 sm:ml-64">
        <div className="">
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />
            {/* <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
                <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
                <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
            </div>
            <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
            </div>
            <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
            </div> */}
            {props.children}
        </div>
    </div>);
}




export function NotificationView(props: { notifications: NotificationInterface[] }) {


    const viewRef = useRef<HTMLDivElement>(null);
    const view = viewRef.current;

    // Automatically scroll to the bottom of the view when a new notification is added
    useEffect(() => {
        if (view) {
            view.scrollTop = view.scrollHeight;
        }
    }, []);

    return (
        <div className='custom-className-scrollbar w-80 h-20 overflow-auto px-5 py-2 border-2 border-[#46CEFF] rounded-lg'

            style={{ scrollbarWidth: "thin" }}
            ref={viewRef}
        >
            {props.notifications.map((notification, index) => (
                <QuickNotification key={index} notification={notification}></QuickNotification>
            ))}
        </div>
    );
}

interface NotificationInterface {
    message: string
    category: string
}

function QuickNotification(props: { notification: NotificationInterface }) {
    return (<div className="flex p-1 mb-1 text-xs text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert">
        <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
        <span className="sr-only">{props.notification.category}</span>
        <div>
            <span className="font-medium">{props.notification.category} alert!</span> {props.notification.message}
        </div>
    </div>);
}


export const MultiSelectCheckbox2 = (props: {
    option: { name: string, value: any }[]
    onChange: (value: any) => void
    value?: any
    inlined?: boolean
}) => {

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        console.log("OnClicked ")
        console.log(event.target.value)
        if (event.target.checked) {
            const newArray = [...props.value, value];
            props.onChange(newArray)
        } else {
            const newArray = props.value.filter((v: any) => v !== value)
            props.onChange(newArray)
            //   setSelectedOptions();
        }
    };


    // console.log(props.value)
    // console.log(props.option)
    return (
        <div>
            
            <FormGroup sx={{ m: 1, minWidth: 150, width: "100%", display:"fle", direction:"left" }}>
                {props.option.map((option: any) => (
                    <FormControlLabel
                        key={option.value}
                        control={
                            <Checkbox
                                checked={props.value && props.value.includes(option.value.toString())}
                                onChange={(event) => {
                                    const value = event.target.value;
                                    console.log(value);
                                    console.log(event.target.checked);
                                    console.log(props.value)
                                    if (event.target.checked) {
                                        const arr = [...props.value, value];
                                        props.onChange(arr);
                                    } else {
                                        const arr = props.value.filter((v: any) => v != value);

                                        props.onChange(arr);

                                    }
                                }}
                                value={option.value}
                            />
                        }
                        label={option.name}
                    />
                ))}
            </FormGroup>


        </div>
    );
};



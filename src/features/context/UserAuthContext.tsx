import { createContext, useContext, useEffect, useState } from "react";
import { AgentInterface, UserInterface } from "./Model";
import { SetJwtToken, getJwtToken } from "../../utils/function";
import { JwtRestApi, getpermission_ui } from "./Repository";
import { NavigationAdapter, PermissionHelper, NavigationInterface, PermissionNavigationInterface } from "../../componenets/model";
import { navigations as NAV } from '../../navigation';

// create user context
const userAuthContext = createContext<any>(null);

// user context provider
export function UserAuthContextProvider(props: { children: any }) {
    // states
    const [user, setUser] = useState<UserInterface>();
    const [loading, setLoading] = useState(true);
    const [agent, setAgent] = useState<AgentInterface>();
    const [permissionList, setPermissionList] = useState<any[]>([])
    const [navigationList, setNavigationList] = useState<any[]>([])

    // functions
    // add user to context
    async function addUser(value: any) {
        setUser(value);
        setLoading(false)
    }

    // remove user to context
    async function removeUser() {
        setUser(undefined);
        SetJwtToken("")
    }

    async function addAgent(value: any) {
        setAgent(value);
        setLoading(false)
    }

    async function addPermissionNavigation(data: PermissionNavigationInterface) {
        setPermissionList(data.permission_list)
        setNavigationList(data.navigation_list)
        setLoading(false)
    }

    async function fetchUser() {
        // const u: UserInterface = {
        //     name: "admin user",
        //     email: "admin@mail.com",
        //     user_name: "admin user"
        // }
        // setUser(u)
        

        try {
            // const jwtToken = getJwtToken();
            const userData = await JwtRestApi()
            if (userData) {
                setUser(userData)
            }

            const permissionListNavigationData = await getpermission_ui()
            if (permissionListNavigationData) {
                setPermissionList(permissionListNavigationData.permission_list)
                // setNavigationList(permissionListNavigationData.navigation_list)
                setNavigationList(NAV)
            }

            setLoading(false)

        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    useEffect(() => {
        console.log("Hi, Congratulation! you are inside the useeffect of userAuthContext.")
        fetchUser();
    }, []);

    return (<userAuthContext.Provider value={{ addUser, removeUser, user, addAgent, agent, addPermissionNavigation, permissionList, navigationList }}>{!loading && props.children}</userAuthContext.Provider>);
}

export function useUserAuth() {
    const { addUser, removeUser, user, addAgent, agent, addPermissionNavigation, permissionList, navigationList } = useContext(userAuthContext);

    return Object.freeze({
        authLogIn: (user: UserInterface) => addUser(user),
        authLogOut: () => removeUser(),
        authUser: user as UserInterface,
        authAgentAdd: (user: UserInterface) => addAgent(user),
        authAgent: agent as AgentInterface,
        authAddPermissionNavigation: (data: PermissionNavigationInterface) => addPermissionNavigation(data),
        authPermissionList: new PermissionHelper(permissionList),
        authNavigationList: navigationList
    });
}
import { createContext, useContext, useEffect, useState } from "react";
import { AgentInterface, UserInterface } from "./Model";
import { SetJwtToken, getJwtToken } from "../../utils/function";
import { JwtRestApi } from "./Repository";
import { NavigationAdapter, NavigationHelper, NavigationInterface } from "../../componenets/model";

// create user context
const userAuthContext = createContext<any>(null);

// user context provider
export function UserAuthContextProvider(props: { children: any }) {
    // states
    const [user, setUser] = useState<UserInterface>();
    const [loading, setLoading] = useState(true);
    const [agent, setAgent] = useState<AgentInterface>();
    const [navigations, setNavigations] = useState<NavigationInterface[]>([])
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

    async function addUI(value: any) {
        setNavigations(value);
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
            const jwtToken = getJwtToken();
            const userData = await JwtRestApi({ JwtToken: jwtToken })
            if (userData) {
                setUser(userData)
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

    return (<userAuthContext.Provider value={{ addUser, removeUser, user, addAgent, agent, addUI, navigations }}>{!loading && props.children}</userAuthContext.Provider>);
}

export function useUserAuth() {
    const { addUser, removeUser, user, addAgent, agent, addUI, navigations } = useContext(userAuthContext);

    return Object.freeze({
        authLogIn: (user: UserInterface) => addUser(user),
        authLogOut: () => removeUser(),
        authUser: user as UserInterface,
        authAgentAdd: (user: UserInterface) => addAgent(user),
        authAgent: agent as AgentInterface,
        authAddNavigation: (list: NavigationAdapter[]) => addUI(list),
        authNavigation: new NavigationHelper(navigations),
    });
}
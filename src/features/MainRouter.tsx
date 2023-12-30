// lib
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Layout from '../componenets/Layout';
import User from './user/Router';
import Dashboard from './dashboard/Router';
import Login from './login/Router';
import Master from './masters/Router';
import DomesticTicket from './domestic-ticket/Router';
import JobDPT from './job-dpt/Router';
import WithOutJobOder from './withotJobOrder/Router';
import Visa from './visa/Router';
import Dev from './testComponent/Router';
import RC from './RC/Router';
import Agreement from './agreement/Router'
import Account from './account/Router'
import Invoice from './invoice/Router'
import Immigration from './immigration_2/Router'
import Delhi from './delhi_2/Router'
import TicketingDpt from './ticketingDpt/Router'

import { UserAuthContextProvider, useUserAuth } from './context/UserAuthContext';
import { useEffect, useState } from 'react';
import { NavigationInterface } from '../componenets/model';





function Main() {
    return (
        <UserAuthContextProvider>
            <Router>
                <Routes>
                    <Route path='/' element={<Login />}></Route>
                    <Route path='/*' element={<Others />}></Route>
                </Routes>
            </Router>
        </UserAuthContextProvider>

    )
}

export default Main;

function Others() {
    const { authUser, authNavigationList } = useUserAuth();
    const [navigations, setNavigations] = useState<NavigationInterface[]>([])

    const navigate = useNavigate()

    useEffect(() => {
        if (!authUser) {
            navigate("")
        }
        setNavigations(authNavigationList)
    }, [authUser])

    return (
        <>
            {authUser ?
                <><Layout navigations={navigations}>
                    <Routes>
                        {/* dashboard all route */}
                        <Route path='/user/*' element={<User />}></Route>
                        <Route path='/dashboard/*' element={<Dashboard />}></Route>
                        <Route path='/dev/*' element={<Dev />}></Route>
                        <Route path='/masters/*' element={<Master />}></Route>
                        <Route path='/domestic-ticket/*' element={<DomesticTicket />}></Route>
                        <Route path='/job-dpt/*' element={<JobDPT />}></Route>
                        <Route path='/without-job-order/*' element={<WithOutJobOder />}></Route>
                        <Route path='/visa/*' element={<Visa />}></Route>
                        <Route path='/rc/*' element={<RC />}></Route>
                        <Route path='/agreement/*' element={<Agreement />}></Route>
                        <Route path='/account/*' element={<Account />}></Route>
                        <Route path='/invoice/*' element={<Invoice />}></Route>
                        <Route path='/immigration/*' element={<Immigration />}></Route>
                        <Route path='/delhi-account/*' element={<Delhi />}></Route>
                        <Route path='/ticketing-dpt/*' element={<TicketingDpt />}></Route>

                    </Routes>
                </Layout></>
                : ""}

        </>
    )
}
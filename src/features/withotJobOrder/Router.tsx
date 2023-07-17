// lib
import { lazy, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'

import { UserAuthContextProvider, useUserAuth } from '../context/UserAuthContext';

// import InterviewSchedulePeriod from './interviewSchedulePeriod/Router';
// import InterviewSchedule from './interviewSchedule/Router';
// import TicketIssue from './ticketIssue/Router';

import Selection from "./Selection/Router"
import MofaEntry from "./mofa-entry/Router"
import SendToActualMofaEntry from "./SendToActualMofaEntry/Router"





function Main() {
    // const { user } = useUserAuth()
    return (

        <Routes>
            <Route path='/selection/*' element={<Selection />}></Route>
            <Route path='/mofa-entry/*' element={<MofaEntry />}></Route>
            <Route path='/send-to-actual-mofa-entry/*' element={<SendToActualMofaEntry />}></Route>


        </Routes>


    )
}




export default Main;
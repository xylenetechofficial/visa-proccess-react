// lib
import { lazy, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'

import { UserAuthContextProvider, useUserAuth } from '../context/UserAuthContext';

import InterviewSchedulePeriod from './interviewSchedulePeriod/Router';
import InterviewSchedule from './interviewSchedule/Router';
import TicketIssue from './ticketIssue/Router';







function Main() {
    // const { user } = useUserAuth()
    return (

        <Routes>
            <Route path='/interview-schedule-period/*' element={<InterviewSchedulePeriod />}></Route>
            <Route path='/interview-schedule/*' element={<InterviewSchedule />}></Route>
            <Route path='/ticket-issue/*' element={<TicketIssue />}></Route>

        </Routes>


    )
}




export default Main;
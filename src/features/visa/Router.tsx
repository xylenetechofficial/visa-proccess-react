// lib
import { lazy, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'

import { UserAuthContextProvider, useUserAuth } from '../context/UserAuthContext';

// import InterviewSchedulePeriod from './interviewSchedulePeriod/Router';
// import InterviewSchedule from './interviewSchedule/Router';
// import TicketIssue from './ticketIssue/Router';
import BLockVisa from "./blockVisa/Router"
import IndexVisa from "./indexVisa/Router"
import SourcingCollectionDashboard from "./sourcingCollectionDashboard/Router"
import SubmissionDashboardDuabi from "./submissionDashboardDubai/Router"
import SendMofa from "./sendToMofa/Router"
import MofaEntry from "./mofaEntry/Router"
import SubmisssionDashboard from "./submissionDashboard/Router"
import VisaReceived from "./visaReceived/Router"
import MolForwardedToVisaDepartment from "./molForwardedToVisaDepartment/Router"
import MolReceived from "./molReceived/Router"
import MolSubmitedToCompany from "./molSubmitedToCompany/Router"
import WorkPermitReceivedFromCompany from "./workPermitReceivedFromCompany/Router"
import DubaiDataEntry from "./dubaiDataEntry/Router"





function Main() {
    // const { user } = useUserAuth()
    return (

        <Routes>
            <Route path='/block-visa/*' element={<BLockVisa />}></Route>
            <Route path='/index-visa/*' element={<IndexVisa />}></Route>
            <Route path='/sourcing-collection-dashboard/*' element={<SourcingCollectionDashboard />}></Route>
            <Route path='/submission-dashboad-dubai/*' element={<SubmissionDashboardDuabi />}></Route>
            <Route path='/send-to-mofa/*' element={<SendMofa />}></Route>
            <Route path='/mofa-entry/*' element={<MofaEntry />}></Route>
            <Route path='/submission-dashboard/*' element={<SubmisssionDashboard />}></Route>
            <Route path='/visa-received/*' element={<VisaReceived />}></Route>
            <Route path='/mol-forwarded-to-visa-dept/*' element={<MolForwardedToVisaDepartment />}></Route>
            <Route path='/mol-received/*' element={<MolReceived />}></Route>
            <Route path='/mol-submited-to-company/*' element={<MolSubmitedToCompany />}></Route>
            <Route path='/work-permit-recieved-from-company/*' element={<WorkPermitReceivedFromCompany />}></Route>
            <Route path='/dubai-data-entry/*' element={<DubaiDataEntry />}></Route>


        </Routes>


    )
}




export default Main;
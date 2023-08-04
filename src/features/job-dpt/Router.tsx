// lib
import { lazy, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'

import { UserAuthContextProvider, useUserAuth } from '../context/UserAuthContext';

// import InterviewSchedulePeriod from './interviewSchedulePeriod/Router';
// import InterviewSchedule from './interviewSchedule/Router';
// import TicketIssue from './ticketIssue/Router';
import JobOrder from "./jobOrder/Router"
import AssignToOPManager from "./assignToOPManager/Router"
import AssignToRMManager from "./assignToRMManager/Router"
import AssignToRSAndRC from "./assignToRSAndRC/Router"
import JobOrderApprove from "./jobOrderApprove/Router"
import Vacancy from "./vacancy_2/Router"
import VacancyApprove from "./vacancyApprove/Router"
import VacancyApproveByOM from "./VacancyApproveByOM/Router"
import TC from "./t&c/Router"
import ProjectStatusKSA from "./ProjectStatusKSA/Router"
import ProjectStatusKSAClosed from "./ProjectStatusKSAClosed/Router"
import Selection from "./Selection/Router"
import SelectionUpload from "./SelectionUpload/Router"






function Main() {
    // const { user } = useUserAuth()
    return (

        <Routes>
            <Route path='/job-order/*' element={<JobOrder />}></Route>
            <Route path='/asign-to-op-manager/*' element={<AssignToOPManager />}></Route>
            <Route path='/asign-to-rm-manager/*' element={<AssignToRMManager />}></Route>
            <Route path='/asign-to-rc-rs/*' element={<AssignToRSAndRC />}></Route>
            <Route path='/vacancy/*' element={<Vacancy />}></Route>
            <Route path='/vacancy-approve/*' element={<VacancyApprove />}></Route>
            <Route path='/vacancy-approve-by-om/*' element={<VacancyApproveByOM />}></Route>
            <Route path='/terms-condition/*' element={<TC />}></Route>
            <Route path='/job-order-approve/*' element={<JobOrderApprove />}></Route>
            <Route path='/project-status-ksa/*' element={<ProjectStatusKSA />}></Route>
            <Route path='/project-status-ksa-closed/*' element={<ProjectStatusKSAClosed />}></Route>
            <Route path='/selection/*' element={<Selection />}></Route>
            <Route path='/selection-upload/*' element={<SelectionUpload />}></Route>


        </Routes>


    )
}




export default Main;
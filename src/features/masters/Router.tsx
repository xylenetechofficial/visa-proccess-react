// lib
import { lazy, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'

import { UserAuthContextProvider, useUserAuth } from '../context/UserAuthContext';

import Agent from './agent/Router';
import Vendor from './vendor/Router';
import Country from './country/Router';
import User from './user/Router';
import Role from './role/Router';
import Sector from "./sector/Router"
import Agency from './agency/Router';
import NewUser from './newUser/Router';
import Permission from './permissionGroup/Router';
import OtherDocs from './other_docs/Router';
import InterviewSector from './interviewSector/Router';
import VisaAuthorisation from './visaAuthorization/Router';
import InterviewMode from './interviewMode/Router';
import Grade from './grade/Router';
import MofaPayment from './MofaPayment/Router';
import VisaType from './VisaType/Router';
import ConsolidateCharge from './consolidateCharge/Router';
import Bank from './bank/Router';
import Company from './company/Router';
import AgentSpecialNote from './agentSpecialNote/Router';

import ClientLogin from './newClientLogin/Router';
import CandidateReverseToUnderployment from './candidateReverseToUnderployment/Router';









function Main() {
    // const { user } = useUserAuth()
    return (

        <Routes>
            <Route path='/agent/*' element={<Agent />}></Route>
            <Route path='/vendor/*' element={<Vendor />}></Route>
            <Route path='/country/*' element={<Country />}></Route>
            <Route path='/user/*' element={<User />}></Route>
            <Route path='/permission-group/*' element={<Permission />}></Route>
            {/* <Route path='/role/*' element={<Role />}></Route> */}
            <Route path='/sector/*' element={<Sector />}></Route>
            <Route path='/agency/*' element={<Agency />}></Route>
            {/* <Route path='/newUser/*' element={<NewUser />}></Route> */}
            <Route path='/other-docs/*' element={<OtherDocs />}></Route>
            <Route path='/interview-sector/*' element={<InterviewSector />}></Route>
            <Route path='/visa-authorization/*' element={<VisaAuthorisation />}></Route>
            <Route path='/interview-mode/*' element={<InterviewMode />}></Route>
            <Route path='/grade/*' element={<Grade />}></Route>
            <Route path='/mofa-payment/*' element={<MofaPayment />}></Route>
            <Route path='/visa-type/*' element={<VisaType />}></Route>
            <Route path='/consolidate-charge/*' element={<ConsolidateCharge />}></Route>
            <Route path='/bank/*' element={<Bank />}></Route>
            <Route path='/company/*' element={<Company />}></Route>
            <Route path='/agent-special-note/*' element={<AgentSpecialNote />}></Route>
            <Route path='/client-login/*' element={<ClientLogin />}></Route>
            <Route path='/candidate-reverse-to-underployment/*' element={<CandidateReverseToUnderployment />}></Route>

            {/* <Route path='/otp/*' element={<OTP />}></Route> */}
            {/* <Route path='/forgot-password/*' element={<ForgotPassword />}></Route>
                <Route path='/*' element={<Others />}></Route> */}
        </Routes>


    )
}




export default Main;
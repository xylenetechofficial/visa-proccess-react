// lib
import { lazy, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'

import { UserAuthContextProvider, useUserAuth } from '../context/UserAuthContext';

import CandidatesList from "./candidatesList/Router";
import RCCandidatesList from "./rcCandidatesList/Router";





function Main() {
    
    return (

        <Routes>
            <Route path='/candidates-list/*' element={<CandidatesList />}></Route>
            <Route path='/RC-candidates-list/*' element={<RCCandidatesList />}></Route>     

        </Routes>


    )
}




export default Main;
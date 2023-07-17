// lib
import { lazy, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'

import { UserAuthContextProvider, useUserAuth } from '../context/UserAuthContext';

import DeployCandidates from './deployCandidates/Router'



function Main() {
    // const { user } = useUserAuth()
    return (

        <Routes>
            <Route path='/deploy-candidates/*' element={<DeployCandidates />}></Route>
            

        </Routes>


    )
}




export default Main;
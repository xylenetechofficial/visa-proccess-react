// lib
import { lazy, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'

import { UserAuthContextProvider, useUserAuth } from '../context/UserAuthContext';

import ImmigrationDashboard from './immigrationDashboard/Router';
import ImmigrationDonePPRelease from './immigrationDonePPRelease/Router';
import IndexForEwakala from './indexForEwakala/Router';





function Main() {
    
    return (

        <Routes>
            <Route path='/immigration-dashboard/*' element={<ImmigrationDashboard />}></Route>
            <Route path='/immigration-done-pp-release/*' element={<ImmigrationDonePPRelease />}></Route>     
            <Route path='/index-for-ewakala/*' element={<IndexForEwakala />}></Route>     

        </Routes>


    )
}




export default Main;
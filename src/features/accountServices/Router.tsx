// lib
import { lazy, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'

import { UserAuthContextProvider, useUserAuth } from '../context/UserAuthContext';

import Agreement from './services/Router'



function Main() {
    // const { user } = useUserAuth()
    return (

        <Routes>
            <Route path='/service-charges/*' element={<Agreement />}></Route>
            

        </Routes>


    )
}




export default Main;
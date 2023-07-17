// lib
import { lazy, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'

import { UserAuthContextProvider, useUserAuth } from '../context/UserAuthContext';

import Agreement from './agreement/Router'



function Main() {
    // const { user } = useUserAuth()
    return (

        <Routes>
            <Route path='/agreement/*' element={<Agreement />}></Route>
            

        </Routes>


    )
}




export default Main;
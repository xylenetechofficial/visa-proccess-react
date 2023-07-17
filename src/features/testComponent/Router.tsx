// lib
import { lazy, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'

import { UserAuthContextProvider, useUserAuth } from '../context/UserAuthContext';


import Dev from "./TestComponent"





function Main() {
    // const { user } = useUserAuth()
    return (

        <Routes>
            <Route path='/*' element={<Dev />}></Route>
            

            {/* <Route path='/otp/*' element={<OTP />}></Route> */}
            {/* <Route path='/forgot-password/*' element={<ForgotPassword />}></Route>
                <Route path='/*' element={<Others />}></Route> */}
        </Routes>


    )
}




export default Main;
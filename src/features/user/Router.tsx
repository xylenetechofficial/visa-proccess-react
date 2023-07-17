// lib
import { Routes, Route } from 'react-router-dom'
// component
import ChangePassword from './presenter/ChangePassword';


function Main() {
    return (
        <Routes>
            <Route path='/change-password' element={<ChangePassword />}></Route>
        </Routes>
    )
}

export default Main;
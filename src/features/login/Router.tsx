// lib
import { Routes, Route } from 'react-router-dom'
// component
import Login from './presenter/Index';


function Main() {
    return (
        <Routes>
            <Route path='/' element={<Login />}></Route>
        </Routes>
    )
}

export default Main;
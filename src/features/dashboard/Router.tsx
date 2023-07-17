// lib
import { Routes, Route } from 'react-router-dom'
// component
import Dashboard from './presenter/Index';


function Main() {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />}></Route>
        </Routes>
    )
}

export default Main;
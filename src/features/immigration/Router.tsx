// lib
import { Routes, Route } from 'react-router-dom'
// component
import Dashboard from './presenter/index';


function Main() {
    return (
        <Routes>
            <Route path='/immigration-dashboard' element={<Dashboard />}></Route>
        </Routes>
    )
}

export default Main;
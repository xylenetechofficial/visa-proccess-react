// lib
import { Routes, Route } from 'react-router-dom'
// component
import Home from './presenter/Index';



function Main() {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
        </Routes>
    )
}

export default Main;
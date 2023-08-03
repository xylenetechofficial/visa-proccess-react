// lib
import { Routes, Route } from 'react-router-dom'
// component
import Home from './presenter/index';



function Main() {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
        </Routes>
    )
}

export default Main;
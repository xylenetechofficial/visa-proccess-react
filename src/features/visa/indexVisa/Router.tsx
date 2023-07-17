// lib
import { Routes, Route } from 'react-router-dom'
// component
import Home from './presenter/Index';
import CancelPartyCode from './presenter/CancelPartyCode';




function Main() {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/cancel-party-code' element={<CancelPartyCode />}></Route>
        </Routes>
    )
}

export default Main;
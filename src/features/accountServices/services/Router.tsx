
import { Route, Routes } from 'react-router-dom'
import Home from './presenter/index'

export default function Main(){
    return (
        <>
        <Routes>
        <Route path='/' element={<Home />} ></Route>
        </Routes>
        </>
    )
}
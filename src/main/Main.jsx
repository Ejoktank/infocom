import { NavLink, Routes, Route } from 'react-router-dom';
import { MainPage } from './main-page/MainPage';
import { Products } from './products/Products';
import { Services } from './srevices/Services';
import { CallManager } from './call_manager/CallManager';

export function Main() {
    return (
        <Routes>
            <Route path='/' element={MainPage}></Route>
            <Route path='/products' element={Products}></Route>
            <Route path='/services' element={Services}></Route>
            <Route path='/call-manager' element={CallManager}></Route>
        </Routes>
    )
}

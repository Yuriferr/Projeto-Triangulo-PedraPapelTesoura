import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/index'
import Triangulo from './pages/Triangulo/index';
import Pedra from './pages/Pedra/index';

function Routas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/pedra' element={<Pedra />}/>
                <Route path='/triangulo' element={<Triangulo />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routas
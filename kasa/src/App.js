import React from 'react';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Lodging from './pages/Lodging';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path='/lodging/:id' element={<Lodging />}/>
                {/* Page Erreur 404 */}
                <Route path="*" element={<Error />} />
                <Route path="/lodging/:id/*" element={<Error />} />
                
            </Routes>
        </BrowserRouter>
    );
};

export default App;
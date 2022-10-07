import React from 'react';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                {/* Page Erreur 404 */}
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
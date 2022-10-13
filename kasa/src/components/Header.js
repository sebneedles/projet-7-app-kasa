import React from 'react';
import Navigation from './Navigation';

const Header = () => {
    return (
        <header>
            <a href="/home">
                <img src="http://localhost:3000/logo-kasa.svg" alt="Logo Kasa" className="kasa-logo"/>
            </a>
            <Navigation />
        </header>
    );
};

export default Header;
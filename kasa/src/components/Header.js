import React from 'react';
import Navigation from './Navigation';
import logo from '../assets/images/logo-kasa.svg';

const Header = () => {
    return (
        <div>
            <header>
                <a href="/home">
                    <img src={logo} alt="Logo Kasa" className="kasa-logo"/>
                </a>
                <Navigation />
            </header>
        </div>
    );
};

export default Header;
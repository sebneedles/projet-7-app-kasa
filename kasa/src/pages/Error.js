import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Error = () => {
    return (
        <div>
            <Header />
            <section className="error-element">
                <h1 className='title-error'>404</h1>
                <h2 className='title-error-messsage'>Oups! La page que vous demandez n'existe pas.</h2>
                <NavLink to="/home" className='link-error'>Retourner sur la page d'accueil</NavLink>
            </section>
            <Footer />
        </div>
    );
};

export default Error;
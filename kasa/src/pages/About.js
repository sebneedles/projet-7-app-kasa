import React from 'react';
import Header from '../components/Header';
import banner from '../assets/images/banner-about.jpg';
import Footer from '../components/Footer';
import Collapse from '../components/Collapse';

const About = () => {
    return (
        <div>
            <Header />
            <section className='banner'>
                <div className='kasa-img'>
                    <img src={banner} alt="Kasa, chez vous, partout et ailleurs."/>
                </div>
                <Collapse />
            </section>
            <Footer />
        </div>
    );
};

export default About;
import React from 'react';
import Header from '../components/Header';
import banner from '../assets/images/banner-about.jpg';
import Footer from '../components/Footer';
import Collapse from '../components/Collapse';
import CollapseData from '../components/CollapseData';

const About = () => {
    return (
        <div>
            <Header />
            <section className='banner'>
                <div className='kasa-img'>
                    <img src={banner} alt="Kasa, chez vous, partout et ailleurs."/>
                </div>
                <div className="part__about">
                    <div className="wrapper">
                        {CollapseData.map((item, index) => (
                            <Collapse title={item.title} answer={item.answer} key={index} />
                        ))}
                        
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default About;
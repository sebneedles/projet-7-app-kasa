import React from 'react';
import Header from '../components/Header';
import banner from '../assets/images/banner-home.jpg';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            
                <div className='kasa-img'>
                    <img src={banner} alt="Kasa, chez vous, partout et ailleurs."/>
                    <h1 className='title-center'>Chez vous, partout et ailleurs</h1>
                </div>
            
            <Gallery />
            <Footer />
        </div>
    );
};

export default Home;
import React from 'react';
import Header from '../components/Header';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import Banner from '../components/Banner';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Gallery />
            <Footer />
        </div>
    );
};

export default Home;
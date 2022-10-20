import React from 'react';
import banner from '../assets/images/banner-home.jpg';

const Banner = () => {
    return (
        <div className='kasa-img'>
            <img src={banner} alt="Kasa, chez vous, partout et ailleurs."/>
            <h1 className='title-center'>Chez vous, partout et ailleurs</h1>
        </div>
    );
};

export default Banner;
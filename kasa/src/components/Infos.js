import React from 'react';
import starPrimaryColour from '../assets/images/star-colour-primary.png';
import starGreyColour from '../assets/images/star-colour-grey.png';

//import { useState } from "react";

const Infos = (props) => {

    const title = props.title;
    const host = props.host;
    const location = props.location;
    const tags = props.tags;
    const rating = props.rating;
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<img key={i} src={starPrimaryColour} alt='star color' />)
        } else {
            stars.push(<img key={i} src={starGreyColour} alt='star grey' />)
        }
    }

    return (
        <div className="infos">
            
            <div className='infos__content'>
                <h1 className='infos__content-title'>{title}</h1>
                <h2 className='infos__content-second'>{location}</h2>
                <div className="infos__content-tags">
                    <ul>
                        {tags.map((tags, index) => (
                            <li key={tags + index}>{tags}</li>
                        ))}
                    </ul>
                </div>
            </div>
            
            <div className="infos__stuffs">
                <div className="infos__stuffs-rate">
                    <ul>
                        <li>{stars}</li>
                    </ul>
                </div>
                <div className="infos__stuffs-host">
                        <h3 className='infos__stuffs-host-title'>{host.name}</h3>
                        <img className='infos__stuffs-host-img' src={host.picture} alt={host.name} />
                    </div>
            </div>

        </div>
        
    );
};

export default Infos;
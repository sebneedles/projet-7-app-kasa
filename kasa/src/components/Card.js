import React from 'react';
import { Link } from "react-router-dom";

const Card = ( {logement} ) => {
    //console.log(logement);
    return (
        <div className="card" id={logement.id}>
            <Link to={`/lodging/${logement.id}`}>
            <figure className='card__thumb'>
                    <img className='card__image' src={logement.cover} alt={logement.title}/>
                    <figcaption className='card__caption'>
                        <h3 className='card__title'>{logement.title}</h3>
                    </figcaption>
                </figure>
            </Link>
        </div>
    );
};

export default Card;
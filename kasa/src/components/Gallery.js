import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from './Card';

const Gallery = () => {
    const [data, setData] = useState([]);

    // Le useEffect se joue lorque le composant est monté
    useEffect(() => {
        axios.get('./logements.json')
        .then((res) => setData(res.data));
    }, []);

    return (
        <section className='gallery'>
            <div className='container'>
            
            {/* Tu me retournes cet élément mappé */}
            {data.map((logement, index) => (
                <Card key={index} logement={logement}/>
            ))}
            
            </div>
        </section>
        
    );
};

export default Gallery;
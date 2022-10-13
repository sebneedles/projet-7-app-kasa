import React,  {useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Lodging = () => {

    const [data, setData] = useState([]);

    // Le useEffect se joue lorque le composant est monté
    useEffect(() => {
        axios.get('../logements.json')
        .then((res) => setData(res.data));
    }, []);
    


    return (
        <div>
            <Header />
            <section className='lodging'>
                
                 {/* Tu me retournes cet élément mappé */}
                {data.map((logement, index) => (
                    // Ici je test si ça retourne bien ce que je veux
                    <ul className='ma-liste' key={index}>
                        <li>1</li>
                    </ul>
                ))}

            </section>
            <Footer />
        </div>
    );
};

export default Lodging;
import React,  {useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Carrousel from '../components/Carrousel';
import Collapse from '../components/Collapse';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Infos from '../components/Infos';
import Error from './Error';

const Lodging = () => {

    const { id } = useParams();
    const [lodging, setLodging] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchLodging = () => {
            fetch('../logements.json')
            .then(function (res) {
                console.log(res);
                return res.json();
            })
            .then(function (logements) {
                const lodging = logements.find((item) => item.id === id);
                console.log(lodging);
                setLodging(lodging);
            })
            .catch(function (error) {
                console.log(error);
                setError(error);
            });
        };

        fetchLodging();

    }, [id]);

    // Gestion de l'erreur ID sur un produit de lodging
    if (error) {
        return <p className='message'>Il y a une erreur.</p>;
      }
    
      if (lodging === undefined && !lodging) {
        return <Error />;
      }

      if (!lodging) {
        return <p className='message'>Chargement en cours ...</p>
      }

    return (
        <div>
            <Header />
            {lodging && (
                <section className='lodging'>
                    {/* Slideshow */}
                    <Carrousel pictures={lodging.pictures}/>

                    {/* Infos */}
                    <Infos title={lodging.title} host={lodging.host} location={lodging.location} tags={lodging.tags} rating={lodging.rating}/>

                    {/* Infos Bottom */}
                    <div className="infos__bottom">
                        <div className="part__left">
                            <div className="wrapper">
                                <Collapse title="Description" answer={lodging.description} />
                            </div>
                        </div>
                       <div className="part__right">
                        <div className="wrapper">
                                <Collapse title="Equipements" answer={lodging.equipments} />
                            </div>
                       </div>  
                    </div>
                </section>
            )}
            
            <Footer />
        </div>
    )
};

export default Lodging;
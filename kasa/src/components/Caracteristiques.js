import React, { useState } from 'react';

const Caracteristiques = (props) => {

    const equipments = props.equipments;
    const text = props.text;

    const [selected, setSelected] = useState(null);

    const toggle = (text) => {
        if (selected === text) {
            return setSelected(null)
        }

        setSelected(text)
    }


    return (
        <div className='infos__bottom-wrapper'>
            <div className='accordion'>

                    <div className='item'>
                        <div className='title' onClick={() => toggle(text)}>
                            <h2>Caractéristiques</h2>
                            <span>{selected === text ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}</span>
                        </div>
                        <div className={selected === text ? 'item-list show-list' : 'item-list'}>
                            <ul>
                                {equipments.map((equipments, index) => (
                                    <li key={equipments + index}>{equipments}</li>
                                ))}  
                            </ul>
                        </div>
                        
                    </div>

            </div>
        </div>
    );
};

export default Caracteristiques;
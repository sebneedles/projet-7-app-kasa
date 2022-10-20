import React, { useState } from 'react';

const Description = (props) => {

    const description = props.description;
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
                            <h2>Description</h2>
                            <span>{selected === text ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}</span>
                        </div>
                        <p className={selected === text ? 'content show' : 'content'}>{description}</p>
                    </div>

            </div>
        </div>
    );
};


export default Description;
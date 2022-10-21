import React, {useState} from 'react';
import arrowUp from '../assets/images/arrow.png';
import arrowDown from '../assets/images/arrow.png';

const Collapse = (props) => {

    const title = props.title;
    const answer = props.answer;

    const [open, setOpen] = useState(false);

    const toggle = (index) => {
        if (open === index) {
            return setOpen(null)
        }
        setOpen(index)
    };

    

    return (
        <div className='accordion'>
          <div className='accordion__arrow' onClick={() => toggle(answer)}>
            <div className="accordion__arrow-bg"></div>

            {title === 'Description' ? (<h2 className='min'>{title}</h2>) : (<h2>{title}</h2>) 
            && 
            title === 'Equipements' ? (<h2 className='min'>{title}</h2>) : (<h2>{title}</h2>)}

            {/* <h2>{title}</h2> */}
            
              {/* Changer le sens de la flèche quand le contenu est ouvert ou fermé */}
              {open === answer ? (
                <img className='accordion__arrow-up' src={arrowUp} alt='Flèche vers le haut' />
              ) : (
                <img className='accordion__arrow-down' src={arrowDown} alt='Flèche vers le bas' />
              )}
            
          </div>
          {/* Si le titre est "Equipements", le contenu sera une liste sinon le contenu sera du texte
           */}
          {open === answer ? (
            title === 'Equipements' ? (
              
                    <div className='text__collapse'>
                        <ul>
                            {answer.map((item, index) => (
                            <li key={item + index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                
            ) : (
              <div className='text__collapse'>
                <p>{answer}</p>
            </div>
            )
            &&
            title === 'Description' ? (
              
                <div className='text__collapse'>
                    <p className='min'>{answer}</p>
                </div>
            
        ) : (
          <div className='text__collapse'>
            <p>{answer}</p>
        </div>
        )
          ) : null}
        </div>
      );
};

export default Collapse;
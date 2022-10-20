import React from "react";
import { useState } from "react";
import Arrow from "../assets/images/arrow.png";

const Carrousel = (props) => {
  const pictures = props.pictures;
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = () => {
    const firstPicture = currentIndex === 0;
    const newIndex = firstPicture ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextImage = () => {
    const lastPicture = currentIndex === pictures.length - 1;
    const newIndex = lastPicture ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (pictures.length === 1) {
    return (
      <div className="carrousel">

        <img src={pictures[currentIndex]} alt="Kasa : Appartements" className="carrousel__img" />

      </div>
    );
  } else {
    return (
      <div className="carrousel">

        <img src={Arrow} alt="Flèche gauche" className="arrow__left" onClick={previousImage} />

        <img src={pictures[currentIndex]} alt="Kasa : Appartements" className="carrousel__img" />

        <img src={Arrow} alt="Flèche droite" className="arrow__right" onClick={nextImage} />

        <div className="carrousel__indicators">{currentIndex + 1}/{pictures.length}</div>

      </div>
    );
  }
};

export default Carrousel;
import React, { useState } from 'react';
import CardItem from '../CardItem/CardItem';
import classes from './Cards.module.css';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Cards = ({ slides }) => {
  const [x, setX] = useState(0);
  const length = slides.length;


  const nextSlide = () => {
    setX(x + 284);
    console.log(x);
  };

  const prevSlide = () => {
    setX(x - 284);
    console.log(x);
  };

  return (
    <div>
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      <div className={classes.carrouselContainer}>
        <div className={`${classes.carrousel}`} style={{transform: `translateX(${x}px)`}}>
          {CardItem.map((imagem, index) => {
            return (
              <div
                key={index.id}
              >
                <img src={imagem.image} alt="card" className="image" />       
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;

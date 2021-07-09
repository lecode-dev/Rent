import React, { useState } from "react";
import CardItem from "../CardItem/CardItem";
import classes from "./Cards.module.css";
import { FaCaretSquareRight, FaCaretSquareLeft } from "react-icons/fa";

const Cards = ({ slides }) => {
  const [x, setX] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setX(x + 284);
    if (x === 1136) {
      setX(x - 1136);
    }
  };

  const prevSlide = () => {
    setX(x - 284);
    if (x === 0) {
      setX(x + 1136);
    }
  };

  return (
    <div>
      <h5 className={classes.recent}>RECENT</h5>
      <FaCaretSquareLeft
       className={classes.leftArrow} onClick={prevSlide} />
      <FaCaretSquareRight
        className={classes.rightArrow}
        onClick={nextSlide}
      />
      <div className={classes.carrouselContainer}>
        <div
          className={`${classes.carrousel}`}
          style={{ transform: `translateX(${x}px)` }}
        >
          {CardItem.map((imagem, index) => {
            return (
              <li key={index}>
                <img src={imagem.image} alt="card" className="image" />
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;

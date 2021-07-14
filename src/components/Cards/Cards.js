import React, { useState } from "react";
import { CardObject } from "./CardObject";
import classes from "./Cards.module.css";
import { FaCaretSquareRight, FaCaretSquareLeft } from "react-icons/fa";
import { valueToNode } from "@babel/types";

const Cards = ({ slides }) => {
  const [x, setX] = useState(0);
  const length = slides.length;
  const lengthCards = 284;
  const maxLengthCards = 1136;

  const nextSlide = () => {
    setX(x + lengthCards);
    if (x === maxLengthCards) {
      setX(x - maxLengthCards);
    }
  };

  const prevSlide = () => {
    setX(x - lengthCards);
    if (x === 0) {
      setX(x + maxLengthCards);
    }
  };

  return (
    <div>
      <h5 className={classes.recent}>RECENT</h5>
      <FaCaretSquareLeft className={classes.leftArrow} onClick={prevSlide} />
      <FaCaretSquareRight className={classes.rightArrow} onClick={nextSlide} />
      <div className={classes.carrouselContainer}>
        <div
          className={`${classes.carrousel}`}
          style={{ transform: `translateX(${x}px)` }}
        >
          {CardObject.map((index) => {
            return (
              <li key={index} className={classes.cardContainer}>
                <img
                  alt="car image"
                  className={classes.carCard}
                  src={index.carImage}
                />
                <div className={classes.price}>{index.price} </div>
                <div className={classes.title}>{index.title}</div>
                <div className ={classes.iconsContainer}>
                <div className={classes.icon1}> {index.icon1}</div>
                <div className={classes.icon2}> {index.icon2}</div>
                <div className={classes.icon3}>{index.icon3}</div>
                </div>
                <div className ={classes.componentsContainer}>
                <div className={classes.velocity}> {index.velocity}</div>
                <div className={classes.date}> {index.date}</div>
                <div className={classes.location}>{index.location}</div>
                </div> 
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;

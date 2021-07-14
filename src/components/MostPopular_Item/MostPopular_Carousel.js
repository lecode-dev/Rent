import React, { useState } from "react";
import classes from "./CardPopular.module.css";
import { FaCaretSquareRight, FaCaretSquareLeft } from "react-icons/fa";
import CardItem_Popular from "./CardPopular";

const MostPopular_Carousel = ({ props }) => {
  const [x, setX] = useState(0);
  const length = props.length;

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
    <div className={classes.carrouselContainer_Popular}>
      <h5 className={classes.recent}>MOST POPULAR</h5>
      <FaCaretSquareLeft
        className={classes.leftArrow_Popular}
        onClick={prevSlide}
      />
      <FaCaretSquareRight
        className={classes.rightArrow_Popular}
        onClick={nextSlide}
      />
      <div
        className={`${classes.carrousel}`}
        style={{ transform: `translateX(${x}px)` }}
      >
        {CardItem_Popular.map((index) => {
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
  );
};

export default MostPopular_Carousel;

import React, { useState } from "react";
import CardPopular from "./CardPopular";
import classes from "./CardPopular.module.css";
import { FaCaretSquareRight, FaCaretSquareLeft } from "react-icons/fa";

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
    <div>
      <h5 className={classes.recent}>MOST POPULAR</h5>
      <FaCaretSquareLeft className={classes.leftArrow_Popular} onClick={prevSlide} />
      <FaCaretSquareRight
      className={classes.rightArrow_Popular}
      onClick={nextSlide}
      />
      <div className={classes.carrouselContainer}>
        <div
          className={`${classes.carrousel}`}
          style={{ transform: `translateX(${x}px)` }}
        >
          {CardPopular.map((imagem, index) => {
            return (
              <div key={index}>
                <img src={imagem.image} alt="card" className="image" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MostPopular_Carousel;

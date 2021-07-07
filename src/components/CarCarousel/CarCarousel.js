import React from "react";
import classes from "./CarCarousel.module.css";
import image_1 from "../../images/carro_2_menu_carrossel_1.svg";
import image_2 from "../../images/carro_2_menu_carrossel_2.svg";
import image_3 from "../../images/carro_2_menu_carrossel_3.svg";
import image_4 from "../../images/carro_2_menu_carrossel_4.svg";

const CarCarousel = () => {
  return (
    <div className={classes.itemsContainer}>
      <div className={classes.items}>
        <img src={image_1} className={classes.imagem} />
        <img src={image_2} className={classes.imagem} />
        <img src={image_3} className={classes.imagem} />
        <img src={image_4} className={classes.imagem} />
      </div>
    </div>
  );
};

export default CarCarousel;

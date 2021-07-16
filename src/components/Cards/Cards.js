import React, { Component } from "react";
import classes from "./Cards.module.css";
import Carousel from 'react-elastic-carousel';
import * as AiIcons from "react-icons/fa";
import car1 from "../../images/carro_2_menu_carrossel_1.svg";
import car2 from "../../images/carro_2_menu_carrossel_2.svg";
import car3 from "../../images/carro_2_menu_carrossel_3.svg";
import car4 from "../../images/carro_2_menu_carrossel_4.svg";

class Cards extends Component {
  state = { items: [{
     title: 'MUSTANG',
    icon1: <AiIcons.FaLocationArrow/>,
    icon2: <AiIcons.FaRegCalendarAlt/>,
    icon3: <AiIcons.FaRegCompass/>,
    location: 'São Paulo',
    date: '2020',
    velocity:0,
    carImage: car1,
    price:'$ 139.000'

},
{
    title: 'SUBARU',
    icon1: <AiIcons.FaLocationArrow/>,
    icon2: <AiIcons.FaRegCalendarAlt/>,
    icon3: <AiIcons.FaRegCompass/>,
    location: 'Belo Horizonte',
    date: '2018',
    velocity:0,
    carImage: car2,
    price:'$ 30.000'

},{
    title: 'LAMBORGHINI',
    icon1: <AiIcons.FaLocationArrow/>,
    icon2: <AiIcons.FaRegCalendarAlt/>,
    icon3: <AiIcons.FaRegCompass/>,
    location: 'Bocaiuva',
    date: '2019',
    velocity:0,
    carImage: car3,
    price:'$ 300.000'

}
,{
    title: 'NISSAN',
    icon1: <AiIcons.FaLocationArrow/>,
    icon2: <AiIcons.FaRegCalendarAlt/>,
    icon3: <AiIcons.FaRegCompass/>,
    location: 'Montes Claros',
    date: '2021',
    velocity:0,
    carImage: car4,
    price:'$ 30.000'

}]
}
  

  render () {
    const {items} = this.state;
    return (
      <Carousel breakPoints={items}>
        {items.map (index =>  <li key={index} className={classes.cardContainer}>
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
              </li>)}
      </Carousel>
    )
  }}

export default Cards;

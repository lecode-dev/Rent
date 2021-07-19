import React, { Component } from "react";
import classes from "./CardPopular.module.css";
import * as AiIcons from "react-icons/fa";
import car7 from "../../images/carro_2_menu_carrossel_6.svg";
import car8 from "../../images/carro_2_menu_carrossel_8.svg";
import car9 from "../../images/carro_2_menu_carrossel_9.svg";
import car10 from "../../images/carro_2_menu_carrossel_10.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";

const settings = {
  infinite: true,
  speed: 200,
  slidesToShow: 3,
  slidesToScroll: 1,
};


class Cards extends Component {
  state = { items: [{
    title: 'MUSTANG',
    iconFast: <AiIcons.FaLocationArrow/>,
    iconCalendar: <AiIcons.FaRegCalendarAlt/>,
    iconLocation: <AiIcons.FaRegCompass/>,
    location: 'Rio de Janeiro',
    date: '2020',
    velocity:0,
    carImage: car7,
    price:'$ 160.000'

},
{
    title: 'SUBARU',
    iconFast: <AiIcons.FaLocationArrow/>,
    iconCalendar: <AiIcons.FaRegCalendarAlt/>,
    iconLocation: <AiIcons.FaRegCompass/>,
    location: 'Campina Gande',
    date: '2018',
    velocity:0,
    carImage: car8,
    price:'$ 35.000'

},{
    title: 'LAMBORGHINI',
    iconFast: <AiIcons.FaLocationArrow/>,
    iconCalendar: <AiIcons.FaRegCalendarAlt/>,
    iconLocation: <AiIcons.FaRegCompass/>,
    location: 'Ibó-Abaré',
    date: '2021',
    velocity:0,
    carImage: car9,
    price:'$ 300.000'

}
,{
    title: 'NISSAN',
    iconFast: <AiIcons.FaLocationArrow/>,
    iconCalendar: <AiIcons.FaRegCalendarAlt/>,
    iconLocation: <AiIcons.FaRegCompass/>,
    location: 'Montes Claros',
    date: '2020',
    velocity:0,
    carImage: car10,
    price:'$ 25.000'

}]
}

  render () {
    const {items} = this.state;
    return (
      <div className={classes.carrouselContainer}>
      <h5 className={classes.recent}>RECENT</h5>
      <Slider {...settings}>
        {items.map (index =>  <li key={index} className={classes.cardContainer}>
                <img
                  alt="car image"
                  className={classes.carCard}
                  src={index.carImage}
                />
                <div className={classes.price}>{index.price} </div>
                <div className={classes.title}>{index.title}</div>
                <div className ={classes.iconsContainer}>
                <div className={classes.icon1}> {index.iconFast}</div>
                <div className={classes.icon2}> {index.iconCalendar}</div>
                <div className={classes.icon3}>{index.iconLocation}</div>
                </div>
                <div className ={classes.componentsContainer}>
                <div className={classes.velocity}> {index.velocity}</div>
                <div className={classes.date}> {index.date}</div>
                <div className={classes.location}>{index.location}</div>
                </div> 
              </li>)}
      </Slider>
      </div>
    )
  }}

export default Cards;

import * as AiIcons from "react-icons/fa";
import car7 from "../../images/carro_2_menu_carrossel_6.svg";
import car8 from "../../images/carro_2_menu_carrossel_8.svg";
import car9 from "../../images/carro_2_menu_carrossel_9.svg";
import car10 from "../../images/carro_2_menu_carrossel_10.svg";

const CardItem_Popular = [
  {
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
    location: 'Campina Grande',
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

}
]
export default CardItem_Popular;

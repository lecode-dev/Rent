import * as AiIcons from "react-icons/fa";
import car1 from "../../images/carro_2_menu_carrossel_1.svg";
import car2 from "../../images/carro_2_menu_carrossel_2.svg";
import car3 from "../../images/carro_2_menu_carrossel_3.svg";
import car4 from "../../images/carro_2_menu_carrossel_4.svg";

export const CardObject = [
    {
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

    }
]



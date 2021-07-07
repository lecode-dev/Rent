import React, { useState } from "react"
import CardItem from "./CardItem"
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'


const Cards = ({slides}) => {
const [slide, setSlide] = useState(0);
const length = slides.length

const nextSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1)
}

const prevSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1)
}

if (!Array.isArray(slides) || slides.length <=0) 
 return null;


return (
<div>
    <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
    <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>

 {CardItem.map((imagem, index) =>
  {   return <div className={index === slide ? 'slide active' : 'slide'} 
  key={index.id}>
     {index === slide && (<img src={imagem.image} alt='card' className='image'/>)}
     {index === slide && (<img src={imagem.image} alt='card' className='image'/>)}
     {index === slide && (<img src={imagem.image} alt='card' className='image'/>)}
     {index === slide && (<img src={imagem.image} alt='card' className='image'/>)}
     </div>
    }
  )}
 </div>
)
}


export default Cards
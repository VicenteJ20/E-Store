/* eslint-disable react/prop-types */
import '../../Styles/Carousel.scss'
import React from 'react'
import { useState } from 'react'
import Imgs from '../../json/CarouselImgs.json'
import { Image } from './Image'

const DotBtn = ({ id, index }) => {
  const [active, setActive] = useState(false)

  const btnClick = () => {
    setActive(!active)
  }
  
  return (
    <li className={`dot ${active && id !== index ? '' : ''}`} onClick={btnClick}></li>
  )
}


export const Carousel = () => {

  return (
    <div className='Carousel'>
      <div className='CarouselImgs'>
        {
          Imgs.map((x, index) => <Image key={index} src={x.URL} alt={x.Alt} />)
        }
      </div>
      <ul className='CarouselDots'>
        {
          Imgs.map((x, index) => <DotBtn key={x.Id} id={x.Id} index={index} />)
        }
      </ul>
    </div>
  )
}
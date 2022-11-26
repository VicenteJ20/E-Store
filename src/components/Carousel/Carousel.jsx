/* eslint-disable react/prop-types */
import '../../Styles/Carousel.scss'
import React from 'react'
import { useState } from 'react'
import Imgs from '../../json/CarouselImgs.json'
import { Image } from './Image'

const DotBtn = ({ id, active }) => {
 
  return (
    <li className={`dot ${active ? 'active' : ''}`}>{id}</li>
  )
}


export const Carousel = () => {
  const [active, setActive] = useState(false)

  const btnClick = () => {
    setActive(!active)
  }
  
  return (
    <div className='Carousel'>
      <div className='CarouselImgs'>
        {
          Imgs.map((x, index) => <Image key={index} src={x.URL} alt={x.Alt} />)
        }
      </div>
      <ul className='CarouselDots'>
        {
          Imgs.map(x => <DotBtn key={x.Id} id={x.Id} active={active} onClick={btnClick} />)
        }
      </ul>
    </div>
  )
}
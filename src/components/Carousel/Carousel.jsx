/* eslint-disable react/prop-types */
import React from 'react'
import { useState } from 'react'
import Imgs from '../../json/CarouselImgs.json'
import { Image } from './Image'
import '../../Styles/Carousel.scss'

const DotBtn = ({ id, active, handler }) => {
	return (
		<li className={`dot ${active === id ? 'active' : ''}`} onClick={handler}></li>
	)
}

const Carousel = () => {
	const [active, setActive] = useState(0)
	const totalObjects = Object.keys(Imgs).length;

	const percentageCarousel = 100 * totalObjects
	const moveCarousel = {
		width: `${percentageCarousel}%`,
		transform: `translateX(${active * ((100 / totalObjects) * -1)}%)`
	}

	const btnClick = (id) => {
		setActive(id)
	}

	return (
		<div className='Carousel'>
			<div className='CarouselImgs' style={moveCarousel}>
				{Imgs.map((x, index) => (
					<Image key={index} src={x.URL} alt={x.Alt} totalObjects={totalObjects} />
				))}
			</div>
			<ul className='CarouselDots'>
				{Imgs.map((x) => (
					<DotBtn key={x.Id} id={x.Id} active={active} handler={() => btnClick(x.Id)}
					/>
				))}
			</ul>
			{
				//console.log(100 * totalObjects)
			}
		</div>
	)
}

export default Carousel

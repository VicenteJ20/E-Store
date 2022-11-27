/* eslint-disable react/prop-types */
import React from 'react'
import { useState } from 'react'
import Imgs from '../../json/CarouselImgs.json'
import { Image } from './Image'
import '../../Styles/Carousel.scss'

const DotBtn = ({ id, active, handler }) => {
	return (
		<li className={`dot ${active === id ? 'active' : ''}`} onClick={handler}>
			{id}
		</li>
	)
}

const Carousel = () => {
	const [active, setActive] = useState()

	const btnClick = (id) => {
		setActive(id)
	}

	return (
		<div className='Carousel'>
			<div className='CarouselImgs'>
				{Imgs.map((x, index) => (
					<Image key={index} src={x.URL} alt={x.Alt} />
				))}
			</div>
			<ul className='CarouselDots'>
				{Imgs.map((x) => (
					<DotBtn
						key={x.Id}
						id={x.Id}
						active={active}
						handler={() => btnClick(x.Id)}
					/>
				))}
			</ul>
		</div>
	)
}

export default Carousel

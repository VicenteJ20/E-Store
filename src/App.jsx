
import { Navbar, } from './components'
import './components/Navbar/navbar.scss'
=======
import React from 'react'
import { Carousel } from './components/Carousel/carousel'
import './Styles/App.scss'

function App() {
	return (
		<div className='App'>
			<div className='navContainer'>
				<Navbar />	
			</div>
			<Carousel />
		</div>
	)
}

export default App

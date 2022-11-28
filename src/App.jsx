import { Navbar } from './components'
import './components/Navbar/navbar.scss'
import React from 'react'
import Carousel from './components/Carousel/Carousel'
import './Styles/App.scss'
import Footer from './components/Footer/Footer'


function App() {
	return (
		<>
			<div className='App'>
			<div className='navContainer'><Navbar /></div>
				<Carousel />
			</div>
			<Footer />
		</>
	)
}

export default App

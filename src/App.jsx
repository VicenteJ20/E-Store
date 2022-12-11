import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import './Styles/App.scss'

import { Navbar } from './components'
import Carousel from './components/Carousel/carousel'
import Cart_Detail from './components/Cart_Detail/CartDetail.jsx'
import Footer from './components/Footer/Footer'
import Account from './components/Account/Account.jsx'
import About from './components/About/About.jsx'

function App() {
	return (

		<Router>
			<Routes>

				<Route path='/' element={		//ruta inicial (home)

					<div className='App'>
						
						<Navbar />
						<Carousel />
						
						<Footer />
						
					</div>

				} />

				<Route path='/CartDetail' element={<div className='Cart__Detail'>{<Cart_Detail />}</div>} />		
				<Route path='/Account' element={<div className='Account__'>{<Account />}</div>} />
				<Route path='/About' element={<div className='About__'>{<About />}</div>} />


				<Route path='*' element={<div className='Not_Found_Page'><h1>Acceso a web inexistente!</h1></div>} />

			</Routes>
		</Router>
	)
}

export default App

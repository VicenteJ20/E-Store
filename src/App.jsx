import { Navbar } from './components'
import Carousel from './components/Carousel/carousel'
import './Styles/App.scss'
import Cart_Detail from './components/Cart_Detail/CartDetail.jsx'
import Footer from './components/Footer/Footer'

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Carousel />
			<Cart_Detail />
		</div>
	)
}

export default App

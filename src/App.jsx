import { Navbar } from './components'
import Carousel from './components/Carousel/carousel'
import './Styles/App.scss'
import Footer from './components/Footer/Footer'

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Carousel />
			<Footer />
		</div>
	)
}

export default App

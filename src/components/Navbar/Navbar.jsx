import { cartIcon } from '../../assets'
import { navLinks } from '../../constants'
import './navbar.scss'
import { RiUserLine } from 'react-icons/ri'
import { BsCartPlus } from 'react-icons/bs'
import SearchBar from './SearchBar/SearchBar'

import { NavLink } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className='navbar'>
			<div className='navbar__left'>
				<div className='navbar__cartIcon'>
					<img
						className='navbar__cartIcon__icon'
						src={`${cartIcon}`}
						alt='cartIcon'
					/>
					<span className='navbar__cartIcon__title'>E-Store</span>
				</div>
				<ul className='navbar__navlinks'>
					{/* Los navLinks se modificarán cuando estén listas las secciones, al igual que los href de las etiquetas a para redireccionar a sus respectivos componentes */}
					{navLinks.map((nav) => (
						<li key={nav.id}>
							<a className='navbar__navitems' href='#'>
								{nav.title}
								{console.log(nav.id)}
							</a>
						</li>
					))}
				</ul>
			</div>
			<div className='navbar__rigth'>
				<SearchBar />
				<div className='navbar__profileIcon'>
					<i className='navbar__profileIcon__icon'>
						<RiUserLine />
					</i>

					<div className='navbar__icon__title'>
						<NavLink className={({isActive}) => isActive ? console.log("Activado") : console.log("Desactivado")} to='/Account'>Cuenta</NavLink>
					</div>

				</div>
				<div className='navbar__shoppingCartIcon'>
					<i className='navbar__shoppingCartIcon__icon'>
						<BsCartPlus />
					</i>

					<div className='navbar__icon__title'>
						<NavLink to='/CartDetail'>Carrito</NavLink>
					</div>

				</div>
			</div>
		</nav>
	)
}

export default Navbar

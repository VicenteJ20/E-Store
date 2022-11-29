import './searchBar.scss'
import { useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'

const SearchBar = () => {
	const [query, setQuery] = useState('')
	return (
		<div className='navbar__input__wrapper'>
			<input
				className='navbar__input'
				type='text'
				placeholder='Buscar productos...'
				onChange={(event) => setQuery(event.target.value)}
			/>
			<i className='navbar__input__icon'>
				<BiSearchAlt2 />
			</i>
		</div>
	)
}

export default SearchBar

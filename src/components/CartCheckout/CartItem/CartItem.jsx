import './CartItem.scss'

// Dummy data
const cart = {
	cartItem: [
		{
			name: 'item one',
			imageUrl: '',
			price: 100,
		},
		{
			name: 'item two',
			imageUrl: '',
			price: 200,
		},
	],
	quantity: 2,
}

const CartItem = () => {
	const {
		cartItem: { name, imageUrl, price },
		quantity,
	} = cart

	return (
		<div className='cartItem__container'>
			<img src={imageUrl} alt={`${name}`} />
			<div className='cartItem__details'>
				<h2 className='cartItem__details--name'>{name}</h2>
				<span className='cartItem__details--price'>
					{quantity} x ${price}
				</span>
			</div>
		</div>
	)
}

export default CartItem

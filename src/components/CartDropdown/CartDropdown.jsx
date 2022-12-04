import { CartItem } from '../index'
import './CartDropdown.scss'

// Dummy data
const cartItems = [
	{
		id: 1,
		name: 'one',
	},
	{
		id: 2,
		name: 'two',
	},
	{
		id: 3,
		name: 'three',
	},
]

const CartDropdown = () => {
	const goToCheckoutHandler = () => {
		console.log('navigate to checkout')
	}

	return (
		<div className='cartDropdown__container'>
			<div className='cartDropdown__cartItem--wrapper'>
				{cartItems.length ? (
					cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
				) : (
					<span className='.cartDropdown__empty'>Your cart is empty</span>
				)}
			</div>
			<button onClick={goToCheckoutHandler}>Go to checkout</button>
		</div>
	)
}

export default CartDropdown

import { cartIcon, profile, shoppingCart } from "../../assets"
import { navLinks } from "../../constants"

const Navbar = () => {
  return (
    <nav className="navbar">
        <div>
            <img src={`${cartIcon}`} alt="cartIcon" />
            <span>E-Store</span>
        </div>
        <ul>
            {navLinks.map((nav, index) => (
                <li
                    key={nav.id}
                >
                    <a href="#">
                        {nav.title}
                    </a>
                </li>
            ))}
        </ul>
        <div>
            <input
            type="text"
            placeholder="Search"
            />
        </div>
        <div>
            <img src={`${profile}`} alt="profileIcon" />
            <span>Cuenta</span>
        </div>
        <div>
            <img src={`${shoppingCart}`} alt="shoppingCart" />
            <span>Carrito</span>
        </div>
    </nav>
  )
}

export default Navbar
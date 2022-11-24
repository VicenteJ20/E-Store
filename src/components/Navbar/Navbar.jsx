import { cartIcon } from "../../assets"
import { navLinks } from "../../constants"


const Navbar = () => {
  return (
    <nav>
        <div>
            <img src={`${cartIcon}`} alt="cartIcon" />
            <span>E-Store   </span>
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
    </nav>
  )
}

export default Navbar
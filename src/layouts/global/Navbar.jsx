import { FaStore, FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className='Navbar'>

            <div className="Left-Navbar-Section">
                {/* Logo */}
                <div className='Navbar-logo'>
                    <FaStore />
                    <span className="Navbar-header">AccessCommerce</span>
                </div>
                {/* Navigation Links */}
                <ul className='Navbar-links'>
                    <li><a href='/' className='Navbar-link'>Home</a></li>
                    <li><a href='/' className='Navbar-link'>Shop</a></li>
                    <li><a href='/' className='Navbar-link'>Product detail</a></li>
                    <li><a href='/' className='Navbar-link'>Cart</a></li>
                </ul>

            </div>

            <div className="Right-Navbar-Section">
                {/* Search + Icons */}
                <div className='flex items-center'>
                    <div className='Navbar-Search'>
                        <FaSearch className="Navbar-Search-icon" />
                        <input type='text' placeholder='Search ..'></input>
                    </div>
                    <div className='Navbar-icons'>
                        <FaUser className="Navbar-icon" />
                        <FaShoppingCart className="Navbar-icon" />
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar
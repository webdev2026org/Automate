import { FaStore, FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import Breadcrumb from "./BreadCrum";
import { Link } from "react-router-dom";

const Navbar = (props) => {

    const handleLoginClick = () => {
        if (!props.isLoggedIn) {
            props.setIsLoggedIn(true);
        }
    };

  return (
    <nav className="Navbar">
      <div className="Left-Navbar-Section flex items-center">
        {/* Logo */}
        <div className="Navbar-logo">
          {props.pageIcon === "store" && <FaStore />}
          {props.pageIcon === "cart" && <FaShoppingCart />}
          <span className="Navbar-header">AccessCommerce</span>
        </div>
        {/* Navigation Links */}
        {props.showmenuOtions && (
          <ul className="Navbar-links">
            <li>
              <Link to="/" className="Navbar-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="Navbar-link">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/products" className="Navbar-link">
                Product detail
              </Link>
            </li>
            <li>
              <Link to="/cart" className="Navbar-link">
                Cart
              </Link>
            </li>
          </ul>
        )}
        {props.breadcrumbItems.length !== 0 && props.breadcrumbItems && (
          <div className="Navbar-breadcrumb">
            <Breadcrumb items={props.breadcrumbItems} />
          </div>
        )}
      </div>

      <div className="Right-Navbar-Section">
        {/* Search + Icons */}
        <div className="flex items-center">
          {props.showSearchBar && (
            <div className="Navbar-Search">
              <FaSearch className="Navbar-Search-icon" />
              <input type="text" placeholder="Search .."></input>
            </div>
          )}
          {props.showLoginBtn && (
            <input
              type="button"
              className="text-white bg-black cursor-pointer rounded-sm px-10 py-2 mx-2"
              value="Login"
              onClick={() => handleLoginClick()}
            />
          )}
          <div className="Navbar-icons">
            {props.userIconType === "user-icon" && (
              <FaUser className="Navbar-icon" />
            )}
            {props.userIconType === "user-icon-rounded" && (
              <span className="rounded-full border-2 bg-black p-2">
                <FaUser
                  className="Navbar-icon text-white"
                  style={{ color: "white" }}
                />
              </span>
            )}
            {props.showCartIcon && <FaShoppingCart className="Navbar-icon" />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

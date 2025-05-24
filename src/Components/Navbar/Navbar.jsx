import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
import logo from '../../assets/logo.webp';
import cart from '../../assets/cart.webp';
import { ShopContext } from '../../Context/ShopContext'; 

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);  // toggle state
  const { getTotalCartItems } = useContext(ShopContext); 

  const handleMenuClick = (menuName) => {
    setMenu(menuName);
    setIsOpen(false);  // close menu on click
  };

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="shop logo" height="70px" />
        <p>Shopify</p>

        {/* Hamburger icon, only visible on mobile */}
        <button 
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          &#9776; {/* Unicode hamburger */}
        </button>
      </div>

      {/* Add 'open' class when toggled */}
      <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <li onClick={() => handleMenuClick("home")}>
          <Link style={{ textDecoration: "none", color: "black" }} to="/">Home</Link>
          {menu === "home" && <hr />}
        </li>
        <li onClick={() => handleMenuClick("mens")}>
          <Link style={{ textDecoration: "none", color: "black" }} to="/mens">Men</Link>
          {menu === "mens" && <hr />}
        </li>
        <li onClick={() => handleMenuClick("womens")}>
          <Link style={{ textDecoration: "none", color: "black" }} to="/womens">Women</Link>
          {menu === "womens" && <hr />}
        </li>
        <li onClick={() => handleMenuClick("kids")}>
          <Link style={{ textDecoration: "none", color: "black" }} to="/kids">Kids</Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>

      <div className='nav-login-cart'>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><img src={cart} alt="shopping cart icon" height="40px" /></Link>
        <div className='nav-cart-count'>{getTotalCartItems?.() || 0}</div> 
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa'; 
import './Navbar.css';

function Navbar() {
  return (
    <header className="main-header">
      <nav className="main-nav">
        <ul id="main-nav-ul">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/AboutUs">AboutUs</Link>
          </li>
        </ul>

        <div className="nav-right">
          <div className="search">
            <Link to="/registration" className="btn">Register</Link>
            <Link to="/login" className="btn2">Login</Link>
          </div>
          <li className="cart-icon">
            <Link to="/cart">
              <FaShoppingCart size={24} />
            </Link>
          </li>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

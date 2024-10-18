import React, { useState } from 'react';
import '../css/Header.css';
import { Navigate, useLocation } from 'react-router-dom';
import data from '../data/searchdata.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FaUser, FaTags, FaHeart, FaGift, FaShoppingCart, FaSignOutAlt, FaCog, FaClipboardList, FaTruck } from "react-icons/fa";

const Navbar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const location = useLocation();
  const trackOrder = location.pathname === '/trackOrder';
  const loginPage = location.pathname === '/login';
  const signUpPage = location.pathname === '/signUp';
  const dashboard = location.pathname === '/dashboard';

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length >= 3) {
      fetchSuggestions(value);
    } else {
      setSuggestions([]);
    }
  };

  const fetchSuggestions = (input) => {
    const filteredData = data.filter(item => item.toLowerCase().includes(input.toLowerCase()));
    setSuggestions(filteredData);
  };

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const handleLoginClick = () => {
    Navigate("/login");
  };

  return (
    <header>
      <div className="header-top">
        <div className="logo">
          <h1><span className="logo-icon">🎓</span> <a href='/'>PrimeOfferShop</a></h1>
        </div>
        {!trackOrder && !loginPage && !signUpPage && (
          <div className="search-bar-container">
            <div className="search-input-wrapper">
              <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search..."
                className="search-input"
              />
              <i className="fas fa-search search-icon"></i>
            </div>
            {suggestions.length > 0 && (
              <ul className="suggestions-list">
                {suggestions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        )}
        
        <nav className="navbar">
          <ul>
            <li><a href="#"><FaShoppingCart /> Ecommerce</a></li>
            {!trackOrder && (
              <li><a href="/trackOrder"> <FaTruck /> Delivery</a></li>
            )}
          </ul>
        </nav>
        {!trackOrder && !loginPage && !signUpPage && (
          <nav className="navbar_login">
            <div className="nav-item login-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              {!dashboard ? (
                <a href="/login">
                  <FontAwesomeIcon icon={faSignInAlt} className="icon" onClick={handleLoginClick} /> Login
                </a>
              ) : (
                <span className='myaccount'>
                  <FontAwesomeIcon icon={faUser} className="icon" /> My Account
                </span>
              )}
              {dropdownVisible && (
                <div className="dropdown">
                  {!dashboard ? (
                    <>
                      <p className="new-customer">
                        New customer? <a href="#signup">Sign Up</a>
                      </p>
                      <ul>
                        <li><FaUser className="icon" /><a href="#profile">My Profile</a></li>
                        <li><FaTags className="icon" /><a href="#primeoffershop-zone">PrimeOfferShop Zone</a></li>
                        <li><FaHeart className="icon" /><a href="#wishlist">Wishlist</a></li>
                        <li><FaGift className="icon" /><a href="#gift-cards">Gift Cards</a></li>
                        <li><FaShoppingCart className="icon" /><a href="#my-cart">My Cart</a></li>
                        <li><FaSignOutAlt className="icon" /><a href="#logout">Log Out</a></li>
                      </ul>
                    </>
                  ) : (
                    <ul>
                      <li><FaClipboardList className="icon" /><a href="#order-history">Order History</a></li>
                      <li><FaCog className="icon" /><a href="#settings">Settings</a></li>
                      <li><FaSignOutAlt className="icon" /><a href="#logout">Log Out</a></li>
                    </ul>
                  )}
                </div>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;

import React, { useState } from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { FaShoppingCart, FaTruck } from "react-icons/fa";
import logo from '../images/PrimeOfferShop.png';
const Navbar = () => {
  const location = useLocation();
  const trackOrder = location.pathname === '/trackOrder';
  const welcome = location.pathname === '/welcome';
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  return (
    <header>
    {welcome && (
      <div className="header-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg wow fadeInDown_wel" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInDown' }}>
          <Link className="logo" to="/">
            <img src={logo} title="PrimeOfferShop" alt="PrimeOfferShop" />
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Why PrimeOfferShop?
                </Link>
              </li>

              <li className="dropdown nav-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  Western Fashion
                </Link>
                <div className="dropdown-menu">

                  <div className="category">
                    <h4>Women's Western Wear</h4>
                    <ul>
                      <li><a href="/womens-dresses">Dresses</a></li>
                      <li><a href="/womens-tops">Tops</a></li>
                      <li><a href="/womens-jeans">Jeans</a></li>
                      <li><a href="/womens-skirts">Skirts</a></li>
                      <li><a href="/womens-jackets">Jackets</a></li>
                    </ul>
                  </div>
                  <div className="category">
                    <h4>Men's Western Wear</h4>
                    <ul>
                      <li><a href="/mens-shirts">Shirts</a></li>
                      <li><a href="/mens-tshirts">T-Shirts</a></li>
                      <li><a href="/mens-trousers">Trousers</a></li>
                      <li><a href="/mens-jeans">Jeans</a></li>
                      <li><a href="/mens-jackets">Jackets</a></li>
                    </ul>
                  </div>
                  <div className="category">
                    <h4>Footwear</h4>
                    <ul>
                      <li><a href="/womens-footwear">Women's Footwear</a></li>
                      <li><a href="/mens-footwear">Men's Footwear</a></li>
                      <li><a href="/kids-footwear">Kids' Footwear</a></li>
                      <li><a href="/sports-footwear">Sports Footwear</a></li>
                    </ul>
                  </div>
                  <div className="category">
                    <h4>Accessories</h4>
                    <ul>
                      <li><a href="/bags">Bags</a></li>
                      <li><a href="/belts">Belts</a></li>
                      <li><a href="/jewelry">Jewelry</a></li>
                      <li><a href="/hats">Hats</a></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="dropdown nav-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  Traditional wear
                </Link>
                <div className="dropdown-menu">
                  <div className="category">
                    <h4>Men's Traditional Wear</h4>
                    <ul>
                      <li><a href="/mens-kurta-sets">Kurta Sets</a></li>
                      <li><a href="/mens-sherwani">Sherwani</a></li>
                      <li><a href="/mens-dhoti">Dhoti</a></li>
                      <li><a href="/mens-nehru-jacket">Nehru Jacket</a></li>
                      <li><a href="/mens-lungi">Lungi</a></li>
                      <li><a href="/mens-pajama">Pajama</a></li>
                    </ul>
                  </div>
                  <div className="category">
                    <h4>Women's Traditional Wear</h4>
                    <ul>
                      <li><a href="/womens-sarees">Sarees</a></li>
                      <li><a href="/womens-lehenga-choli">Lehenga Choli</a></li>
                      <li><a href="/womens-anarkali-suits">Anarkali Suits</a></li>
                      <li><a href="/womens-salwar-kameez">Salwar Kameez</a></li>
                      <li><a href="/womens-kurti-sets">Kurti Sets</a></li>
                    </ul>
                  </div>
                  <div className="category">
                    <h4>Children's Traditional Wear</h4>
                    <ul>
                      <li><a href="/kids-kurta-sets">Boys' Kurta Sets</a></li>
                      <li><a href="/kids-sherwani">Boys' Sherwani</a></li>
                      <li><a href="/kids-lehenga-choli">Girls' Lehenga Choli</a></li>
                      <li><a href="/kids-anarkali-suits">Girls' Anarkali Suits</a></li>
                      <li><a href="/kids-traditional-dresses">Traditional Dresses</a></li>
                    </ul>
                  </div>
                  <div className="category">
                    <h4>Accessories</h4>
                    <ul>
                      <li><a href="/dupattas">Dupattas</a></li>
                      <li><a href="/stoles">Stoles</a></li>
                      <li><a href="/jewelry">Jewelry</a></li>
                      <li><a href="/footwear">Footwear</a></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="extra-menu ps-4">
              <a href="/login" target="_blank" className="btn btn-primary">
                Login
              </a>
            </div>
          </div>
        </nav>
      </div>
      </div>
      )}
    {!welcome && (
      <div className="header-top">
        <div className="logo">
          <h1><span className="logo-icon">🎓</span> <a href='/'>PrimeOfferShop</a></h1>
        </div>
        <nav className="navbar">
          <ul>
            <li><a href="/welcome"><FaShoppingCart /> Ecommerce</a></li>
            {!trackOrder && (
              <li><a href="/trackOrder"> <FaTruck /> Delivery</a></li>
            )}
          </ul>
        </nav>
      </div>
    )}
    </header>
  );
};

export default Navbar;

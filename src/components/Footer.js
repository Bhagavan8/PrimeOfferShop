import React, { useState, useEffect } from 'react';
import '../css/Footer.css'; // Link to the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (err) => {
          setError("Unable to retrieve your location");
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            We are committed to providing the best products for your needs. Our
            goal is to bring the latest fashion trends with top quality.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#policy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: supportce@gmail.com</p>
          <p>Phone: +91 7013765836</p>
          <p>Address: PR layout, Marathahalli, Bangalore</p>
          <div className="map-container">
          {location.latitude && location.longitude ? (
            <iframe
              title="map"
              src={`https://www.google.com/maps?q=${location.latitude},${location.longitude}&z=15&output=embed`}
              width="300"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          ) : (
            <p>{error ? error : "Fetching location..."}</p>
          )}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 PrimeOfferShop.com. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

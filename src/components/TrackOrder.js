import React, { useState } from 'react';
import '../css/TrackOrder.css';
import Header from './Header';
import Footer from './Footer';
const TrackOrder = () => {
    const [mobileNumber, setMobileNumber] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle OTP submission logic here
    };
  
    return (
        <div className="App">
        <Header/>
      <div className="track-order-page">
       
        <div className="track-order-container">
          <h1 className="title">Track your <span>orders easily</span></h1>
          <p className="subtitle">Just enter your Mobile Number, AWB tracking number or Order ID & it’s done.</p>
  
          <form onSubmit={handleSubmit}>
            <div className="track-by">
              <label>
                <input type="radio" name="trackBy" defaultChecked /> Mobile Number
              </label>
              <label>
                <input type="radio" name="trackBy" /> AWB
              </label>
              <label>
                <input type="radio" name="trackBy" /> Order Id
              </label>
            </div>
  
            <input 
              type="text" 
              className="input-field" 
              placeholder="Enter your mobile number" 
              value={mobileNumber} 
              onChange={(e) => setMobileNumber(e.target.value)} 
            />
  
            <button type="submit" className="send-otp-button">Send OTP</button>
  
            <p className="redirect-info">You will be redirected to myShiprocket to track all your orders.</p>
          </form>
  
          <div className="order-details">
            <h3>Can’t Find Your Order Details?</h3>
            <p>We sent your AWB tracking number to you via Email & SMS upon order confirmation.</p>
          </div>
        </div>
      
      </div>
        <Footer/>
        </div>
    );
  };
  
  export default TrackOrder;
import React from 'react';
import '../css/Tooltip.css'; // Import the CSS file
import { FaInfoCircle } from 'react-icons/fa'; // Example icon from react-icons

const Tooltip = ({ text, children }) => {
  return (
    <div className="tooltip-container">
      {children}
      <span className="tooltip-text">
        <FaInfoCircle className="tooltip-icon" /> {/* Add the icon here */}
        {text}
      </span>
    </div>
  );
};

export default Tooltip;

import React from 'react';
import '../css/ThreeDImageCard.css'; // Import the CSS file

const ThreeDImageCard = ({ imageSrc, title, description }) => {
  return (
    <div className="image-card-container">
      <div className="image-card">
        <div className="image-card-front">
          <img src={imageSrc} alt={title} />
        </div>
        <div className="image-card-back">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ThreeDImageCard;

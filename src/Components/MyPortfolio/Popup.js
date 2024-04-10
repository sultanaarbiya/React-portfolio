import React from 'react';
import './MyPortfolio.css'; // CSS file for styling the popup

const Popup = ({ imageIndex }) => {
  const imageUrl = require(`./Images/image${imageIndex}.png`);

  return (
    <div className="popup-container">
      <img src={imageUrl} alt={`Image ${imageIndex}`} className="popup-image" />
    </div>
  );
};

export default Popup;

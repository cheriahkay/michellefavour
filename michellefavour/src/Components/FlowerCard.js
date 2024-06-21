// src/components/FlowerCard.js
import React from 'react';
import './FlowerCard.css';

const FlowerCard = ({ flower }) => {
  return (
    <div className="flower-card">
      <img src={flower.src} alt={flower.name} className="flower-image" />
      <div className="flower-name">{flower.name}</div>
    </div>
  );
};

export default FlowerCard;

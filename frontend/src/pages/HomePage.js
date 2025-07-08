import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <div className="homepage-overlay">
        <h1 className="homepage-title">NeighborFit</h1>
        <p className="homepage-subtitle">
          Find your ideal neighborhood based on your lifestyle preferences.
        </p>
        <p className="homepage-description">
          We help you choose where to live by matching your personal values like safety, greenery, affordability, education, and more — with the best neighborhoods.
        </p>
        <button className="homepage-button" onClick={() => navigate('/preferences')}>
          Get Started
        </button>
      </div>
    </div>
  );
}

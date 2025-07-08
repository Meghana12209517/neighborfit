import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ResultsPage.css';

function ResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const topCities = location.state || [];

  return (
    <div className="shared-container">
      <div className="header">
        <h1>🌇 Your Matched Cities</h1>
        <p>
          Based on your lifestyle preferences, here
          {topCities.length === 1
            ? ' is your best match:'
            : topCities.length > 1
            ? ` are your top ${topCities.length} matches:`
            : ' are no matching cities 😕'}
        </p>
      </div>

      <div className="card-container">
        {topCities.length > 0 ? (
          topCities.map((city, index) => (
            <div className="city-card" key={index}>
              <span role="img" aria-label="city" style={{ fontSize: '2rem' }}>🏙️</span>
              <h3>{city.name}</h3>
            </div>
          ))
        ) : (
          <p>No cities matched. Please try again.</p>
        )}
      </div>

      <button className="back-button" onClick={() => navigate('/')}>
        🔄 Try Again
      </button>
    </div>
  );
}

export default ResultsPage;

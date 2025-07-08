import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PreferencesPage.css';

function PreferencesPage() {
  const navigate = useNavigate();
  const [preferences, setPreferences] = useState({
    safety: null,
    affordability: null,
    greenery: null,
    school: null,
    transport: null,
    jobs: null,
    community: null
  });

  const handleSelect = (key, value) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: value
    }));
  };
  console.log("Sending preferences:", preferences);


  const handleSubmit = () => {
   fetch('http://localhost:5000/match',{
       method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(preferences)
    })
      .then((res) => res.json())
      .then((data) => {
        navigate('/results', { state: data });
      })
      .catch((err) => console.error('Error getting cities:', err));
  };

  const preferenceKeys = Object.keys(preferences);

  return (
    <div className="shared-container">
      <header className="header">
        <h1>🌐 NeighborFit</h1>
        <p>Discover neighborhoods tailored to your lifestyle preferences</p>
      </header>

      <div className="form-box">
        <h2>Select What Matters Most</h2>
        {preferenceKeys.map((key) => (
          <div key={key} className="form-row">
            <label>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
            <div className="button-group">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  className={preferences[key] === num ? 'pref-btn selected' : 'pref-btn'}
                  onClick={() => handleSelect(key, num)}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
        ))}
        <button className="submit-button" onClick={handleSubmit}>
          🔍 Show Matching Cities
        </button>
      </div>
    </div>
  );
}

export default PreferencesPage;

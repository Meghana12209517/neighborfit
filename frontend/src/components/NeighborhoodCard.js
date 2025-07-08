import React from 'react';
import './NeighborhoodCard.css';

function NeighborhoodCard({ name, safety, affordability, greenery, schools, transport, jobs, community }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <ul>
        <li><strong>Safety:</strong> {safety}/10</li>
        <li><strong>Affordability:</strong> {affordability}/10</li>
        <li><strong>Greenery:</strong> {greenery}/10</li>
        <li><strong>Schools:</strong> {schools}/10</li>
        <li><strong>Transport:</strong> {transport}/10</li>
        <li><strong>Jobs:</strong> {jobs}/10</li>
        <li><strong>Community:</strong> {community}/10</li>
      </ul>
    </div>
  );
}

export default NeighborhoodCard;

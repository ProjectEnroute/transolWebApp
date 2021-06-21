import React from 'react';
import './HomeCard.css';

function HomeCard({ title, details, src }) {
  return (
    <div className="HomeCardContainer">
      <div className="HomeCardContent">
        <h1>{title}</h1>
        <div className="HomeCardContentBody">
          <p>{details}</p>
          <img src={src} />
        </div>
      </div>
    </div>
  );
}

export default HomeCard;

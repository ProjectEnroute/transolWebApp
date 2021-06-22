import React from 'react';
import './NearestOffice.css';
import location from '../images/location.jpg';

function NearestOffice({ onClick }) {
  return (
    <div className="NearestOfice" onClick={onClick}>
      <div className="TextPart">
        <h1 className="headingText">Transol Ofice</h1>
        <p>
          Visit the nearest Transol offices to get face to face contact and
          acquisition of purchases by pickup
        </p>
      </div>
      <div className="ImageMap">
        <img src={location} />
      </div>
    </div>
  );
}

export default NearestOffice;

import React from 'react';
import './CarBrandCard.css';

function CarBrandCard(props) {
  const { image, title, color, availability } = props;

  /* ----- Make text based on availability input (yes / no) ----- */
  let availText, availColor;
  if (availability === 'yes') {
    availText = 'Info available';
    availColor = 'rgba(92, 219, 120, 0.6)';
  } else {
    availText = 'Info available';
    availColor = 'rgba(92, 219, 120, 0.6)';
  }

  return (
    <div className="carbrand_card_container">
      {/* ----- logo and car brand name ----- */}
      <h1 style={{ color: color }}> | </h1>
      <img src={image} />
      <p>{title}</p>

      {/* ----- availability of car info and sales ----- */}
      <div
        className="carbrand_card_availability_div"
        style={{ backgroundColor: availColor }}
      >
        <p>{availText}</p>
      </div>
    </div>
  );
}

export default CarBrandCard;

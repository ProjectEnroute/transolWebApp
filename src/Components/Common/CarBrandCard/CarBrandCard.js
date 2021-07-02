import React from 'react';
import './CarBrandCard.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function CarBrandCard(props) {
  const { image, title, color, availability } = props;
  AOS.init({ offset: 100, duration: 300, delay: 0 });

  /* ----- Make text based on availability input (yes / no) ----- */
  let availText, availColor;
  if (availability === 'yes') {
    availText = 'Available';
    availColor = 'rgba(92, 219, 120, 0.6)';
  } else if (availability === 'no') {
    availText = 'Unavailable';
    availColor = 'rgba(219, 68, 42, 0.6)';
  } else {
    availText = 'Undefined';
    availColor = 'rgba(128, 128, 128,0.5)';
  }

  return (
    <div className="carbrand_card_container" data-aos="zoom-out-right">
      {/* ----- logo and car brand name ----- */}
      <div className="logoPart">
        <h1 style={{ color: color }}> | </h1>
        <img src={image} />
        <p className="brand_name">{title}</p>
      </div>

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

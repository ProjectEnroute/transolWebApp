import React from 'react';
import './PatronizeUsCard.css';

const PatronizeUsCard = (props) => {
  const { title, src, Desc_1, Desc_2, Desc_3 } = props;
  return (
    <div className="patronizeUsCard">
      <img src={src} />
      <h1>{title}</h1>
      <div className="patDiv">
        <p>{Desc_1}</p>
        <p>{Desc_2}</p>
        <p>{Desc_3}</p>
      </div>
    </div>
  );
};

export default PatronizeUsCard;

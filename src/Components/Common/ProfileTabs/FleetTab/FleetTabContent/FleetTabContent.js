import React from 'react';
import './FleetTabContent.css';
function FleetTabContent(props) {
  const { image, text } = props;
  return (
    <div className="contentContainer">
      <img src={image} />
      <h1>{text}</h1>
    </div>
  );
}

export default FleetTabContent;

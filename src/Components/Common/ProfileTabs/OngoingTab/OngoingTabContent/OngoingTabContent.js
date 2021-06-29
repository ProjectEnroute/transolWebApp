import React from 'react';
import './OngoingTabContent.css';

function OngoingTabContent(props) {
  const { text, image } = props;
  return (
    <div className="ongoingContentContainer">
      <img src={image} />
      <h1>{text}</h1>
    </div>
  );
}

export default OngoingTabContent;

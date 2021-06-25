import React from 'react';
import './PaymentTabContent.css';

function PaymentTabContent(props) {
  const { text, icon } = props;
  return (
    <div className="contentContainer">
      <h1> {text}</h1>
      <img src={icon} />
    </div>
  );
}

export default PaymentTabContent;

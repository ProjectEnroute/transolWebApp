import React from 'react';
import { useHistory } from 'react-router-dom';
import './PaymentTabContent.css';

function PaymentTabContent(props) {
  const pist = useHistory();
  const { text, icon } = props;

  const nextPage = (text) => {
    let page = 'addPaymentCard';

    // check for page to switch
    switch (text) {
      case 'Add new payment method':
        page = 'addPaymentCard';
        break;
      default:
        page = 'addPaymentCard';
    }
    pist.push(`/${page}.url`);
  };

  return (
    <div className="paymentContentContainer" onClick={nextPage}>
      <h1> {text}</h1>
      <img src={icon} />
    </div>
  );
}

export default PaymentTabContent;

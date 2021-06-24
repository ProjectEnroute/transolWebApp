import React from 'react';
import './PaymentTab.css';
// icon imports ------------------------
import addPaymentIcon from '../../../Images/iconFolder/paymentAddIcon.png';

function PaymentTab() {
  /* hold recycler content in a function*/
  const RecyclerContent = () => {
    return <div contentContainer></div>;
  };
  return (
    <div className="container">
      <img src={addPaymentIcon} />
    </div>
  );
}

export default PaymentTab;

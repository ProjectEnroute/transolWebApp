import React from 'react';
import './PaymentMethodsPage.css';
//  Component imports -------------------
import PaymentCard from '../../Common/PaymentCard/PaymentCard';
function PaymentMethodsPage() {
  return (
    <div className="paymentpageContainer">
      <h1 style={{ color: '#000000', fontSize: '400%' }}>Payment Methods</h1>

      <PaymentCard
        cardType="debit card"
        cardCategory="master"
        holdersName="Samuel Johnson"
        lastNumbers="6717"
        expMonth="04"
        expYear="22"
        active="expired"
      />

      <PaymentCard
        cardType="credit card"
        cardCategory="verve"
        holdersName="Hannie Dubem"
        lastNumbers="7033"
        expMonth="08"
        expYear="25"
        active="active"
      />

      <div className="addcardButton">
        <p>Add new card</p>
      </div>
      <div className="managecardButton">
        <p>Manage cards</p>
      </div>
    </div>
  );
}

export default PaymentMethodsPage;

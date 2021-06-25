import React from 'react';
import './PaymentTab.css';
// component imports -------------------
import PaymentTabContent from './PaymentTabContent/PaymentTabContent';
// icon imports ------------------------
import addPaymentIcon from '../../../Images/iconFolder/paymentAddIcon.png';
import paymentCardIcon from '../../../Images/iconFolder/paymentCardIcon.png';
import paymentCashIcon from '../../../Images/iconFolder/paymentCashIcon.png';
import paymentCoinIcon from '../../../Images/iconFolder/paymentCoinIcon.png';

function PaymentTab() {
  return (
    <div className="container">
      <PaymentTabContent text="Add new payment method" icon={addPaymentIcon} />

      <PaymentTabContent text="View payment methods" icon={paymentCardIcon} />

      <PaymentTabContent text="Deposit/Withdraw funds" icon={paymentCashIcon} />

      <PaymentTabContent text="Buy Transolution coins" icon={paymentCoinIcon} />
    </div>
  );
}

export default PaymentTab;

import React from 'react';
import './PaymentCard.css';
import masterCard from '../../Images/iconFolder/masterCard.png';
import visaCard from '../../Images/iconFolder/visaCard.png';
import verveCard from '../../Images/iconFolder/verveCard.png';

function PaymentCard(props) {
  const {
    cardType,
    cardCategory,
    holdersName,
    active,
    lastNumbers,
    expMonth,
    expYear,
  } = props;
  /* ----- card type (debit credit)
  -------- card category ( master verve visa) ----- */
  let cardLogo = masterCard;
  switch (cardCategory) {
    case 'master':
      cardLogo = masterCard;
      break;
    case 'verve':
      cardLogo = verveCard;
      break;
    case 'visa':
      cardLogo = visaCard;
      break;
  }

  return (
    <div className="paymentCard_container">
      {/* ----- card header details ----- */}
      <div className="paymentCard_top">
        <h3>{cardType}</h3>
        <img src={cardLogo} />
      </div>

      {/* ----- card number and exp date ----- */}
      <div className="paymentCard_middle">
        <h3>**** **** **** {lastNumbers}</h3>
        <div>
          <p style={{ fontWeight: 'bold' }}>Exp Date.</p>
          <p>
            {expMonth}/{expYear}
          </p>
        </div>
      </div>

      {/* ----- card holder name and usability ----- */}
      <div className="paymentCard_footer">
        <h3>{holdersName}</h3>
        <p>{active}</p>
      </div>
    </div>
  );
}

export default PaymentCard;

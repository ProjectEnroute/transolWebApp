import React from 'react';
import './AddPaymentCard.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function AddPaymentCard() {
  const options = ['Mastercard', 'USA', 'Califonia', 'Korea'];
  return (
    <div className="addPaymentContainer">
      <h1
        style={{
          fontSize: '400%',
          marginTop: '15px',
          textShadow: '3px 3px 9px rgba(0,0,0,0.3)',
          color: '#000',
        }}
      >
        Payment method
      </h1>

      {/* ----- cntainer for cardnumber and holder name ----- */}
      <div className="addCardTop">
        <p style={{ fontSize: '25px', fontFamily: 'pepertua' }}>Card number</p>
        <input
          className="cardNumberInput"
          placeholder="XXXX - XXXX - XXXX - XXXX"
        />
        <p style={{ fontSize: '25px', fontFamily: 'pepertua' }}>Holders name</p>
        <input
          className="cardHolderInput"
          placeholder="Surn name                    Other names"
        />
      </div>

      {/* ----- container for exp date and ccv ----- */}
      <div className="addCardMiddle">
        {/* ----- div for expiry date ----- */}
        <div className="expDateDiv">
          <p style={{ fontSize: '25px', fontFamily: 'pepertua' }}>Exp Date</p>
          <input className="cardEXPDate" placeholder="MM YY" />
        </div>

        {/* ----- div for ccv ----- */}
        <div className="ccvDiv">
          <p style={{ fontSize: '25px', fontFamily: 'pepertua' }}>CCV</p>
          <input className="cardCCV" placeholder="XXX" />
        </div>
      </div>

      {/* ----- contaniner for country selection ----- */}
      <div className="addCardBottom">
        <p style={{ fontSize: '25px', fontFamily: 'pepertua' }}>Country</p>
        <Dropdown
          placeholder="Country"
          options={options}
          value="Nigeria"
          className="countryDropdown"
          controlClassName="countryDropContol"
        />
      </div>

      {/* ----- buttons for add and delete ----- */}
      <div
        className="addPaymentButton"
        style={{
          backgroundColor: '#111821',
          boxShadow: '4px 4px 12px 4px rgba(69, 55, 68, 0.4)',
        }}
      >
        <p style={{ color: '#fff', fontSize: '25px', marginTop: '4%' }}>
          Add card
        </p>
      </div>
      <div
        className="addPaymentButton"
        style={{
          backgroundColor: '#B51919',
          boxShadow: '4px 4px 12px 4px rgba(181, 25, 25, 0.4)',
        }}
      >
        <p style={{ color: '#fff', fontSize: '25px', marginTop: '4%' }}>
          Discard changes
        </p>
      </div>
    </div>
  );
}

export default AddPaymentCard;

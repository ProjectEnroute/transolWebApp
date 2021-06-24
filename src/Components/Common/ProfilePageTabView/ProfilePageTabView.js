import React, { useState } from 'react';
import './ProfilePageTabView.css';

function ProfilePageTabView() {
  /* All tabs
  payments_tab --- 
  fleet_tab --- 
  orders_tab --- 
  ongoing_tab --- 
  */
  const [Tab, setTab] = useState('orders_tab');

  // Create on click for payment tab
  const Tab_1 = () => {
    setTab('payments_tab');
  };

  //  Create on click for fleet tab
  const Tab_2 = () => {
    setTab('fleet_tab');
  };

  //  Create on click for orders tab
  const Tab_3 = () => {
    setTab('orders_tab');
  };

  //  Create on click for ongoingtab
  const Tab_4 = () => {
    setTab('ongoing_tab');
  };

  return (
    <div className="tabViewContainer">
      <div id={Tab}>
        <p className="payment" onClick={Tab_1}>
          Payment
        </p>
        <p className="fleet" onClick={Tab_2}>
          My Fleet
        </p>
        <p className="orders" onClick={Tab_3}>
          My Orders
        </p>
        <p className="ongoing" onClick={Tab_4}>
          Ongoing
        </p>
      </div>
    </div>
  );
}

export default ProfilePageTabView;

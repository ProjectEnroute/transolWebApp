import React from 'react';
import './ProfilePageTabView.css';

function ProfilePageTabView() {
  /* payments_tab --- fleet_tab --- orders_tab --- ongoing_tab */
  const selectedTab = 'payments_tab';

  return (
    <div className="tabViewContainer">
      <div id={selectedTab}>
        <p className="payment">Payment</p>
        <p className="fleet">My Fleet</p>
        <p className="orders">My Orders</p>
        <p className="ongoing">Ongoing</p>
      </div>
    </div>
  );
}

export default ProfilePageTabView;

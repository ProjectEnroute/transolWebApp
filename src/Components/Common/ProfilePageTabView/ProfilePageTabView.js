import React, { useState } from 'react';
import { useHistory, Route, HashRouter, Switch } from 'react-router-dom';
import './ProfilePageTabView.css';

// tab imports ------------------
import FleetTab from '../ProfileTabs/FleetTab/FleetTab';
import PaymentTab from '../ProfileTabs/PaymentTab/PaymentTab';
import OrdersTab from '../ProfileTabs/OrdersTab/OrdersTab';
import OngoingTab from '../ProfileTabs/OngoingTab/OngoingTab';

function ProfilePageTabView() {
  const gist = useHistory();
  /* All tabs
  payments_tab --- 
  fleet_tab --- 
  orders_tab --- 
  ongoing_tab --- 
  */
  const [Tab, setTab] = useState('fleet_tab');
  const [Bar_1, setBar_1] = useState('');
  const [Bar_2, setBar_2] = useState('visible_bar');
  const [Bar_3, setBar_3] = useState('');
  const [Bar_4, setBar_4] = useState('');
  const [BarColor, setBarColor] = useState('#a29345');
  const SelectedTab = 'FleetBar';

  // Create on click for payment tab
  const Tab_1 = () => {
    setTab('payments_tab');
    setBarColor('#773333');
    setBar_1('visible_bar');
    setBar_2('hidden_bar');
    setBar_3('hidden_bar');
    setBar_4('hidden_bar');
    gist.push('/Payment');
  };

  //  Create on click for fleet tab
  const Tab_2 = () => {
    setTab('fleet_tab');
    setBarColor('#a29345');
    setBar_1('hidden_bar');
    setBar_2('visible_bar');
    setBar_3('hidden_bar');
    setBar_4('hidden_bar');
    gist.push('/Fleet');
  };

  //  Create on click for orders tab
  const Tab_3 = () => {
    setTab('orders_tab');
    setBarColor('#538e57');
    setBar_1('hidden_bar');
    setBar_2('hidden_bar');
    setBar_3('visible_bar');
    setBar_4('hidden_bar');
    gist.push('Orders');
  };

  //  Create on click for ongoing tab
  const Tab_4 = () => {
    setTab('ongoing_tab');
    setBarColor('#3d7a91');
    setBar_1('hidden_bar');
    setBar_2('hidden_bar');
    setBar_3('hidden_bar');
    setBar_4('visible_bar');
    gist.push('Ongoing');
  };

  return (
    <div className="bigClass">
      <div className="tabViewContainer">
        <div id={Tab}>
          <div className="payment" onClick={Tab_1}>
            <p>Payment</p>
            <div className={Bar_1} style={{ backgroundColor: `${BarColor}` }} />
          </div>
          <div className="fleet" onClick={Tab_2}>
            <p>My Fleet</p>
            <div className={Bar_2} style={{ backgroundColor: `${BarColor}` }} />
          </div>
          <div className="orders" onClick={Tab_3}>
            <p>My Orders</p>
            <div className={Bar_3} style={{ backgroundColor: `${BarColor}` }} />
          </div>
          <div className="ongoing" onClick={Tab_4}>
            <p>Ongoing</p>
            <div className={Bar_4} style={{ backgroundColor: `${BarColor}` }} />
          </div>
        </div>
      </div>
      <HashRouter basename="/profile">
        <Switch>
          <Route exact path="/" component={FleetTab} />
          <Route exact path="/Payment" component={PaymentTab} />
          <Route exact path="/Fleet" component={FleetTab} />
          <Route exact path="/Orders" component={OrdersTab} />
          <Route exact path="/Ongoing" component={OngoingTab} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default ProfilePageTabView;

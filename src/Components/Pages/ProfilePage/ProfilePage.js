import React from 'react';
import './ProfilePage.css';
//  Component imports --------------------------------
import Header from '../../Common/Header/Header';
import TabView from '../../Common/ProfilePageTabView/ProfilePageTabView';
import PaymentTab from '../../Common/ProfileTabs/PaymentTab/PaymentTab';
import FleetTab from '../../Common/ProfileTabs/FleetTab/FleetTab';
import OrdersTab from '../../Common/ProfileTabs/OrdersTab/OrdersTab';
// Image imports -------------------------------------
import ProfilePicture from '../../Images/imageFolder/profilePictureMock.jpg';

function Profile() {
  return (
    <div>
      <center>
        <Header
          name="%UserName%"
          backgroundImage={ProfilePicture}
          HeadStory="%Address%, %State%"
        />
      </center>

      <div className="profileContainer">
        <div className="Profile">
          <img src={ProfilePicture} />
        </div>
        <div className="profileInfo">
          <h1>%TransolCoins%</h1>
          <p>%Subscription%</p>
        </div>
      </div>

      <center>
        <TabView />
      </center>
      <center>
        <OrdersTab />
        <FleetTab />
        <PaymentTab />
      </center>
    </div>
  );
}

export default Profile;

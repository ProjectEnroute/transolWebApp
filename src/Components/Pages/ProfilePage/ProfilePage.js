import React from 'react';
import Header from '../../Common/Header/Header';
import profileBanner from '../../Images/imageFolder/profileBanner.jpg';
import './ProfilePage.css';

function Profile() {
  return (
    <div>
      <center>
        <Header
          name="%UserName%"
          backgroundImage={profileBanner}
          HeadStory="%Address%, %State%"
        />
      </center>
      <center>
        <div className="Profile">
          <img />
          <h1>%Transol credit%</h1>
        </div>
      </center>
      <center>
        <div className="ProfileOptionButton">
          <p>Payment</p>
          <p>my fleet</p>
          <p>My Orders</p>
          <p>Ongoing</p>
        </div>
      </center>
    </div>
  );
}

export default Profile;

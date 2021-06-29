import React from 'react';
import { HashRouter } from 'react-router-dom';
import './ProfilePage.css';
//  Component imports --------------------------------
import Header from '../../Common/Header/Header';
import TabView from '../../Common/ProfilePageTabView/ProfilePageTabView';
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
        <HashRouter>
          <TabView />
        </HashRouter>
      </center>
    </div>
  );
}

export default Profile;

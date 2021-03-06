import React from 'react';
import { useHistory } from 'react-router-dom';
import './Header.css';
import IconButton from '@material-ui/core/IconButton';
import Power from '@material-ui/icons/PowerSettingsNew';
import MenuIcon from '@material-ui/icons/Menu';
import { image } from 'faker';
// import styled from "styled-component";

function Header(props) {
  const hist = useHistory();
  const { backgroundImage, name, HeadStory } = props;
  return (
    <div
      className="HeaderHeroImage"
      style={{ backgroundImage: `URL('${backgroundImage}')` }}
      // style={{ backgroundImage: backgroundImage }}
    >
      <div className="BlurHeader">
        <div className="navs">
          <IconButton>
            <MenuIcon style={{ color: 'white', size: 'large' }} />
          </IconButton>
          <div className="logoutButton">
            <IconButton className="IconButton">
              <Power style={{ color: 'white', size: 'large' }} />
            </IconButton>
            <p>Logout</p>
          </div>
        </div>
        <center className="Transol">
          <p className="headText">{name}</p>
          <p className="headMotto">{HeadStory}</p>
        </center>
        <div className="headerOptions">
          <p
            style={{ fontSize: 'HomeFont' }}
            onClick={() => {
              hist.push('/homepage');
            }}
          >
            Home
          </p>

          <p
            style={{ fontSize: 'ProfileFont' }}
            onClick={() => {
              hist.push('/profile');
            }}
          >
            Profile
          </p>

          <p
            style={{ fontSize: 'CarBrandsFont' }}
            onClick={() => {
              hist.push('/carbrands');
            }}
          >
            Car Brands
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;

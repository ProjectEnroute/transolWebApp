import React from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";
import IconButton from "@material-ui/core/IconButton";
import AppIcon from "@material-ui/icons/Apps";
import CloseIcon from "@material-ui/icons/Close";
// import styled from "styled-component";

function Header({
  HomeFont,
  ProfileFont,
  CarBrandsFont,
  backgroundImage,
  name,
  HeadStory,
}) {
  const hist = useHistory();
  return (
    <div
      className="HeaderHeroImage"
      // style={{ backgroundImage: backgroundImage }}
    >
      <div className="navs">
        <IconButton>
          <CloseIcon style={{ color: "white", size: "large" }} />
        </IconButton>
        <IconButton>
          <AppIcon style={{ color: "white", size: "large" }} />
        </IconButton>
      </div>
      <center className="Transol">
        <h1>{name}</h1>
        <br />
        <h3>{HeadStory}</h3>
      </center>
      <br />

      <div className="headerOptions">
        <h2
          style={{ fontSize: "HomeFont" }}
          onClick={() => {
            hist.push("/homepage");
          }}
        >
          Home
        </h2>

        <h2
          style={{ fontSize: "ProfileFont" }}
          onClick={() => {
            hist.push("/profile");
          }}
        >
          Profile
        </h2>

        <h2
          style={{ fontSize: "CarBrandsFont" }}
          onClick={() => {
            hist.push("/carbrand");
          }}
        >
          Car Brands
        </h2>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "../common/Header";
import HomeCard from "../common/HomeCard";
import "./HomePage.css";
import repair from "../images/spanner-removebg-preview.png";
import brand from "../images/car_icon-removebg-preview.png";
import tag from "../images/tag-removebg-preview.png";
import NearestOffice from "../common/NearestOffice";
import forward from "../images/forward_icon-removebg-preview (1).png";
import HeadLight from "../images/Headlight.jpeg";
import breaks from "../images/breaks.jpg";
import engine from "../images/engine.jpg";
import steering from "../images/steering wheels.jpg";
import tyre from "../images/tires.jpg";
import asseseries from "../images/assessories.jpg";
import homebackgroundImage from "../images/car dark them yes.jpg";

function HomePage() {
  const hist = useHistory();

  const HomePageTray = ({ color, title }) => {
    return (
      <div className="HomeTrayContainer">
        <h1> |</h1>
        <p>{title}</p>
        <img src={forward} />
      </div>
    );
  };

  const PatronizeUsCard = ({ title, src }) => {
    return (
      <div className="patronizeUsCard">
        <img src={src} />
        <h2>{title}</h2>
      </div>
    );
  };

  return (
    <div className="HomePage">
      <center>
        <Header
          name="Transol"
          HeadStory="your walk with ease"
          HomeFont="40"
          backgroundImage=" 'url('  + { homebackgroundImage } + ' )' "
        />
      </center>
      <div className="HomePageCard">
        <div>
          <HomeCard
            title="Repairs"
            details="Flag your car for repairs and fixing"
            src={repair}
          />
        </div>

        <div>
          <HomeCard
            title="Car Brands"
            details="Select brand of car to explore"
            src={brand}
          />
        </div>
        <div>
          <HomeCard
            title="Subscription"
            details="View your subscription"
            src={tag}
          />
        </div>
      </div>
      <div className="HomePageNearestOffice">
        <NearestOffice
          onClick={() => {
            hist.push("/transoloffice");
          }}
        />

        <div className="HomePageTrayHolder">
          <h2>Our services</h2>
          <div
            onClick={() => {
              hist.push("/tollservices");
            }}
          >
            <HomePageTray title="Toll services" color="red" />
          </div>
          <div
            onClick={() => {
              hist.push("/hire");
            }}
          >
            <HomePageTray title="Hire a ranger" color="red" />
          </div>
          <div>
            <HomePageTray title="Order repair specialist" color="red" />
          </div>
          <div>
            <HomePageTray title="Toll services" color="red" />
          </div>
          <div>
            <HomePageTray title="Hire transport conveyors" color="red" />
          </div>
          <div
            className="pat"
            onClick={() => {
              hist.push("/ourservices");
            }}
          >
            <p>Patronize us</p>
            <img src={forward} className="arrow" />
          </div>
          <div className="PatronizeUsCardHolder">
            <PatronizeUsCard title="Head Light" src={HeadLight} />
            <PatronizeUsCard title="Brakes" src={breaks} />
            <PatronizeUsCard title="Engine" src={engine} />
            <PatronizeUsCard title="Accessories" src={asseseries} />
            <PatronizeUsCard title="Tyre" src={tyre} />
            <PatronizeUsCard title="Steering Wheels" src={steering} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

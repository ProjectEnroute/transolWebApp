import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../common/Header';
import HomeCard from '../common/HomeCard';
import './HomePage.css';
import repair from '../images/spanner.png';
import brand from '../images/car.png';
import tag from '../images/tag.png';
import NearestOffice from '../common/NearestOffice';
import forward from '../images/forward_icon-removebg-preview (1).png';
import HeadLight from '../images/Headlight.jpeg';
import brake_1 from '../images/brake_1.png';
import engine from '../images/engine.jpg';
import steering from '../images/steering.jpg';
import wheel from '../images/wheel.jpg';
import wiring from '../images/wiring.jpg';
import homebackgroundImage from '../images/car dark them yes.jpg';

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

  const PatronizeUsCard = ({ title, src, Desc_1, Desc_2, Desc_3 }) => {
    return (
      <div className="patronizeUsCard">
        <img src={src} />
        <h1>{title}</h1>
        <div className="patDiv">
          <p>{Desc_1}</p>
          <p>{Desc_2}</p>
          <p>{Desc_3}</p>
        </div>
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
            hist.push('/transoloffice');
          }}
        />

        <div className="HomePageTrayHolder">
          <h2>Our services</h2>
          <div
            onClick={() => {
              hist.push('/tollservices');
            }}
          >
            <HomePageTray title="Toll services" color="#D64A4A" />
          </div>
          <div
            onClick={() => {
              hist.push('/hire');
            }}
          >
            <HomePageTray title="Hire a ranger" color="#C5B358" />
          </div>
          <div>
            <HomePageTray title="Order repair specialist" color="#5CCE64" />
          </div>
          <div>
            <HomePageTray title="Toll services" color="#509BB7" />
          </div>
          <div
            className="pat"
            onClick={() => {
              hist.push('/ourservices');
            }}
          >
            <p>Patronize us</p>
            <img src={forward} className="arrow" />
          </div>
          <div className="PatronizeUsCardHolder">
            <PatronizeUsCard
              title="Head Light"
              src={HeadLight}
              Desc_1="Head lights"
              Desc_2="Bulbs"
              Desc_3="Fixing"
            />
            <PatronizeUsCard
              title="Brakes"
              src={brake_1}
              Desc_1="Full brakes"
              Desc_2="Brake servicing"
              Desc_3="Brake calipers"
            />
            <PatronizeUsCard
              title="Engine"
              src={engine}
              Desc_1="New engine"
              Desc_2="Used engines"
              Desc_3="Engine servicing"
            />
            <PatronizeUsCard
              title="Wiring and electronics"
              src={wiring}
              Desc_1="Guage cluster"
              Desc_2="Dasshboard attachments"
              Desc_3="Other wiring"
            />
            <PatronizeUsCard
              title="Wheel"
              src={wheel}
              Desc_1="New tyres"
              Desc_2="Used tyres"
              Desc_3="Vulcanising"
            />
            <PatronizeUsCard
              title="Steering Wheels"
              src={steering}
              Desc_1="Steering replacement"
              Desc_2="steering covers"
              Desc_3="Steering electronics"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

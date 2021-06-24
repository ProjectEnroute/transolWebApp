import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './HomePage.css';
// Component imports -------------------------------------------------
import Header from '../../Common/Header/Header';
import HomeCard from '../../Common/HomeCard/HomeCard';
import NearestOffice from '../../Common/NearestOffice/NearestOffice';
import PatronizeUsCard from '../../Common/PatronizeUsCard/PatronizeUsCard';
import HomePageTray from '../../Common/HomePageTray/HomePageTray';
// Icon imports --------------------------------------------------------
import repair from '../../Images/iconFolder/spanner.png';
import brand from '../../Images/iconFolder/car.png';
import tag from '../../Images/iconFolder/tag.png';
import forward from '../../Images/iconFolder/arrow.png';
// Image  imports ------------------------------------------------------
import HeadLight from '../../Images/imageFolder/Headlight.jpeg';
import brake_1 from '../../Images/imageFolder/brake_1.png';
import engine from '../../Images/imageFolder/engine.jpg';
import steering from '../../Images/imageFolder/steering.jpg';
import wheel from '../../Images/imageFolder/wheel.jpg';
import wiring from '../../Images/imageFolder/wiring.jpg';
import homebackgroundImage from '../../Images/imageFolder/headerTheme.jpg';

function HomePage() {
  const hist = useHistory();

  return (
    <div className="HomePage">
      {/* Header component */}
      <center>
        <Header
          name="Transol"
          HeadStory="your walk with ease"
          HomeFont="40"
          backgroundImage={homebackgroundImage}
        />
      </center>

      {/* Home page card component */}
      <div className="HomePageCard">
        {/* Home Card 1 */}
        <div>
          <HomeCard
            title="Repairs"
            details="Flag your car for repairs and fixing"
            src={repair}
          />
        </div>

        {/* Home Card 2 */}
        <div>
          <HomeCard
            title="Car Brands"
            details="Select brand of car to explore"
            src={brand}
          />
        </div>

        {/* Home Card 3 */}
        <div>
          <HomeCard
            title="Subscription"
            details="View your subscription"
            src={tag}
          />
        </div>
      </div>

      {/* Nearest office component */}
      <div className="HomePageNearestOffice">
        <NearestOffice
          onClick={() => {
            hist.push('/transoloffice');
          }}
        />

        {/* Home page tray component */}
        <div className="HomePageTrayHolder">
          {/* Our services ection title */}
          <div className="pat">
            <p>Our services</p>
            <img src={forward} className="arrow" />
          </div>

          {/* ----- Tray list ----- */}
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
            <HomePageTray title="Hire tansport conveyors" color="#509BB7" />
          </div>
          {/* ------------------------ */}

          {/* Patronize us section title */}
          <div className="pat">
            <p>Patronize us</p>
            <img src={forward} className="arrow" />
          </div>

          {/* Patronize us card component grid */}
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

import React from 'react';
import './CarBrands.css';
//  Image immports -------------------------
import CarBrandsImage from '../../Images/imageFolder/carBrands.jpg';
//  Component imports ----------------------
import Header from '../../Common/Header/Header';
import CarBrandCard from '../../Common/CarBrandCard/CarBrandCard';
//  Image imports -----------------------------
import audi_logo from '../../Images/logoFolder/audi_logo.png';
import acura_logo from '../../Images/logoFolder/acura_logo.png';
import aston_martin_logo from '../../Images/logoFolder/aston_martin_logo.png';
import bmw_logo from '../../Images/logoFolder/bmw_logo.png';
import bentley_logo from '../../Images/logoFolder/bentley_logo.png';
import bugatti_logo from '../../Images/logoFolder/bugatti_logo.png';
import cardillac_logo from '../../Images/logoFolder/cardillac_logo.png';
import chevrolet_corvette_logo from '../../Images/logoFolder/chevrolet_corvette_logo.png';
import chevrolet_logo from '../../Images/logoFolder/chevrolet_logo.png';

function CarBrands() {
  return (
    <div className="carsbrand_container">
      {/* ----- Put the header in the center ----- */}
      <center>
        <Header
          backgroundImage={CarBrandsImage}
          name="CarBrands"
          HeadStory="Choose car brand"
        />
      </center>

      {/* ----- Search bar ----- */}
      <center>
        <input
          placeholder="Search for brands"
          className="carBrands_searchBox"
          type="text"
        />
      </center>

      {/* ----- div to hold the car brands  ----- */}
      <center>
        {/* ----- Card props:{image, title, color, availability(yes or no)} ----- */}

        {/* ----- Audi card ----- */}
        <CarBrandCard
          image={audi_logo}
          title="Audi"
          color="#DC5353"
          availability="no"
        />
        {/* ----- Acura card ----- */}
        <CarBrandCard
          image={acura_logo}
          title="Acura"
          color="#002147"
          availability="no"
        />
        {/* ----- Aston martin card  ----- */}
        <CarBrandCard
          image={aston_martin_logo}
          title="Aston Martin"
          color=" #1D794F"
          availability="no"
        />
        {/* ----- BMW card ----- */}
        <CarBrandCard
          image={bmw_logo}
          title="B M W"
          color="#0066B1"
          availability="no"
        />
        {/* ----- Bentley card ----- */}
        <CarBrandCard
          image={bentley_logo}
          title="Bentley"
          color=" #2A2A28 "
          availability="no"
        />
        {/* ----- Bugatti card ----- */}
        <CarBrandCard
          image={bugatti_logo}
          title="Bugatti"
          color=" #BF141D"
          availability="no"
        />
        {/* ----- Cardillac card ----- */}
        <CarBrandCard
          image={cardillac_logo}
          title="Cardillac"
          color=" #DAB443"
          availability="no"
        />
        {/* ----- Chevrolet Corvette card ----- */}
        <CarBrandCard
          image={chevrolet_corvette_logo}
          title="Chevrolet Corvette"
          color=" #7A1A1D"
          availability="no"
        />
        {/* ----- Chevrolet card ----- */}
        <CarBrandCard
          image={chevrolet_logo}
          title="Chevrolet"
          color=" #BC8C31"
          availability="no"
        />
        {/* ----- To be contd ----- */}
      </center>
    </div>
  );
}

export default CarBrands;

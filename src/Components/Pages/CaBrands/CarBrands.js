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
        <input />
      </center>

      {/* ----- div to hold the car brands  ----- */}
      <center>
        {/* ----- Card props:{image, title, color, availability(yes or no)} ----- */}

        {/* ----- Audi card ----- */}
        <CarBrandCard
          image={audi_logo}
          title="Audi"
          color="#DC5353"
          availability="yes"
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
          availability="gg"
        />
      </center>
    </div>
  );
}

export default CarBrands;

import React from 'react';
import './CarBrands.css';
//  Image immports -------------------------
import CarBrandsImage from '../../Images/imageFolder/carBrands.jpg';
//  Component imports ----------------------
import Header from '../../Common/Header/Header';
import CarBrandCard from '../../Common/CarBrandCard/CarBrandCard';
//  Image imports -----------------------------
import audi_logo from '../../Images/logoFolder/audi_logo.png';

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
      {/* ----- div to hold the car brands  ----- */}
      <center>
        {/* ----- Audi card ----- */}
        <CarBrandCard image={audi_logo} title="Audi" availability="yes" />
      </center>
    </div>
  );
}

export default CarBrands;

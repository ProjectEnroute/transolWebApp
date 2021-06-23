import React from 'react';
import Header2 from '../../Common/Header/Header2';
import './OurServicesPage.css';

function OurService() {
  const Tiles = () => {
    return (
      <div className="TilesCard">
        <img className="imgs" />
        <div>hello lakes</div>
      </div>
    );
  };
  return (
    <div className="OurServices">
      <Header2 />
      <div>
        <Tiles />
      </div>
    </div>
  );
}

export default OurService;

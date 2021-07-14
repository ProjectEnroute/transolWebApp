import React, { useEffect } from 'react';
import './FleetTab.css';
// component imports ---------------------------
import FleetTabContent from './FleetTabContent/FleetTabContent';
// image imports -------------------------------
import mockCar_1 from '../../../Images/imageFolder/mockCar_1.jpg';
import mockCar_2 from '../../../Images/imageFolder/mockCar_2.jpg';
import mockCar_3 from '../../../Images/imageFolder/mockCar_3.jpg';
import mockCar_4 from '../../../Images/imageFolder/mockCar_4.jpg';
import mockCar_5 from '../../../Images/imageFolder/mockCar_5.jpg';
import mockCar_6 from '../../../Images/imageFolder/mockCar_6.jpg';

function FleetTab() {
  useEffect(() => {
    console.log('This is the fleet tab rendered');
  });
  return (
    <div className="fleetContainer">
      <FleetTabContent text="BMW S-CLASS 2017" image={mockCar_1} />
      <FleetTabContent text="Hector Senior 2020" image={mockCar_2} />
      <FleetTabContent text="Range rover rogue" image={mockCar_3} />
      <FleetTabContent text="Lamborghini centurion" image={mockCar_4} />
      <FleetTabContent text="Corvette C8 2020" image={mockCar_5} />
      <FleetTabContent text="Mercedes AMG-GT 2020" image={mockCar_6} />
    </div>
  );
}

export default FleetTab;

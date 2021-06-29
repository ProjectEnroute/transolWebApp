import React from 'react';
import './OngoingTab.css';
import OngoingTabContent from './OngoingTabContent/OngoingTabContent';
// image imports -------------------------------
import mockCar_1 from '../../../Images/imageFolder/mockCar_1.jpg';
import mockCar_2 from '../../../Images/imageFolder/mockCar_2.jpg';
import mockCar_3 from '../../../Images/imageFolder/mockCar_3.jpg';
import mockCar_4 from '../../../Images/imageFolder/mockCar_4.jpg';
import mockCar_5 from '../../../Images/imageFolder/mockCar_5.jpg';
import mockCar_6 from '../../../Images/imageFolder/mockCar_6.jpg';

function OngoingTab() {
  return (
    <div className="ongoingContainer">
      <OngoingTabContent text="Under repair" image={mockCar_5} />
      <OngoingTabContent text="Adding custom tyres" image={mockCar_2} />
      <OngoingTabContent text="Repainting" image={mockCar_4} />
      <OngoingTabContent text="Headlights tint replacement" image={mockCar_6} />
    </div>
  );
}

export default OngoingTab;

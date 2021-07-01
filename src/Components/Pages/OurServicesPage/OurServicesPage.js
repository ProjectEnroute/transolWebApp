import React from 'react';
import './OurServicesPage.css';

//  Image imports --------------------------------
import tollingImage from '../../Images/imageFolder/tolling.jpg';
import RangerImage from '../../Images/imageFolder/rangerImage.jpg';
import Mechanic from '../../Images/imageFolder/mechanic_1.jpg';
import Lexus2 from '../../Images/imageFolder/lexus2.jpg';
import wall from '../../Images/imageFolder/wall_6.jpg';
import Contact from '../../Images/imageFolder/contactUs.jpg';
// Component imports ------------------------------
import Header2 from '../../Common/Header/Header2';
import OurServicesTiles from '../../Common/OurServicesTiles/OurServicesTiles';

function OurService() {
  return (
    <div className="OurServices">
      <Header2 />
      <OurServicesTiles
        image={tollingImage}
        title="Toll Service"
        desc="Are you stuck in an awkward situation? Get a toll vehicle to your location as soon as possible to move your vehicle."
      />
      <OurServicesTiles
        image={RangerImage}
        title="Hire Ranger"
        desc="Call a ranger to arrive at your current location
        to inspect and check your vehicle without
        having to move."
      />
      <OurServicesTiles
        image={Mechanic}
        title="Order Repair Specialist"
        desc="Call for specialists in case of specific repairs 
        and servicing of special vehicles or vehicle
        parts which require special handing"
      />
      <OurServicesTiles
        image={Lexus2}
        title="Hire transport conveyor"
        desc="Call for specialists in case of specific repairs 
        and servicing of special vehicles or vehicle
        parts which require special handing"
      />
      <OurServicesTiles
        image={wall}
        title="Fleet Management"
        desc="Have your cars registered with us? Get a total
        summary of the condition of your vehicles and
        progress of any ongoing work."
      />
      <OurServicesTiles
        image={Contact}
        title="Make Enquiries"
        desc="Contact the customer support team to make
        enquiries remotely without visiting a transol
        office"
      />
    </div>
  );
}

export default OurService;

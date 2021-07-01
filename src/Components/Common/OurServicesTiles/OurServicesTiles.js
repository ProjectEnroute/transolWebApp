import React from 'react';
import './OurServicesTiles.css';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

function OurServicesTiles(props) {
  const { image, title, desc } = props;
  return (
    <div className="ourServices_container" data-aos="zoom-out-right">
      <img src={image} className="ourServices_image" />
      <div className="ourServices_textDiv">
        {/* ----- Card title ----- */}
        <p className="ourSevices_title">{title}</p>
        {/* ----- Card description ----- */}
        <p className="ourSevices_desc">{desc}</p>
      </div>
      <div className="ourSevices_icon">
        <ArrowRightIcon style={{ fontSize: 80 }} />
      </div>
    </div>
  );
}

export default OurServicesTiles;

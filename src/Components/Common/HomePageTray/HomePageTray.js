import React from 'react';
import './HomePageTray.css';

function HomePageTray(props) {
  const { color, title } = props;
  return (
    <div className="HomeTrayContainer">
      <h1 style={{ color: color }}> |</h1>
      <p>{title}</p>
    </div>
  );
}

export default HomePageTray;

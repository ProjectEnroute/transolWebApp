import React from 'react';
import Header from '../../Common/Header/Header';
import './HireRangerPage.css';

function HireRanger() {
  return (
    <div>
      <Header />

      <center className="HireForm">
        <label> Hire a Ranger</label>
        <form>
          <input type="text" placeHolder="Name of Vehicle" />
          <input type="text" placeHolder="Car Type" />
          <input type="text" placeHolder="location" />
          <input type="submit" className="submit" />
        </form>
        <div>
          <h2>Add a map</h2>
        </div>
      </center>
    </div>
  );
}

export default HireRanger;

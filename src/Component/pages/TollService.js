import React, { Component } from "react";
import Header from "../common/Header.js";
import "./TollServices.css";

import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class TollService extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  render() {
    return (
      <div>
        <Header />
        <center className="TransolTollService">
          <h1>Transol Toll Services</h1>
          <h3>
            express toll service from anywhere in nigeria with just a click away
          </h3>
        </center>

        <center className="tollServicesForm">
          <label> Enter your location details</label>
          <form>
            <input type="text" placeHolder="Name" />
            <input type="text" placeHolder="Location" />
            <input type="text" placeHolder="Car Type" />
            <input type="submit" className="submit" />
          </form>
          <div>
            <h2>Add a map</h2>
          </div>
        </center>
        <center>
          <div style={{ height: "100vh", width: "100%" }}>
            <GoogleMapReact
              // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
        </center>
      </div>
    );
  }
}

export default TollService;

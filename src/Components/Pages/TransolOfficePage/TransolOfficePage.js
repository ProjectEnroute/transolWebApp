import React, { Component } from 'react';
import './TransolOfficePage.css';
import GoogleMapReact from 'google-map-react';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class TransolOffice extends Component {
  static defaultProps = {
    center: {
      lat: 0.0,
      lng: 0.0,
    },
    zoom: 5,
  };
  render() {
    return (
      <div>
        <center>
          <div style={{ height: '500px', width: '80%' }}>
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
        <center className="transolOffice">
          <h1>Visist the nearest Transol Office</h1>
          <br />
          <button>Show Route</button>
          <button>More Option</button>
        </center>
        <br />
        <div className="tranolOfficcContact">
          <>
            <h2>Contact: +234 XXXXXXXXX</h2>
            <h2>email: transol.transit@gmmail.com</h2>
          </>
          <div className="trasolOfficeSocialLinks">
            <h1>
              <FacebookIcon size="small" />
            </h1>
            <h1>
              {' '}
              <MailOutlineIcon size="small" />
            </h1>
            <h1>
              <InstagramIcon size='small"' />{' '}
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default TransolOffice;

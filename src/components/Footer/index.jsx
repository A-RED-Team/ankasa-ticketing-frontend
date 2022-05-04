import React from 'react';
import './style.css';

// import image
import logo from '../../assets/img/logo.png';
import google from '../../assets/img/google.png';
import app from '../../assets/img/app.png';
import facebook from '../../assets/img/facebook.png';
import twitter from '../../assets/img/twitter.png';
import instagram from '../../assets/img/instagram.png';
import youtube from '../../assets/img/youtube.png';
import map from '../../assets/img/map-pin.png';

const index = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 mb-2">
            <h5>
              <img src={logo} className="Ankasa Tickketing" /> Ankasa
            </h5>
            <p className="text-muted">
              Find your Flight and explore the <br /> world with us. We will take care of the rest
            </p>
          </div>
          <div className="col-sm-3 mb-2">
            <h5>Features</h5>
            <div className="feature">
              <p>Find Ticket</p>
              <p>My Booking</p>
              <p>Chat</p>
              <p>Notification</p>
            </div>
          </div>
          <div className="col-sm-3 mb-2">
            <h5>Download Ankasa App</h5>
            <img src={google} className="Google Play" />
            <img src={app} className="App Store" />
          </div>
          <div className="col-sm-3 mb-2">
            <h5>Follow Us</h5>
            <div className="info">
              <img src={facebook} alt="Facebook" />
              <img src={twitter} alt="Twitter" />
              <img src={instagram} alt="Instagram" />
              <img src={youtube} alt="Youtube" />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-6">
            <p>&copy; Ankasa. All Right Reserved.</p>
          </div>
          <div className="col-sm-6">
            <p>
              <img src={map} />
              Jakarta, Indonesia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;

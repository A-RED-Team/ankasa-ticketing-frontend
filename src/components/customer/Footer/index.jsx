import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '@fontsource/poppins';

// import image
import logo from '../../../assets/icons/illustration.svg';
import google from '../../../assets/images/apple-app-store-travel-awards-globestamp-7 2.svg';
import app from '../../../assets/images/apple-app-store-travel-awards-globestamp-7 3.svg';
import facebook from '../../../assets/icons/facebook.svg';
import twitter from '../../../assets/icons/twitter.svg';
import instagram from '../../../assets/icons/instagram.svg';
import youtube from '../../../assets/icons/youtube.svg';
import map from '../../../assets/icons/map-pin.svg';

const index = () => {
  return (
    <>
      <div className="footer d-none d-md-flex justify-content-around p-3 h-100 mt-5">
        <div className="d-flex flex-column bd-highlight">
          <div className="mb-auto bd-highlight">
            <img src={logo} alt="" />
            <span className="ms-3 fs-5 fw-bolder">Ankasa</span>
            <p className="mt-3 text-secondary">
              Find your Flight and explore the <br></br>
              world with us. We will take care of the rest
            </p>
          </div>
          <p className="text-secondary bd-highlight mt-6">© Ankasa. All Rights Reserved.</p>
        </div>
        <div className="">
          <p className="fw-bolder">Features</p>
          <p className="text-secondary">Find Ticket</p>
          <p className="text-secondary">My Booking</p>
          <p className="text-secondary">Chat</p>
          <p className="text-secondary">Notification</p>
        </div>
        <div className="d-flex flex-column">
          <p className="fw-bolder">Download Angkasa App</p>
          <img src={google} alt="" />
          <img className="mt-2" src={app} alt="" />
        </div>
        <div className="d-flex flex-column bd-highlight">
          <div className="mb-auto bd-highlight">
            <p className="fw-bolder">Follow Us</p>
            <div className="d-flex">
              <img className="" src={facebook} alt="" />
              <img className="mx-3" src={twitter} alt="" />
              <img className="" src={instagram} alt="" />
              <img className="mx-3" src={youtube} alt="" />
            </div>
          </div>
          <div className="mb-3">
            <img src={map} alt="" />
            <span className="text-secondary bd-highlight ms-2">Jakarta Indonesia</span>
          </div>
        </div>
      </div>
      {/* Make a Responsive */}
      <div className="footer d-md-none justify-content-around p-3 h-100 mt-5">
        <div className="d-flex flex-column bd-highlight">
          <div className="mb-auto bd-highlight">
            <img src={logo} alt="" />
            <span className="ms-3 fs-5 fw-bolder">Ankasa</span>
            <p className="mt-4 text-secondary lh-base">
              Find your Flight and explore the <br></br>
              world with us. We will take care of the rest
            </p>
          </div>
        </div>
        <p className="fw-bolder mt-3">Features</p>
        <div className="d-flex justify-content-between">
          <p className="text-secondary">Find Ticket</p>
          <p className="text-secondary">My Booking</p>
          <p className="text-secondary">Chat</p>
          <p className="text-secondary">Notification</p>
        </div>
        <p className="fw-bolder mt-3">Download Angkasa App</p>
        <div className="d-flex">
          <img src={google} alt="" style={{ width: '150px' }} />
          <img className="ms-3" src={app} alt="" style={{ width: '150px' }} />
        </div>
        <div className="d-flex flex-column bd-highlight">
          <div className="mb-auto bd-highlight mt-4">
            <p className="fw-bolder">Follow Us</p>
            <div className="d-flex">
              <img className="" src={facebook} alt="" />
              <img className="mx-3" src={twitter} alt="" />
              <img className="" src={instagram} alt="" />
              <img className="mx-3" src={youtube} alt="" />
            </div>
          </div>
          <div className="mt-4">
            <img src={map} alt="" />
            <span className="text-secondary bd-highlight ms-2">Jakarta Indonesia</span>
            <p className="text-secondary bd-highlight mt-3">© Ankasa. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;

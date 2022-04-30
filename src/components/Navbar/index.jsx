import React from 'react';
import './style.css';

import logo from '../../assets/img/logo.png';

const index = () => {
  return (
    <div className="navbar-all">
      <div className="container navbar-content">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <img src={logo} alt="Ankasa Ticketing" className="mr-2" />
          <a className="navbar-brand brand-name" href="#">
            Ankasa
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse nav-responsive" id="navbarSupportedContent">
            <div className="navbar-nav m-auto main-navbar">
              <div className="mr-3">
                <div className="form">
                  {/* <button>1</button> */}
                  <input
                    type="text"
                    className="form-control-sm mr-sm-2 search-form"
                    placeholder="Where you want to go ?"
                  />
                </div>
              </div>
              <li className="nav-item btn-route ml-2">
                <a className="nav-link active" aria-current="page" href="#">
                  Find Ticket
                </a>
              </li>
              <li className="nav-item btn-route ml-2">
                <a className="nav-link" href="#">
                  My Booking
                </a>
              </li>
            </div>
            <button className="btn btn-primary btn-signin">Sign Up</button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default index;

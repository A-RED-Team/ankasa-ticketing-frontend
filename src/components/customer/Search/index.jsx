import React from 'react';
import './style.css';

const index = () => {
  return (
    <div className="search-page">
      <div className="search">
        <p>Hey,</p>
        <p>Where you want to go?</p>
        <div className="recent-search">
          <p>Recentrly Searched</p>
        </div>
        <div className="search-route">
          <div className="route-box">
            <p className="text-secondary">From</p>
            <p className="route">
              <button className="btn font-weight-vold">Medan</button>
            </p>
            <p className="text-secondary">Indonesia</p>
          </div>
          <div className="route-box">
            <p className="text-secondary">From</p>
            <p className="route">
              <button className="btn font-weight-vold">Medan</button>
            </p>
            <p className="text-secondary">Indonesia</p>
          </div>
        </div>
        <div className="button-typetrip">
          <button className="btn-main" style={{ backgroundColor: '#2395FF', color: 'white' }}>
            One Way
          </button>
          <button className="btn-main" style={{ backgroundColor: '#F0F0F0', color: '#595959' }}>
            Round Trip
          </button>
        </div>
        <div className="departure mt-4 text-secondary">
          <p>Departure</p>
        </div>
        <div className="person">
          <p className="text-secondary mt-4">How many person?</p>
          <div className="person-select">
            <select className="form-select mb-3 mr-2">
              <option value="null" disabled="disabled" selected>
                Child
              </option>
              <option value="1" disabled>
                1
              </option>
            </select>
            <select className="form-select mb-3 mr-2">
              <option value="null" disabled="disabled" selected>
                Adult
              </option>
              <option value="1" disabled>
                1
              </option>
            </select>
          </div>
        </div>
        <div className="class-select">
          <p className="text-secondary">Which class do you want?</p>
        </div>
        <button className="btn-submit mt-4">Search Flight</button>
      </div>
    </div>
  );
};

export default index;

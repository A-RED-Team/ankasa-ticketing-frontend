import React from 'react';
import './style.css';

import back from '../../assets/icons/btn-back.svg';
import arrow from '../../assets/icons/arrow.svg';
// import planeblack from '../../assets/icons/one-way-black.svg';
// import planewhite from '../../assets/icons/one-way-white.svg';

import go from '../../assets/icons/white-arrow.svg';

const index = () => {
  return (
    <section className="search">
      <div className="search-container">
        <p>Hey,</p>
        <p>Where you want to go?</p>
        <div className="search-wrapper mt-4">
          <p>Recentrly Searched</p>
          <img src={back} alt="Back" />
        </div>
        <div className="search-content">
          <div className="search-box">
            <p className="text-secondary">From</p>
            <div className="search-city">
              <button className="font-weight-bold">Medan</button>
            </div>
            <p className="text-secondary">Indonesia</p>
          </div>
          <img src={arrow} alt="" />
          <div className="search-box">
            <p className="text-secondary">To</p>
            <div className="search-city">
              <button className="font-weight-bold">Tokyo</button>
            </div>
            <p className="text-secondary">Japan</p>
          </div>
        </div>
        <div className="search-type">
          <button className="one-way">
            <span>One Way</span>
          </button>
          <button className="round-trip">
            <span>Round Trip</span>
          </button>
        </div>
        <div className="departure mt-4 text-secondary">
          <p>Departure</p>
          <div className="form-group">
            <input
              type="date"
              className="form-control"
              name=""
              id=""
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>
        <div className="mt-4 text-secondary">
          <p>How many person?</p>
          <div className="search-select">
            <select className="form-check mb-3">
              <option value="null" disabled="disabled" selected>
                Child
              </option>
              <option value="1">1 Child</option>
              <option value="1">2 Child</option>
              <option value="1">3 Child</option>
              <option value="1">4 Child</option>
              <option value="1">5 Child</option>
              <option value="1">6 Child</option>
              <option value="1">7 Child</option>
              <option value="1">8 Child</option>
            </select>
            <select className="form-check mb-3">
              <option value="null" disabled="disabled" selected>
                Adult
              </option>
              <option value="1">1 Adult</option>
              <option value="1">2 Adult</option>
              <option value="1">3 Adult</option>
              <option value="1">4 Adult</option>
              <option value="1">5 Adult</option>
              <option value="1">6 Adult</option>
              <option value="1">7 Adult</option>
              <option value="1">8 Adult</option>
            </select>
          </div>
        </div>
        <div>
          <p className="mb-3">Which class do you want?</p>
          <div className="d-flex">
            <input type="radio" name="radio" id="radio1" />
            <label htmlFor="radio1">Economy</label>
            <input type="radio" name="radio" id="radio2" />
            <label htmlFor="radio2">Business</label>
            <input type="radio" name="radio" id="radio3" />
            <label htmlFor="radio3">First Class</label>
          </div>
        </div>
        <button className="search-button mt-4">
          Search Flight
          <img src={go} alt="" />
        </button>
      </div>
    </section>
  );
};

export default index;

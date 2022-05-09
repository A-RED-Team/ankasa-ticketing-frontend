import React from 'react';
import styled from 'styled-components';
import './style.css';

import back from '../../../assets/icons/btn-back.svg';
import arrow from '../../../assets/icons/arrow.svg';
import plane from '../../../assets/icons/one-way.svg';
import select from '../../../assets/icons/iconright.svg';
import '../../../utils/datetimepicker';

// import go from '../../../assets/icons/white-arrow.svg';

const Section = styled.section`
  position: absolute;
  top: 40px;
  right: 250px;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  height: 750px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  z-index: 99;
`;

const Search = styled.div`
  width: 400px;
  height: 100%;
  background-color: #fff;
  margin-top: 100px;
  box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
  border-radius: 12px;
  padding: 30px;

  p:nth-child(2) {
    font-size: 20px;
    margin-top: -10px;
  }
`;

const Recent = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    color: var(--text-blue);
  }

  img {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

const Route = styled.div`
  margin-top: 15px;
  box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p:nth-child(1),
  p:nth-child(3) {
    font-size: 15px !important;
    font-weight: 100;
  }
`;

const Box = styled.div`
  height: 110px;
  padding: 6px 15px;

  &:nth-child(3) {
    text-align: right;
  }
`;

const City = styled.div`
  width: 100px;
  height: 30px;
  margin-top: -10px;
  margin-bottom: 10px;

  button {
    font-size: 20px !important;
    padding: 0;
    border: none;
    background-color: transparent;
    color: rgb(63, 63, 63);
  }

  button:hover {
    color: #2395ff;
  }

  button:active {
    background-color: transparent !important;
    color: #2395ff !important;
  }
`;

const Type = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;

  button {
    border: 0;
    border-radius: 5px;
    padding: 15px 25px;
    font-weight: 600;
  }

  button:nth-child(2) {
    border: #ab8585;
  }
`;

const Select = styled.div`
  display: flex;
  margin-top: -8px;
  gap: 25px;

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    background: transparent;
    background-image: url(${select});
    background-repeat: no-repeat;
    background-position-x: 90%;
    background-position-y: 20px;
    border: 1px solid #dfdfdf;
    border-radius: 7px;
    margin-right: 2rem;
    padding: 1rem;
    color: var(--text-black);
  }
`;

const index = () => {
  return (
    <Section>
      <Search>
        <p>Hey,</p>
        <p>Where you want to go?</p>
        <Recent className="mt-4">
          <p>Recentrly Searched</p>
          <img src={back} alt="Back" />
        </Recent>
        <Route>
          <Box>
            <p className="text-secondary">From</p>
            <City>
              <button className="btn font-weight-bold">Medan</button>
            </City>
            <p className="text-secondary">Indonesia</p>
          </Box>
          <img src={arrow} alt="" />
          <Box>
            <p className="text-secondary">To</p>
            <City>
              <button className="btn font-weight-bold">Tokyo</button>
            </City>
            <p className="text-secondary">Japan</p>
          </Box>
        </Route>
        <Type>
          <button>
            <img src={plane} alt="One way" className="mr-2" />
            One Way
          </button>
          <button>
            <img src={plane} alt="Round trip" className="mr-2" />
            Round Trip
          </button>
        </Type>
        <div className="departure mt-4 text-secondary">
          <p>Departure</p>
          <div className="form-group">
            <div className="input-group date" id="datetimepicker1" data-target-input="nearest">
              <input
                type="text"
                className="form-control datetimepicker-input"
                data-target="#datetimepicker1"
              />
              <div
                className="input-group-append"
                data-target="#datetimepicker1"
                data-toggle="datetimepicker">
                <div className="input-group-text">
                  <i className="fa fa-calendar"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 text-secondary">
          <p>How many person?</p>
          <Select>
            <select className="form-select mb-3 mr-2">
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
            <select className="form-select mb-3 mr-2">
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
          </Select>
        </div>
        <div className="class-select">
          <p className="text-secondary mb-3">Which class do you want?</p>
          <div className="position-relative d-flex space-between bg-dark">
            <input type="radio" name="radio" id="radio1" />
            <label htmlFor="radio1">Economy</label>
            <input type="radio" name="radio" id="radio2" />
            <label htmlFor="radio2">Business</label>
            <input type="radio" name="radio" id="radio3" />
            <label htmlFor="radio3">First Class</label>
          </div>
        </div>
        <button className="btn-submit mt-4">Search Flight</button>
      </Search>
    </Section>
  );
};

export default index;

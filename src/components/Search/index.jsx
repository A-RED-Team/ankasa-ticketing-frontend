import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllCities } from '../../redux/actions/city';

import './style.css';
import swal from 'sweetalert2';
import back from '../../assets/icons/btn-back.svg';
import arrow from '../../assets/icons/arrow.svg';
// import planeblack from '../../assets/icons/one-way-black.svg';
// import planewhite from '../../assets/icons/one-way-white.svg';

import go from '../../assets/icons/white-arrow.svg';

const index = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allCities = useSelector((state) => state.allCities);
  const [deptCity, setDeptCity] = useState('');
  const [arrCity, setArrCity] = useState('');
  const [adult, setAdult] = useState('1');
  const [child, setChild] = useState('0');
  const [oneOrRoundTrip, setOneOrRoundTrip] = useState('');
  const [deptDate, setDeptDate] = useState('');
  const [flightClass, setFlightClass] = useState('');
  const onSearch = (e) => {
    e.preventDefault();
    if (!deptCity) {
      swal.fire({
        title: 'Error!',
        text: `Select your departure city!`,
        icon: 'warning'
      });
    } else if (!arrCity) {
      swal.fire({
        title: 'Error!',
        text: `Select your arrival city!`,
        icon: 'warning'
      });
    } else if (!deptDate) {
      swal.fire({
        title: 'Error!',
        text: `Select your departure date!`,
        icon: 'warning'
      });
    } else {
      return navigate(
        `/booking?deptCity=${deptCity}&arrCity=${arrCity}&deptDate=${deptDate}&flightClass=${flightClass}&oneOrRound=${oneOrRoundTrip}&adult=${adult}&child=${child}`
      );
    }
  };
  useEffect(() => {
    dispatch(getAllCities());
  }, []);
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

            <select
              className="font-weight-bold form-control w-auto"
              name="deptCity"
              style={{ border: 'none' }}
              onChange={(e) => {
                setDeptCity(e.target.value);
              }}
              value={deptCity}>
              <option value="">Dept. City</option>
              {allCities.isLoading ? (
                <option value="loading">Loading</option>
              ) : allCities.isError ? (
                <option value="error">Error</option>
              ) : allCities.data ? (
                allCities.data.map((e, i) => {
                  return (
                    <option key={i} value={e.city_name}>
                      {`${e.city_name}`}
                    </option>
                  );
                })
              ) : (
                <option value="error">Error</option>
              )}
            </select>
          </div>
          <img
            className="ml-auto mr-auto mt-3"
            src={arrow}
            alt=""
            onClick={() => {
              setDeptCity(arrCity);
              setArrCity(deptCity);
            }}
          />
          <div className="search-box">
            <p className="text-secondary">To</p>

            <select
              className="font-weight-bold form-control w-auto"
              style={{ border: 'none' }}
              name="arrCity"
              onChange={(e) => {
                setArrCity(e.target.value);
              }}
              value={arrCity}>
              <option value="">Arr. City</option>
              {allCities.isLoading ? (
                <option value="loading">Loading</option>
              ) : allCities.isError ? (
                <option value="error">Error</option>
              ) : allCities.data ? (
                allCities.data.map((e, i) => {
                  return (
                    <option key={i} value={e.city_name}>
                      {`${e.city_name}`}
                    </option>
                  );
                })
              ) : (
                <option value="error">Error</option>
              )}
            </select>
          </div>
        </div>
        <div className="search-type">
          <button
            className="one-way"
            onClick={() => {
              setOneOrRoundTrip('0');
            }}>
            <span>One Way</span>
          </button>
          <button
            className="round-trip"
            onClick={() => {
              setOneOrRoundTrip('1');
            }}>
            <span>Round Trip</span>
          </button>
        </div>
        <div className="search-departure mt-4 text-secondary">
          <p>Departure</p>
          <div className="form-group">
            <input
              type="date"
              onChange={(e) => {
                setDeptDate(e.target.value);
              }}
              className="form-control"
              name=""
              id=""
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>
        <div className="search-person mt-4 text-secondary">
          <p>How many person?</p>
          <div className="search-select">
            <select
              className="form-check mb-3"
              onChange={(e) => {
                setChild(e.target.value);
              }}>
              <option value="null" disabled="disabled" selected>
                Child
              </option>
              <option value="1">1 Child</option>
              <option value="2">2 Child</option>
              <option value="3">3 Child</option>
              <option value="4">4 Child</option>
              <option value="5">5 Child</option>
              <option value="6">6 Child</option>
              <option value="7">7 Child</option>
              <option value="8">8 Child</option>
              <option value="9">9 Child</option>
              <option value="10">10 Child</option>
            </select>
            <select
              className="form-check mb-3"
              onChange={(e) => {
                setAdult(e.target.value);
              }}>
              <option value="null" disabled="disabled" selected>
                Adult
              </option>
              <option value="1">1 Adult</option>
              <option value="2">2 Adult</option>
              <option value="3">3 Adult</option>
              <option value="4">4 Adult</option>
              <option value="5">5 Adult</option>
              <option value="6">6 Adult</option>
              <option value="7">7 Adult</option>
              <option value="8">8 Adult</option>
              <option value="9">9 Adult</option>
              <option value="10">10 Adult</option>
            </select>
          </div>
        </div>
        <div>
          <p className="mb-3">Which class do you want?</p>
          <div className="search-radio">
            <input
              type="radio"
              name="radio"
              id="radio1"
              onChange={() => {
                setFlightClass('0');
              }}
            />
            <label htmlFor="radio1">Economy</label>
            <input
              type="radio"
              name="radio"
              id="radio2"
              onChange={() => {
                setFlightClass('1');
              }}
            />
            <label htmlFor="radio2">Business</label>
            <input
              type="radio"
              name="radio"
              id="radio3"
              onChange={() => {
                setFlightClass('3');
              }}
            />
            <label htmlFor="radio3">First Class</label>
          </div>
        </div>
        <button
          className="search-button mt-4"
          onClick={(e) => {
            onSearch(e);
          }}>
          Search Flight
          <img src={go} alt="" />
        </button>
      </div>
    </section>
  );
};

export default index;

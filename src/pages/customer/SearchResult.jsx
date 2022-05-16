import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import moment from 'moment';
import { getAllFlight } from '../../redux/actions/flight';
import { getAllAirlines } from '../../redux/actions/airline';
import { getAllCities } from '../../redux/actions/city';
import styled from 'styled-components';
import ContentLoader from 'react-content-loader';
import 'bootstrap/dist/css/bootstrap.min.css';
import searchStyle from '../../assets/styles/searchResult.module.css';
// import 'bootstrap-input-spinner/src/bootstrap-input-spinner';
import style from '../../assets/styles/input.module.css';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import bg from '../../assets/images/vector 2.png';
import bgIcon from '../../assets/images/bgicon.svg';

// import garuda from '../../assets/images/garuda.png';
// import lion from '../../assets/images/lion-air.png';
// import airAsia from '../../assets/images/air-asia.png';

import flightIconSmall from '../../assets/images/flightIconSmall.svg';

const Section = styled.section`
  font-family: 'Poppins', 'sans-serif';
  margin-top: 90px;
`;
const Header = styled.div`
  background: #2395ff url(${bg});
  width: 100%;
  height: 176px;
  border-radius: 0px 0px 30px 30px;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
`;

const SearchResult = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allFlight = useSelector((state) => state.allFlight);
  const allAirlines = useSelector((state) => state.getAirlines);
  const allCities = useSelector((state) => state.allCities);
  const [query] = useSearchParams();
  const queryMode = query.get('mode') === 'DESC' ? 'DESC' : 'ASC';
  const queryDeptCity = query.get('deptCity') ? query.get('deptCity') : '';
  const queryArrCity = query.get('arrCity') ? query.get('arrCity') : '';
  const queryDeptDate = query.get('deptDate') ? query.get('deptDate') : '';
  const queryFlightClass = query.get('flightClass') ? query.get('flightClass') : '';
  const queryOneOrRoundTrip = query.get('oneOrRound') ? query.get('oneOrRound') : '';
  const queryChild = query.get('child') ? query.get('child') : '0';
  const queryAdult = query.get('adult') ? query.get('adult') : '1';
  const queryAirlinesName = query.get('airlinesName') ? query.get('airlinesName') : '';
  const queryLuggage = query.get('luggage') ? query.get('luggage') : '';
  const queryMeal = query.get('meal') ? query.get('meal') : '';
  const queryWifi = query.get('wifi') ? query.get('wifi') : '';
  const queryDirect = query.get('direct') ? query.get('direct') : '';
  const queryTransit = query.get('transit') ? query.get('transit') : '';
  const queryMoreTransit = query.get('moreTransit') ? query.get('moreTransit') : '';
  const queryDeptTimeFrom = query.get('deptTimeFrom') ? query.get('deptTimeFrom') : '';
  const queryDeptTimeTo = query.get('deptTimeTo') ? query.get('deptTimeTo') : '';
  const queryArrTimeFrom = query.get('arrTimeFrom') ? query.get('arrTimeFrom') : '';
  const queryArrTimeTo = query.get('arrTimeTo') ? query.get('arrTimeTo') : '';
  const [mode, setMode] = useState(queryMode);
  const [deptCity, setDeptCity] = useState(queryDeptCity);
  const [arrCity, setArrCity] = useState(queryArrCity);
  const [deptDate, setDeptDate] = useState(queryDeptDate);
  const [flightClass, setFlightClass] = useState(queryFlightClass);
  const [oneOrRoundTrip, setOneOrRoundTrip] = useState(queryOneOrRoundTrip);
  const [child, setChild] = useState(queryChild);
  const [adult, setAdult] = useState(queryAdult);
  const [airlinesName, setAirlinesName] = useState(queryAirlinesName);
  const [luggage, setLuggage] = useState(queryLuggage);
  const [meal, setMeal] = useState(queryMeal);
  const [wifi, setWifi] = useState(queryWifi);
  const [direct, setDirect] = useState(queryDirect);
  const [transit, setTransit] = useState(queryTransit);
  const [moreTransit, setMoreTransit] = useState(queryMoreTransit);
  const [deptTimeFrom, setDeptTimeFrom] = useState(queryDeptTimeFrom);
  const [deptTimeTo, setDeptTimeTo] = useState(queryDeptTimeTo);
  const [arrTimeFrom, setArrTimeFrom] = useState(queryArrTimeFrom);
  const [arrTimeTo, setArrTimeTo] = useState(queryArrTimeTo);
  const search = (e) => {
    e.preventDefault();
    dispatch(
      getAllFlight(
        mode,
        deptCity,
        arrCity,
        deptDate,
        flightClass,
        oneOrRoundTrip,
        child,
        adult,
        airlinesName,
        luggage,
        meal,
        wifi,
        direct,
        transit,
        moreTransit,
        deptTimeFrom,
        deptTimeTo,
        arrTimeFrom,
        arrTimeTo
      )
    );
    return navigate(
      `?mode=${mode}&deptCity=${deptCity}&arrCity=${arrCity}&deptDate=${deptDate}&flightClass=${flightClass}&oneOrRound=${oneOrRoundTrip}&adult=${adult}&child=${child}&airlinesName=${airlinesName}&luggage=${luggage}&meal=${meal}&wifi=${wifi}&direct=${direct}&transit=${transit}&moreTransit=${moreTransit}&deptTimeFrom=${deptTimeFrom}&deptTimeTo=${deptTimeTo}&arrTimeFrom=${arrTimeFrom}&arrTimeTo=${arrTimeTo}`
    );
  };
  useEffect(() => {
    dispatch(
      getAllFlight(
        mode,
        deptCity,
        arrCity,
        deptDate,
        flightClass,
        oneOrRoundTrip,
        child,
        adult,
        airlinesName,
        luggage,
        meal,
        wifi,
        direct,
        transit,
        moreTransit,
        deptTimeFrom,
        deptTimeTo,
        arrTimeFrom,
        arrTimeTo
      )
    );
    dispatch(getAllAirlines());
    dispatch(getAllCities());
    setDeptCity(queryDeptCity);
    setArrCity(queryArrCity);
  }, []);
  const token = localStorage.getItem('token');
  const [activeTab, setActiveTab] = useState(false);
  // const classActive = activeTab ? 'active' : 'nonactive';
  return (
    <>
      <Navbar isLogin={token} />
      <Section className="">
        <Header className={`no-gutters pl-5 text-white ${searchStyle.header}`}>
          <div
            style={{
              width: '10%',
              display: 'flex'
            }}>
            <img className={searchStyle.imagePlane} src={bgIcon} />
          </div>
          <div className={searchStyle.headerMain}>
            <div className={searchStyle.mainFromTo}>
              <p className={searchStyle.mainFrom}>From</p>
              <p className={searchStyle.mainTo}>To</p>
            </div>
            <div
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                paddingBottom: '10px'
              }}>
              <select
                name="deptCity"
                onChange={(e) => {
                  setDeptCity(e.target.value);
                }}
                value={deptCity}
                style={{
                  marginLeft: '0px',
                  border: 'none',
                  backgroundColor: '#2395FF',
                  color: '#FFFFFF'
                }}>
                {allCities.isLoading ? (
                  <option value="loading">Loading</option>
                ) : allCities.isError ? (
                  <option value="error">Error</option>
                ) : allCities.data ? (
                  allCities.data.map((e, i) => {
                    return (
                      <option key={i} value={e.city_name}>
                        {e.city_name}
                      </option>
                    );
                  })
                ) : (
                  <option value="error">Error</option>
                )}
              </select>
              <i
                className={`fa-solid fa-right-left ${style.logout}`}
                onClick={() => {
                  setDeptCity(arrCity);
                  setArrCity(deptCity);
                }}
                style={{ marginLeft: 'auto', marginRight: 'auto' }}></i>
              <select
                name="arrCity"
                onChange={(e) => {
                  setArrCity(e.target.value);
                }}
                value={arrCity}
                style={{
                  marginLeft: '0px',
                  border: 'none',
                  backgroundColor: '#2395FF',
                  color: '#FFFFFF'
                }}>
                {allCities.isLoading ? (
                  <option value="loading">Loading</option>
                ) : allCities.isError ? (
                  <option value="error">Error</option>
                ) : allCities.data ? (
                  allCities.data.map((e, i) => {
                    return (
                      <option key={i} value={e.city_name}>
                        {e.city_name}
                      </option>
                    );
                  })
                ) : (
                  <option value="error">Error</option>
                )}
              </select>
            </div>
            <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
              <small style={{ marginLeft: '0px' }}>
                {moment(deptDate, 'YYYY-MM-DD').format('dddd, DD MMMM YY')}
              </small>
              <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>&#9679;</div>
              <small>{parseInt(adult) + parseInt(child)} Passenger</small>
              <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>&#9679;</div>
              <small style={{ marginRight: '0px' }}>
                {flightClass === '0'
                  ? 'Economy'
                  : flightClass === '1'
                  ? 'Business Class'
                  : flightClass === '2'
                  ? 'First Class'
                  : 'All Class'}
              </small>
            </div>
          </div>
          <div className={searchStyle.divChangeSearch}>
            <h6
              className={`${searchStyle.changeSearch} ${style.logout}`}
              onClick={(e) => {
                search(e);
              }}>
              Change Search
            </h6>
          </div>
          <div
            onClick={() => setActiveTab(!activeTab)}
            className={`${searchStyle.divFilterSearch}`}>
            <h6 className={`${searchStyle.filterSearch} ${style.logout}`}>Filter Search</h6>
          </div>
        </Header>
        <div className={`container-fluid ${searchStyle.divMainContent}`}>
          {/* Start Left Filter */}
          <div className={`${searchStyle.leftContent}`}>
            <div
              style={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                marginBottom: '25px'
              }}>
              <h5 style={{ marginLeft: '0px', fontWeight: '600', fontSize: '24px' }}>Filter</h5>
              <small
                onClick={() => {
                  document.getElementById('reset').click();
                }}
                className={style.logout}
                style={{
                  marginLeft: 'auto',
                  marginRight: '0px',
                  color: '#2395FF',
                  fontWeight: '600',
                  fontSize: '16px'
                }}>
                Reset
              </small>
            </div>
            <div
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#FFFFFF',
                borderRadius: '15px',
                padding: '30px'
              }}>
              <form>
                <input type="reset" id="reset" style={{ display: 'none' }} />
                <div style={{ display: 'flex', marginBottom: '20px' }}>
                  <h6 style={{ fontSize: '14px', marginTop: 'auto', marginBottom: 'auto' }}>
                    Date
                  </h6>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    style={{
                      marginLeft: 'auto',
                      marginRight: '0px',
                      border: '2px solid #2395FF',
                      borderRadius: '5px'
                    }}
                    onChange={(e) => {
                      setDeptDate(e.target.value);
                    }}
                    value={deptDate}
                  />
                </div>
                <hr
                  style={{
                    marginTop: '0px',
                    height: '1px',
                    color: '#E5E5E5',
                    marginBottom: '20px'
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    marginBottom: '20px',
                    alignItems: 'center'
                  }}>
                  <h6 style={{ fontSize: '14px', marginTop: 'auto', marginBottom: 'auto' }}>
                    Adult
                  </h6>
                  <input
                    type="number"
                    style={{
                      marginLeft: 'auto',
                      marginRight: '10px',
                      width: '50px',
                      border: '2px solid #2395FF',
                      borderRadius: '5px'
                    }}
                    onChange={(e) => {
                      setAdult(e.target.value);
                    }}
                    min="1"
                    value={adult}
                  />
                  <h6 style={{ fontSize: '14px', marginTop: 'auto', marginBottom: 'auto' }}>
                    Child
                  </h6>
                  <input
                    type="number"
                    style={{
                      marginLeft: 'auto',
                      marginRight: '0px',
                      width: '50px',
                      border: '2px solid #2395FF',
                      borderRadius: '5px'
                    }}
                    onChange={(e) => {
                      setChild(e.target.value);
                    }}
                    min="0"
                    value={child}
                  />
                </div>
                <hr
                  style={{
                    marginTop: '0px',
                    height: '1px',
                    color: '#E5E5E5',
                    marginBottom: '20px'
                  }}
                />
                <div style={{ display: 'flex', marginBottom: '20px', alignItems: 'center' }}>
                  <h6 style={{ fontSize: '14px' }}>One Way</h6>
                  <input
                    type="radio"
                    id="oneway"
                    name="route"
                    onChange={() => {
                      setOneOrRoundTrip('0');
                    }}
                  />
                  <label
                    htmlFor="oneway"
                    style={{ fontSize: '14px', marginLeft: 'auto', marginRight: '10px' }}></label>
                  <h6 style={{ fontSize: '14px' }}>Round Trip</h6>
                  <input
                    type="radio"
                    id="rtrip"
                    name="route"
                    onChange={() => {
                      setOneOrRoundTrip('1');
                    }}
                  />
                  <label
                    htmlFor="rtrip"
                    style={{ fontSize: '14px', marginLeft: 'auto', marginRight: '0px' }}></label>
                </div>
                <hr
                  style={{
                    marginTop: '0px',
                    height: '1px',
                    color: '#E5E5E5',
                    marginBottom: '20px'
                  }}
                />
                <div style={{ display: 'flex', marginBottom: '30px' }}>
                  <h6 style={{ fontSize: '16px', fontWeight: '600' }}>Flight Class</h6>
                  <i
                    className="fa-solid fa-angle-up"
                    style={{ marginLeft: 'auto', marginRight: '0px', color: '#2395FF' }}></i>
                </div>
                <div style={{ display: 'flex', marginBottom: '20px' }}>
                  <h6 style={{ fontSize: '14px' }}>Economy</h6>
                  <input
                    type="radio"
                    id="economy"
                    name="classFlight"
                    onChange={() => {
                      setFlightClass('0');
                    }}
                  />
                  <label
                    htmlFor="economy"
                    style={{ fontSize: '14px', marginLeft: 'auto', marginRight: '0px' }}></label>
                </div>
                <div style={{ display: 'flex', marginBottom: '20px' }}>
                  <h6 style={{ fontSize: '14px' }}>Business Class</h6>
                  <input
                    type="radio"
                    id="business"
                    name="classFlight"
                    onChange={() => {
                      setFlightClass('1');
                    }}
                  />
                  <label
                    htmlFor="business"
                    style={{ fontSize: '14px', marginLeft: 'auto', marginRight: '0px' }}></label>
                </div>
                <div style={{ display: 'flex', marginBottom: '20px' }}>
                  <h6 style={{ fontSize: '14px' }}>First Class</h6>
                  <input
                    type="radio"
                    id="first"
                    name="classFlight"
                    onChange={() => {
                      setFlightClass('2');
                    }}
                  />
                  <label
                    htmlFor="first"
                    style={{ fontSize: '14px', marginLeft: 'auto', marginRight: '0px' }}></label>
                </div>
                <hr
                  style={{
                    marginTop: '0px',
                    height: '1px',
                    color: '#E5E5E5',
                    marginBottom: '20px'
                  }}
                />
                <div style={{ display: 'flex', marginBottom: '30px' }}>
                  <h6 style={{ fontSize: '16px', fontWeight: '600' }}>Transit</h6>
                  <i
                    className="fa-solid fa-angle-up"
                    style={{ marginLeft: 'auto', marginRight: '0px', color: '#2395FF' }}></i>
                </div>
                <div style={{ display: 'flex', marginBottom: '20px' }}>
                  <h6 style={{ fontSize: '14px' }}>Direct</h6>
                  <input
                    type="radio"
                    id="direct"
                    name="direct"
                    onChange={() => {
                      setDirect('1');
                      setTransit('0');
                      setMoreTransit('0');
                    }}
                  />
                  <label
                    htmlFor="direct"
                    style={{ fontSize: '14px', marginLeft: 'auto', marginRight: '0px' }}></label>
                </div>
                <div style={{ display: 'flex', marginBottom: '20px', alignItems: 'center' }}>
                  <h6 style={{ fontSize: '14px' }}>Transit</h6>
                  <input
                    type="radio"
                    id="transit"
                    name="direct"
                    onChange={() => {
                      setDirect('0');
                      setTransit('1');
                      setMoreTransit('0');
                    }}
                  />
                  <label
                    htmlFor="transit"
                    style={{ fontSize: '14px', marginLeft: 'auto', marginRight: '0px' }}></label>
                </div>
                <div style={{ display: 'flex', marginBottom: '20px', alignItems: 'center' }}>
                  <h6 style={{ fontSize: '14px' }}>Transit 2+</h6>
                  <input
                    type="radio"
                    id="transit2"
                    name="direct"
                    onChange={() => {
                      setDirect('0');
                      setTransit('1');
                      setMoreTransit('1');
                    }}
                  />
                  <label
                    htmlFor="transit2"
                    style={{ fontSize: '14px', marginLeft: 'auto', marginRight: '0px' }}></label>
                </div>
                <hr
                  style={{
                    marginTop: '0px',
                    height: '1px',
                    color: '#E5E5E5',
                    marginBottom: '20px'
                  }}
                />
                <div style={{ display: 'flex', marginBottom: '30px' }}>
                  <h6 style={{ fontSize: '16px', fontWeight: '600' }}>Facilities</h6>
                  <i
                    className="fa-solid fa-angle-up"
                    style={{ marginLeft: 'auto', marginRight: '0px', color: '#2395FF' }}></i>
                </div>
                <div style={{ display: 'flex', marginBottom: '20px' }}>
                  <h6 style={{ fontSize: '14px' }}>Luggage</h6>
                  <input
                    type="checkbox"
                    name="luggage"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setLuggage('1');
                      } else {
                        setLuggage('');
                      }
                    }}
                    style={{ marginLeft: 'auto', marginRight: '0px' }}
                  />
                </div>
                <div style={{ display: 'flex', marginBottom: '20px' }}>
                  <h6 style={{ fontSize: '14px' }}>In-Flight Meal</h6>
                  <input
                    type="checkbox"
                    name="meal"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setMeal('1');
                      } else {
                        setMeal('');
                      }
                    }}
                    style={{ marginLeft: 'auto', marginRight: '0px' }}
                  />
                </div>
                <div style={{ display: 'flex', marginBottom: '20px' }}>
                  <h6 style={{ fontSize: '14px' }}>Wi-fi</h6>
                  <input
                    type="checkbox"
                    name="wifi"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setWifi('1');
                      } else {
                        setWifi('');
                      }
                    }}
                    style={{ marginLeft: 'auto', marginRight: '0px' }}
                  />
                </div>
                <hr
                  style={{
                    marginTop: '0px',
                    height: '1px',
                    color: '#E5E5E5',
                    marginBottom: '20px'
                  }}
                />
                <div style={{ display: 'flex', marginBottom: '30px' }}>
                  <h6 style={{ fontSize: '16px', fontWeight: '600' }}>Departure Time</h6>
                  <i
                    className="fa-solid fa-angle-up"
                    style={{ marginLeft: 'auto', marginRight: '0px', color: '#2395FF' }}></i>
                </div>
                <div style={{ display: 'flex', marginBottom: '20px' }}>
                  <h6 style={{ fontSize: '14px' }}>00:00 - 06:00</h6>
                  <input
                    type="radio"
                    id="deptime1"
                    name="depttime"
                    onChange={() => {
                      setDeptTimeFrom('00:00:00');
                      setDeptTimeTo('06:00:00');
                    }}
                  />
                  <label
                    htmlFor="deptime1"
                    style={{ fontSize: '14px', marginLeft: 'auto', marginRight: '0px' }}></label>
                </div>
                <div style={{ display: 'flex', marginBottom: '20px' }}>
                  <h6 style={{ fontSize: '14px' }}>06:00 - 12:00</h6>
                  <input
                    type="radio"
                    id="deptime2"
                    name="depttime"
                    onChange={() => {
                      setDeptTimeFrom('06:00:00');
                      setDeptTimeTo('12:00:00');
                    }}
                  />
                  <label
                    htmlFor="deptime2"
                    style={{ fontSize: '14px', marginLeft: 'auto', marginRight: '0px' }}></label>
                </div>
                <div style={{ display: 'flex', marginBottom: '20px' }}>
                  <h6 style={{ fontSize: '14px' }}>12:00 - 18:00</h6>
                  <input
                    type="radio"
                    id="deptime3"
                    name="depttime"
                    onChange={() => {
                      setDeptTimeFrom('12:00:00');
                      setDeptTimeTo('18:00:00');
                    }}
                  />
                  <label
                    htmlFor="deptime3"
                    style={{ fontSize: '14px', marginLeft: 'auto', marginRight: '0px' }}></label>
                </div>
                <div style={{ display: 'flex', marginBottom: '20px' }}>
                  <h6 style={{ fontSize: '14px' }}>18:00 - 24:00</h6>
                  <input
                    type="radio"
                    id="deptime4"
                    name="depttime"
                    onChange={() => {
                      setDeptTimeFrom('18:00:00');
                      setDeptTimeTo('24:00:00');
                    }}
                  />
                  <label
                    htmlFor="deptime4"
                    style={{ fontSize: '14px', marginLeft: 'auto', marginRight: '0px' }}></label>
                </div>
                <hr
                  style={{
                    marginTop: '0px',
                    height: '1px',
                    color: '#E5E5E5',
                    marginBottom: '20px'
                  }}
                />
                <div style={{ display: 'flex', marginBottom: '30px' }}>
                  <h6 style={{ fontSize: '16px', fontWeight: '600' }}>Time Arrived</h6>
                  <i
                    className="fa-solid fa-angle-up"
                    style={{ marginLeft: 'auto', marginRight: '0px', color: '#2395FF' }}></i>
                </div>
                <div style={{ display: 'flex', marginBottom: '20px' }}>
                  <h6 style={{ fontSize: '14px' }}>00:00 - 06:00</h6>
                  <input
                    type="radio"
                    id="arrtime1"
                    name="arrtime"
                    onChange={() => {
                      setArrTimeFrom('00:00');
                      setArrTimeTo('06:00');
                    }}
                  />
                  <label
                    htmlFor="arrtime1"
                    style={{ fontSize: '14px', marginLeft: 'auto', marginRight: '0px' }}></label>
                </div>
                <div style={{ display: 'flex', marginBottom: '20px' }}>
                  <h6 style={{ fontSize: '14px' }}>06:00 - 12:00</h6>
                  <input
                    type="radio"
                    id="arrtime2"
                    name="arrtime"
                    onChange={() => {
                      setArrTimeFrom('06:00');
                      setArrTimeTo('12:00');
                    }}
                  />
                  <label
                    htmlFor="arrtime2"
                    style={{ fontSize: '14px', marginLeft: 'auto', marginRight: '0px' }}></label>
                </div>
                <div style={{ display: 'flex', marginBottom: '20px' }}>
                  <h6 style={{ fontSize: '14px' }}>12:00 - 18:00</h6>
                  <input
                    type="radio"
                    id="arrtime3"
                    name="arrtime"
                    onChange={() => {
                      setArrTimeFrom('12:00');
                      setArrTimeTo('18:00');
                    }}
                  />
                  <label
                    htmlFor="arrtime3"
                    style={{ fontSize: '14px', marginLeft: 'auto', marginRight: '0px' }}></label>
                </div>
                <div style={{ display: 'flex', marginBottom: '20px' }}>
                  <h6 style={{ fontSize: '14px' }}>18:00 - 24:00</h6>
                  <input
                    type="radio"
                    id="arrtime4"
                    name="arrtime"
                    onChange={() => {
                      setArrTimeFrom('18:00');
                      setArrTimeTo('24:00');
                    }}
                  />
                  <label
                    htmlFor="arrtime4"
                    style={{ fontSize: '14px', marginLeft: 'auto', marginRight: '0px' }}></label>
                </div>
                <hr
                  style={{
                    marginTop: '0px',
                    height: '1px',
                    color: '#E5E5E5',
                    marginBottom: '20px'
                  }}
                />
                <div style={{ display: 'flex', marginBottom: '30px' }}>
                  <h6 style={{ fontSize: '16px', fontWeight: '600' }}>Airlines</h6>
                  <i
                    className="fa-solid fa-angle-up"
                    style={{ marginLeft: 'auto', marginRight: '0px', color: '#2395FF' }}></i>
                </div>
                {allAirlines.isLoading ? (
                  <div>Loading...</div>
                ) : allAirlines.isError ? (
                  <div>No Airlines Found</div>
                ) : allAirlines.data ? (
                  allAirlines.data.map((e, i) => {
                    return (
                      <div key={i} style={{ display: 'flex', marginBottom: '20px' }}>
                        <h6 style={{ fontSize: '14px' }}>{e.name}</h6>
                        <input
                          type="radio"
                          id={e.id}
                          name="airlines"
                          onChange={() => {
                            setAirlinesName(e.name);
                          }}
                        />
                        <label
                          htmlFor={e.id}
                          style={{
                            fontSize: '14px',
                            marginLeft: 'auto',
                            marginRight: '0px'
                          }}></label>
                      </div>
                    );
                  })
                ) : (
                  ''
                )}
                <hr
                  style={{
                    marginTop: '0px',
                    height: '1px',
                    color: '#E5E5E5',
                    marginBottom: '20px'
                  }}
                />
                <button
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#2395FF',
                    border: '1px solid #2395FF',
                    borderRadius: '10px',
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    width: '100%'
                  }}
                  onClick={(e) => {
                    search(e);
                  }}>
                  Change Search
                </button>
              </form>
            </div>
          </div>

          {/* End Left Filter */}
          <div className={searchStyle.startRightContent}>
            <div className={searchStyle.divSelectTicket}>
              <h5 className={searchStyle.selectTicket}>Select Ticket</h5>
              &nbsp;
              <h5 style={{ fontWeight: '500', fontSize: '18px', color: '#979797' }}>
                (
                {allFlight.isLoading ? (
                  <>Loading...</>
                ) : allFlight.isError ? (
                  <>0 Flight Found</>
                ) : allFlight.data ? (
                  <>{allFlight.data.length} Flight Found</>
                ) : (
                  <>0 Flight Found</>
                )}
                )
              </h5>
              <h6
                style={{
                  marginLeft: 'auto',
                  marginRight: '15px',
                  fontSize: '16px',
                  fontWeight: '600'
                }}>
                Sort
              </h6>
              {mode === 'ASC' ? (
                <i
                  className="fa-solid fa-arrow-up-a-z"
                  style={{ marginRight: '0px' }}
                  onClick={() => {
                    setMode('DESC');
                  }}></i>
              ) : (
                <i
                  className="fa-solid fa-arrow-up-z-a"
                  style={{ marginRight: '0px' }}
                  onClick={() => {
                    setMode('ASC');
                  }}></i>
              )}
            </div>
            {/* Start search result */}
            {allFlight.isLoading ? (
              <ContentLoader />
            ) : allFlight.isError ? (
              <div>No Flight Found</div>
            ) : allFlight.data ? (
              allFlight.data.map((e, i) => {
                return (
                  <div key={i} className={searchStyle.divSearchResult}>
                    <div
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '30px'
                      }}>
                      <img
                        src={`${process.env.REACT_APP_PROD}uploads/airlines/${e.airlinesimage}`}
                        alt=""
                        onError={(e) => {
                          e.target.src = `${process.env.REACT_APP_PROD}uploads/airlines/airlines-default.png`;
                        }}
                        className={searchStyle.imgAirline}
                      />
                      <h6>{e.airlinesname}</h6>
                    </div>
                    <div
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '30px'
                      }}>
                      <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '0px' }}>
                        <h5 className={searchStyle.departureCity}>{e.departurecityname}</h5>
                        <h6 style={{ fontSize: '14px', color: '#595959' }}>
                          {moment(e.departure_time, 'HH:mm:ss').format('HH:mm')}
                        </h6>
                      </div>
                      <img
                        src={flightIconSmall}
                        alt=""
                        style={{ marginLeft: 'auto', marginRight: 'auto' }}
                      />
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column'
                        }}>
                        <h5 className={searchStyle.arrivalCity}>{e.arrivalcityname}</h5>
                        <h6 style={{ fontSize: '14px', color: '#595959' }}>
                          {moment(e.arrival_time, 'HH:mm:ss').format('HH:mm')}
                        </h6>
                      </div>
                      <div className={searchStyle.longTime}>
                        <h6 style={{ fontSize: '16px', color: '#595959' }}>
                          {parseInt(
                            moment
                              .duration(
                                moment(e.arrival_time, 'HH:mm:ss').diff(
                                  moment(e.departure_time, 'HH:mm:ss')
                                )
                              )
                              .asHours()
                          )}{' '}
                          Hours{' '}
                          {parseInt(
                            moment
                              .duration(
                                moment(e.arrival_time, 'HH:mm:ss').diff(
                                  moment(e.departure_time, 'HH:mm:ss')
                                )
                              )
                              .asMinutes()
                          ) % 60}{' '}
                          Minutes
                        </h6>
                        <h6 style={{ fontSize: '14px', color: '#595959' }}>
                          ({e.direct ? 'Direct' : e.more_transit ? '2 Transit' : '1 Transit'})
                        </h6>
                      </div>
                      <div className={searchStyle.iconFeature}>
                        {e.luggage ? (
                          <>
                            <i
                              className="fa-solid fa-suitcase-rolling"
                              style={{ marginRight: '10px' }}></i>
                          </>
                        ) : (
                          ''
                        )}
                        {e.meal ? (
                          <>
                            <i className="fa-solid fa-burger" style={{ marginRight: '10px' }}></i>
                          </>
                        ) : (
                          ''
                        )}
                        {e.wifi ? (
                          <>
                            <i className="fa-solid fa-wifi" style={{ marginRight: '10px' }}></i>
                          </>
                        ) : (
                          ''
                        )}
                      </div>
                      <div className={searchStyle.price}>
                        <h6 style={{ color: '#2395FF', fontSize: '16px', fontWeight: '500' }}>
                          $ {Intl.NumberFormat('en-US').format(e.price)}
                        </h6>
                        <h6 style={{ color: '#595959', fontSize: '14px', fontWeight: '500' }}>
                          {' '}
                          /pax
                        </h6>
                      </div>
                      <Link to={`/booking/add/${e.flightid}?adult=${adult}&child=${child}`}>
                        <button type="button" className={searchStyle.buttonSelect}>
                          Select
                        </button>
                      </Link>
                    </div>
                    <div className={searchStyle.divViewDetail}>
                      <h6 style={{ fontWeight: '600', fontSize: '16px' }}>View Details</h6>
                      <i
                        className="fa-solid fa-angle-down"
                        style={{ marginLeft: '15px', fontWeight: '600', fontSize: '16px' }}></i>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>No Flight Found</div>
            )}
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
};

export default SearchResult;

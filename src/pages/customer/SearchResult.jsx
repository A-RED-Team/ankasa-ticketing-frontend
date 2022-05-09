import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '../../components/customer/Navbar';
import Footer from '../../components/customer/Footer';

import bg from '../../assets/images/vector 2.png';
import bgIcon from '../../assets/images/bgicon.svg';
import garuda from '../../assets/img/garuda.png';
import lion from '../../assets/img/lion-air.png';
import airAsia from '../../assets/img/air-asia.png';
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
  return (
    <>
      <Navbar />
      <Section className="d-sm-block d-none">
        <Header className="no-gutters pl-5 text-white">
          <div
            style={{
              width: '10%',
              display: 'flex'
            }}>
            <img src={bgIcon} style={{ marginLeft: 'auto', marginRight: '0px' }} />
          </div>
          <div
            style={{ width: '20%', display: 'flex', flexDirection: 'column', paddingLeft: '20px' }}>
            <div style={{ width: '100%', display: 'flex' }}>
              <p style={{ marginLeft: '0px', marginRight: 'auto', fontSize: '12px' }}>From</p>
              <p style={{ marginLeft: 'auto', marginRight: '0px', fontSize: '12px' }}>To</p>
            </div>
            <div
              style={{
                width: '100%',
                display: 'flex',
                textAlign: 'center'
              }}>
              <h6 style={{ marginLeft: '0px' }}>Medan (IDN)</h6>
              <i
                className="fa-solid fa-right-left"
                style={{ marginLeft: 'auto', marginRight: 'auto' }}></i>
              <h6 style={{ marginRight: '0px' }}>Tokyo (JPN)</h6>
            </div>
            <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
              <small style={{ marginLeft: '0px' }}>Monday, 20 July 20</small>
              <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>&#9679;</div>
              <small>6 Passenger</small>
              <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>&#9679;</div>
              <small style={{ marginRight: '0px' }}>Economy</small>
            </div>
          </div>
          <div style={{ width: '70%', display: 'flex', paddingRight: '70px' }}>
            <h6 style={{ marginLeft: 'auto', marginRight: '0px' }}>Change Search</h6>
          </div>
        </Header>
        <div
          className="container-fluid"
          style={{
            width: '100%',
            backgroundColor: '#F5F6FA',
            display: 'flex'
          }}>
          {/* Start Left Filter */}
          <div
            style={{
              width: '25%',
              display: 'flex',
              flexDirection: 'column',
              padding: '30px 25px 30px 70px'
            }}>
            <div
              style={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                marginBottom: '25px'
              }}>
              <h5 style={{ marginLeft: '0px', fontWeight: '600', fontSize: '24px' }}>Filter</h5>
              <small
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
              <div style={{ display: 'flex', marginBottom: '30px' }}>
                <h6 style={{ fontSize: '16px', fontWeight: '600' }}>Transit</h6>
                <i
                  className="fa-solid fa-angle-up"
                  style={{ marginLeft: 'auto', marginRight: '0px', color: '#2395FF' }}></i>
              </div>
              <div style={{ display: 'flex', marginBottom: '20px' }}>
                <h6 style={{ fontSize: '14px' }}>Direct</h6>
                <input
                  type="checkbox"
                  name="direct"
                  style={{ marginLeft: 'auto', marginRight: '0px' }}
                />
              </div>
              <div style={{ display: 'flex', marginBottom: '20px' }}>
                <h6 style={{ fontSize: '14px' }}>Transit</h6>
                <input
                  type="checkbox"
                  name="transit"
                  style={{ marginLeft: 'auto', marginRight: '0px' }}
                />
              </div>
              <div style={{ display: 'flex', marginBottom: '20px' }}>
                <h6 style={{ fontSize: '14px' }}>Transit 2+</h6>
                <input
                  type="checkbox"
                  name="transit2"
                  style={{ marginLeft: 'auto', marginRight: '0px' }}
                />
              </div>
              <hr
                style={{ marginTop: '0px', height: '1px', color: '#E5E5E5', marginBottom: '20px' }}
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
                  style={{ marginLeft: 'auto', marginRight: '0px' }}
                />
              </div>
              <div style={{ display: 'flex', marginBottom: '20px' }}>
                <h6 style={{ fontSize: '14px' }}>In-Flight Meal</h6>
                <input
                  type="checkbox"
                  name="meal"
                  style={{ marginLeft: 'auto', marginRight: '0px' }}
                />
              </div>
              <div style={{ display: 'flex', marginBottom: '20px' }}>
                <h6 style={{ fontSize: '14px' }}>Wi-fi</h6>
                <input
                  type="checkbox"
                  name="wifi"
                  style={{ marginLeft: 'auto', marginRight: '0px' }}
                />
              </div>
              <hr
                style={{ marginTop: '0px', height: '1px', color: '#E5E5E5', marginBottom: '20px' }}
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
                  type="checkbox"
                  name="deptime1"
                  style={{ marginLeft: 'auto', marginRight: '0px' }}
                />
              </div>
              <div style={{ display: 'flex', marginBottom: '20px' }}>
                <h6 style={{ fontSize: '14px' }}>06:00 - 12:00</h6>
                <input
                  type="checkbox"
                  name="deptime2"
                  style={{ marginLeft: 'auto', marginRight: '0px' }}
                />
              </div>
              <div style={{ display: 'flex', marginBottom: '20px' }}>
                <h6 style={{ fontSize: '14px' }}>12:00 - 18:00</h6>
                <input
                  type="checkbox"
                  name="deptime3"
                  style={{ marginLeft: 'auto', marginRight: '0px' }}
                />
              </div>
              <div style={{ display: 'flex', marginBottom: '20px' }}>
                <h6 style={{ fontSize: '14px' }}>18:00 - 24:00</h6>
                <input
                  type="checkbox"
                  name="deptime4"
                  style={{ marginLeft: 'auto', marginRight: '0px' }}
                />
              </div>
              <hr
                style={{ marginTop: '0px', height: '1px', color: '#E5E5E5', marginBottom: '20px' }}
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
                  type="checkbox"
                  name="arrtime1"
                  style={{ marginLeft: 'auto', marginRight: '0px' }}
                />
              </div>
              <div style={{ display: 'flex', marginBottom: '20px' }}>
                <h6 style={{ fontSize: '14px' }}>06:00 - 12:00</h6>
                <input
                  type="checkbox"
                  name="arrtime2"
                  style={{ marginLeft: 'auto', marginRight: '0px' }}
                />
              </div>
              <div style={{ display: 'flex', marginBottom: '20px' }}>
                <h6 style={{ fontSize: '14px' }}>12:00 - 18:00</h6>
                <input
                  type="checkbox"
                  name="arrtime3"
                  style={{ marginLeft: 'auto', marginRight: '0px' }}
                />
              </div>
              <div style={{ display: 'flex', marginBottom: '20px' }}>
                <h6 style={{ fontSize: '14px' }}>18:00 - 24:00</h6>
                <input
                  type="checkbox"
                  name="arrtime4"
                  style={{ marginLeft: 'auto', marginRight: '0px' }}
                />
              </div>
              <hr
                style={{ marginTop: '0px', height: '1px', color: '#E5E5E5', marginBottom: '20px' }}
              />
              <div style={{ display: 'flex', marginBottom: '30px' }}>
                <h6 style={{ fontSize: '16px', fontWeight: '600' }}>Airlines</h6>
                <i
                  className="fa-solid fa-angle-up"
                  style={{ marginLeft: 'auto', marginRight: '0px', color: '#2395FF' }}></i>
              </div>
              <div style={{ display: 'flex', marginBottom: '20px' }}>
                <h6 style={{ fontSize: '14px' }}>Garuda Indonesia</h6>
                <input
                  type="checkbox"
                  name="garuda"
                  style={{ marginLeft: 'auto', marginRight: '0px' }}
                />
              </div>
              <div style={{ display: 'flex', marginBottom: '20px' }}>
                <h6 style={{ fontSize: '14px' }}>Air Asia</h6>
                <input
                  type="checkbox"
                  name="airasia"
                  style={{ marginLeft: 'auto', marginRight: '0px' }}
                />
              </div>
              <div style={{ display: 'flex', marginBottom: '20px' }}>
                <h6 style={{ fontSize: '14px' }}>Lion Air</h6>
                <input
                  type="checkbox"
                  name="lionair"
                  style={{ marginLeft: 'auto', marginRight: '0px' }}
                />
              </div>
            </div>
          </div>
          {/* End Left Filter */}
          <div
            style={{
              width: '75%',
              display: 'flex',
              flexDirection: 'column',
              padding: '30px 70px 40px 0px'
            }}>
            <div
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                marginBottom: '25px'
              }}>
              <h5 style={{ marginLeft: '0px', fontWeight: '500', fontSize: '24px' }}>
                Select Ticket
              </h5>
              &nbsp;
              <h5 style={{ fontWeight: '500', fontSize: '18px', color: '#979797' }}>
                (6 flight found)
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
              <i className="fa-solid fa-arrow-up-a-z" style={{ marginRight: '0px' }}></i>
            </div>
            {/* Start search result */}
            <div
              style={{
                width: '100%',
                backgroundColor: '#FFFFFF',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'column',
                padding: '25px',
                marginBottom: '20px'
              }}>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '30px'
                }}>
                <img src={garuda} alt="" style={{ width: '100px', marginRight: '30px' }} />
                <h6>Garuda Indonesia</h6>
              </div>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '30px'
                }}>
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '0px' }}>
                  <h5 style={{ fontSize: '24px', fontWeight: '500' }}>IDN</h5>
                  <h6 style={{ fontSize: '14px', color: '#595959' }}>12:33</h6>
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
                  <h5 style={{ fontSize: '24px', fontWeight: '500' }}>JPN</h5>
                  <h6 style={{ fontSize: '14px', color: '#595959' }}>15:21</h6>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                  }}>
                  <h6 style={{ fontSize: '16px', color: '#595959' }}>3 hours 11 minutes</h6>
                  <h6 style={{ fontSize: '14px', color: '#595959' }}>(1 transit)</h6>
                </div>
                <div
                  style={{
                    fontSize: '25px',
                    color: '#979797'
                  }}>
                  <i className="fa-solid fa-suitcase-rolling" style={{ marginRight: '10px' }}></i>
                  <i className="fa-solid fa-burger" style={{ marginRight: '10px' }}></i>
                  <i className="fa-solid fa-wifi" style={{ marginRight: '10px' }}></i>
                </div>
                <div style={{ display: 'flex', marginRight: '45px', marginLeft: 'auto' }}>
                  <h6 style={{ color: '#2395FF', fontSize: '16px', fontWeight: '500' }}>
                    $ 214,00
                  </h6>
                  <h6 style={{ color: '#595959', fontSize: '14px', fontWeight: '500' }}> /pax</h6>
                </div>
                <button
                  type="button"
                  style={{
                    height: '50px',
                    width: '150px',
                    backgroundColor: '#2395FF',
                    color: '#FFFFFF',
                    borderRadius: '10px',
                    border: 'none',
                    marginRight: '0px'
                  }}>
                  Select
                </button>
              </div>
              <div
                style={{
                  display: 'flex',
                  color: '#2395FF'
                }}>
                <h6 style={{ fontWeight: '600', fontSize: '16px' }}>View Details</h6>
                <i
                  className="fa-solid fa-angle-down"
                  style={{ marginLeft: '15px', fontWeight: '600', fontSize: '16px' }}></i>
              </div>
            </div>
            {/* ============================================================== */}
            <div
              style={{
                width: '100%',
                backgroundColor: '#FFFFFF',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'column',
                padding: '25px',
                marginBottom: '20px'
              }}>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '30px'
                }}>
                <img src={airAsia} alt="" style={{ width: '100px', marginRight: '30px' }} />
                <h6>Air asia</h6>
              </div>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '30px'
                }}>
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '0px' }}>
                  <h5 style={{ fontSize: '24px', fontWeight: '500' }}>IDN</h5>
                  <h6 style={{ fontSize: '14px', color: '#595959' }}>12:33</h6>
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
                  <h5 style={{ fontSize: '24px', fontWeight: '500' }}>JPN</h5>
                  <h6 style={{ fontSize: '14px', color: '#595959' }}>15:21</h6>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                  }}>
                  <h6 style={{ fontSize: '16px', color: '#595959' }}>3 hours 11 minutes</h6>
                  <h6 style={{ fontSize: '14px', color: '#595959' }}>(Direct)</h6>
                </div>
                <div
                  style={{
                    fontSize: '25px',
                    color: '#979797'
                  }}>
                  <i className="fa-solid fa-suitcase-rolling" style={{ marginRight: '10px' }}></i>
                  <i className="fa-solid fa-burger" style={{ marginRight: '10px' }}></i>
                </div>
                <div style={{ display: 'flex', marginRight: '45px', marginLeft: 'auto' }}>
                  <h6 style={{ color: '#2395FF', fontSize: '16px', fontWeight: '500' }}>
                    $ 214,00
                  </h6>
                  <h6 style={{ color: '#595959', fontSize: '14px', fontWeight: '500' }}> /pax</h6>
                </div>
                <button
                  type="button"
                  style={{
                    height: '50px',
                    width: '150px',
                    backgroundColor: '#2395FF',
                    color: '#FFFFFF',
                    borderRadius: '10px',
                    border: 'none',
                    marginRight: '0px'
                  }}>
                  Select
                </button>
              </div>
              <div
                style={{
                  display: 'flex',
                  color: '#2395FF'
                }}>
                <h6 style={{ fontWeight: '600', fontSize: '16px' }}>View Details</h6>
                <i
                  className="fa-solid fa-angle-down"
                  style={{ marginLeft: '15px', fontWeight: '600', fontSize: '16px' }}></i>
              </div>
            </div>
            {/* ============================================ */}
            <div
              style={{
                width: '100%',
                backgroundColor: '#FFFFFF',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'column',
                padding: '25px',
                marginBottom: '20px'
              }}>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '30px'
                }}>
                <img src={lion} alt="" style={{ width: '100px', marginRight: '30px' }} />
                <h6>Lion Air</h6>
              </div>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '30px'
                }}>
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '0px' }}>
                  <h5 style={{ fontSize: '24px', fontWeight: '500' }}>IDN</h5>
                  <h6 style={{ fontSize: '14px', color: '#595959' }}>12:33</h6>
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
                  <h5 style={{ fontSize: '24px', fontWeight: '500' }}>JPN</h5>
                  <h6 style={{ fontSize: '14px', color: '#595959' }}>15:21</h6>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                  }}>
                  <h6 style={{ fontSize: '16px', color: '#595959' }}>3 hours 11 minutes</h6>
                  <h6 style={{ fontSize: '14px', color: '#595959' }}>(2 Direct)</h6>
                </div>
                <div
                  style={{
                    fontSize: '25px',
                    color: '#979797'
                  }}>
                  <i className="fa-solid fa-suitcase-rolling" style={{ marginRight: '10px' }}></i>
                  <i className="fa-solid fa-burger" style={{ marginRight: '10px' }}></i>
                </div>
                <div style={{ display: 'flex', marginRight: '45px', marginLeft: 'auto' }}>
                  <h6 style={{ color: '#2395FF', fontSize: '16px', fontWeight: '500' }}>
                    $ 214,00
                  </h6>
                  <h6 style={{ color: '#595959', fontSize: '14px', fontWeight: '500' }}> /pax</h6>
                </div>
                <button
                  type="button"
                  style={{
                    height: '50px',
                    width: '150px',
                    backgroundColor: '#2395FF',
                    color: '#FFFFFF',
                    borderRadius: '10px',
                    border: 'none',
                    marginRight: '0px'
                  }}>
                  Select
                </button>
              </div>
              <div
                style={{
                  display: 'flex',
                  color: '#2395FF'
                }}>
                <h6 style={{ fontWeight: '600', fontSize: '16px' }}>View Details</h6>
                <i
                  className="fa-solid fa-angle-down"
                  style={{ marginLeft: '15px', fontWeight: '600', fontSize: '16px' }}></i>
              </div>
            </div>
            {/* ======================== */}
            <div
              style={{
                width: '100%',
                backgroundColor: '#FFFFFF',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'column',
                padding: '25px',
                marginBottom: '20px'
              }}>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '30px'
                }}>
                <img src={garuda} alt="" style={{ width: '100px', marginRight: '30px' }} />
                <h6>Garuda Indonesia</h6>
              </div>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '30px'
                }}>
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '0px' }}>
                  <h5 style={{ fontSize: '24px', fontWeight: '500' }}>IDN</h5>
                  <h6 style={{ fontSize: '14px', color: '#595959' }}>12:33</h6>
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
                  <h5 style={{ fontSize: '24px', fontWeight: '500' }}>JPN</h5>
                  <h6 style={{ fontSize: '14px', color: '#595959' }}>15:21</h6>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                  }}>
                  <h6 style={{ fontSize: '16px', color: '#595959' }}>3 hours 11 minutes</h6>
                  <h6 style={{ fontSize: '14px', color: '#595959' }}>(1 transit)</h6>
                </div>
                <div
                  style={{
                    fontSize: '25px',
                    color: '#979797'
                  }}>
                  <i className="fa-solid fa-suitcase-rolling" style={{ marginRight: '10px' }}></i>
                  <i className="fa-solid fa-burger" style={{ marginRight: '10px' }}></i>
                  <i className="fa-solid fa-wifi" style={{ marginRight: '10px' }}></i>
                </div>
                <div style={{ display: 'flex', marginRight: '45px', marginLeft: 'auto' }}>
                  <h6 style={{ color: '#2395FF', fontSize: '16px', fontWeight: '500' }}>
                    $ 214,00
                  </h6>
                  <h6 style={{ color: '#595959', fontSize: '14px', fontWeight: '500' }}> /pax</h6>
                </div>
                <button
                  type="button"
                  style={{
                    height: '50px',
                    width: '150px',
                    backgroundColor: '#2395FF',
                    color: '#FFFFFF',
                    borderRadius: '10px',
                    border: 'none',
                    marginRight: '0px'
                  }}>
                  Select
                </button>
              </div>
              <div
                style={{
                  display: 'flex',
                  color: '#2395FF'
                }}>
                <h6 style={{ fontWeight: '600', fontSize: '16px' }}>View Details</h6>
                <i
                  className="fa-solid fa-angle-down"
                  style={{ marginLeft: '15px', fontWeight: '600', fontSize: '16px' }}></i>
              </div>
            </div>
            {/* ============================================================== */}
            <div
              style={{
                width: '100%',
                backgroundColor: '#FFFFFF',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'column',
                padding: '25px',
                marginBottom: '20px'
              }}>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '30px'
                }}>
                <img src={airAsia} alt="" style={{ width: '100px', marginRight: '30px' }} />
                <h6>Air asia</h6>
              </div>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '30px'
                }}>
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '0px' }}>
                  <h5 style={{ fontSize: '24px', fontWeight: '500' }}>IDN</h5>
                  <h6 style={{ fontSize: '14px', color: '#595959' }}>12:33</h6>
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
                  <h5 style={{ fontSize: '24px', fontWeight: '500' }}>JPN</h5>
                  <h6 style={{ fontSize: '14px', color: '#595959' }}>15:21</h6>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                  }}>
                  <h6 style={{ fontSize: '16px', color: '#595959' }}>3 hours 11 minutes</h6>
                  <h6 style={{ fontSize: '14px', color: '#595959' }}>(Direct)</h6>
                </div>
                <div
                  style={{
                    fontSize: '25px',
                    color: '#979797'
                  }}>
                  <i className="fa-solid fa-suitcase-rolling" style={{ marginRight: '10px' }}></i>
                  <i className="fa-solid fa-burger" style={{ marginRight: '10px' }}></i>
                </div>
                <div style={{ display: 'flex', marginRight: '45px', marginLeft: 'auto' }}>
                  <h6 style={{ color: '#2395FF', fontSize: '16px', fontWeight: '500' }}>
                    $ 214,00
                  </h6>
                  <h6 style={{ color: '#595959', fontSize: '14px', fontWeight: '500' }}> /pax</h6>
                </div>
                <button
                  type="button"
                  style={{
                    height: '50px',
                    width: '150px',
                    backgroundColor: '#2395FF',
                    color: '#FFFFFF',
                    borderRadius: '10px',
                    border: 'none',
                    marginRight: '0px'
                  }}>
                  Select
                </button>
              </div>
              <div
                style={{
                  display: 'flex',
                  color: '#2395FF'
                }}>
                <h6 style={{ fontWeight: '600', fontSize: '16px' }}>View Details</h6>
                <i
                  className="fa-solid fa-angle-down"
                  style={{ marginLeft: '15px', fontWeight: '600', fontSize: '16px' }}></i>
              </div>
            </div>
            {/* ============================================ */}
            <div
              style={{
                width: '100%',
                backgroundColor: '#FFFFFF',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'column',
                padding: '25px',
                marginBottom: '20px'
              }}>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '30px'
                }}>
                <img src={lion} alt="" style={{ width: '100px', marginRight: '30px' }} />
                <h6>Lion Air</h6>
              </div>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '30px'
                }}>
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '0px' }}>
                  <h5 style={{ fontSize: '24px', fontWeight: '500' }}>IDN</h5>
                  <h6 style={{ fontSize: '14px', color: '#595959' }}>12:33</h6>
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
                  <h5 style={{ fontSize: '24px', fontWeight: '500' }}>JPN</h5>
                  <h6 style={{ fontSize: '14px', color: '#595959' }}>15:21</h6>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                  }}>
                  <h6 style={{ fontSize: '16px', color: '#595959' }}>3 hours 11 minutes</h6>
                  <h6 style={{ fontSize: '14px', color: '#595959' }}>(2 Direct)</h6>
                </div>
                <div
                  style={{
                    fontSize: '25px',
                    color: '#979797'
                  }}>
                  <i className="fa-solid fa-suitcase-rolling" style={{ marginRight: '10px' }}></i>
                  <i className="fa-solid fa-burger" style={{ marginRight: '10px' }}></i>
                </div>
                <div style={{ display: 'flex', marginRight: '45px', marginLeft: 'auto' }}>
                  <h6 style={{ color: '#2395FF', fontSize: '16px', fontWeight: '500' }}>
                    $ 214,00
                  </h6>
                  <h6 style={{ color: '#595959', fontSize: '14px', fontWeight: '500' }}> /pax</h6>
                </div>
                <button
                  type="button"
                  style={{
                    height: '50px',
                    width: '150px',
                    backgroundColor: '#2395FF',
                    color: '#FFFFFF',
                    borderRadius: '10px',
                    border: 'none',
                    marginRight: '0px'
                  }}>
                  Select
                </button>
              </div>
              <div
                style={{
                  display: 'flex',
                  color: '#2395FF'
                }}>
                <h6 style={{ fontWeight: '600', fontSize: '16px' }}>View Details</h6>
                <i
                  className="fa-solid fa-angle-down"
                  style={{ marginLeft: '15px', fontWeight: '600', fontSize: '16px' }}></i>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
};

export default SearchResult;

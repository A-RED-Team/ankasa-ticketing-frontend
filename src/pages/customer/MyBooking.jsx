import React from 'react';

import Navbar from '../../components/customer/Navbar';
import Footer from '../../components/customer/Footer';

import Flight from '../../assets/icons/flightIcon.svg';

const MyBooking = () => {
  return (
    <>
      <Navbar />
      <div
        className="container-fluid"
        style={{
          width: '100%',
          height: '85vh',
          backgroundColor: '#F5F6FA',
          display: 'flex',
          marginTop: '90px'
        }}>
        <div className="leftArea" style={{ width: '30%', height: '100%', display: 'flex' }}>
          <div
            style={{
              height: '80%',
              width: '85%',
              border: 'none',
              borderRadius: '15px',
              backgroundColor: '#FFFFFF',
              marginTop: '35px',
              marginLeft: '40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <div
              style={{
                height: '125px',
                width: '125px',
                backgroundColor: '#FFF',
                border: '3px solid #2395FF',
                borderRadius: '100px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '20px'
              }}>
              <div
                style={{
                  height: '105px',
                  width: '105px',
                  backgroundColor: '#FFF',
                  border: 'none',
                  borderRadius: '100px',
                  backgroundImage:
                    'url("https://s3-alpha-sig.figma.com/img/877c/276f/911c515dd21c49df1ca8a64e06d35f54?Expires=1652054400&Signature=AID3ccOOFb1x22-0KA4Gnir60QdfFsFY7TJhcd3iFWvh2dI1yhzdocXZfRwzbtzfMZo-luUc1Ge3fkxBskwZrRUwwtJWyZjKthp-npdd48i-v4j0cWfppmLiQsGs5P3sj1V9T7r9RGR6gwRy~6Pr88vZomOWgiN1QFTwerUFfYE7zFg92vYB9qSrK95E9EFyf7tUGBevKL2z9P4p3ORxTd-QEvYKw9KWnrE~GTn2xFY~gG097Ye4jawTjihKSmiT8hCscE4S3otAhgsEmxfIZp3WA5i4IQSlvJ6qivbPGWxmI68poInDUtakdznCDkpICSYOuzaro5D87q-nTyXajw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA")',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover'
                }}></div>
            </div>
            <button
              type="button"
              style={{
                width: '135px',
                height: '40px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #2395FF',
                color: '#2395FF',
                borderRadius: '10px',
                fontWeight: 'bold',
                fontSize: '15px',
                marginBottom: '20px'
              }}>
              Select Photo
            </button>
            <h5 style={{ fontWeight: 'bold' }}>Mike Kowalski</h5>
            <small style={{ color: '#6B6B6B', marginBottom: '20px' }}>Medan, Indonesia</small>
            <div style={{ display: 'flex', width: '80%' }}>
              <h6
                style={{
                  marginLeft: '0px',
                  marginRight: 'auto',
                  fontSize: '14px',
                  fontWeight: '600'
                }}>
                Cards
              </h6>
              <h6
                style={{
                  marginLeft: 'auto',
                  marginRight: '0px',
                  color: '#2395FF',
                  fontSize: '14px'
                }}>
                + Add
              </h6>
            </div>
            <div
              style={{
                width: '80%',
                height: '60px',
                backgroundColor: '#2395FF',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                padding: '10px 25px 10px 25px',
                marginBottom: '25px'
              }}>
              <h6 style={{ letterSpacing: '1.5px', fontSize: '14px', marginBottom: '0px' }}>
                4441 1235 5512 5551
              </h6>
              <div style={{ display: 'flex', width: '100%', marginTop: 'auto' }}>
                <small
                  style={{
                    marginLeft: '0px',
                    marginRight: 'auto',
                    color: '#AEFAFF',
                    fontSize: '12px'
                  }}>
                  X Card
                </small>
                <small
                  style={{
                    marginLeft: 'auto',
                    marginRight: '0px',
                    color: '#AEFAFF',
                    fontSize: '12px'
                  }}>
                  $ 1,440.2
                </small>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                width: '70%',
                alignItems: 'center',
                marginBottom: '30px',
                color: '#2395FF'
              }}>
              <i className="fa-solid fa-circle-user" style={{ marginLeft: '0px' }}></i>
              <small
                style={{
                  marginLeft: '30px',
                  marginRight: 'auto',
                  fontSize: '14px',
                  fontWeight: '600'
                }}>
                Profile
              </small>
              <i
                className="fa-solid fa-angle-right"
                style={{ marginLeft: 'auto', marginRight: '0px' }}></i>
            </div>
            <div
              style={{
                display: 'flex',
                width: '70%',
                alignItems: 'center',
                marginBottom: '30px'
              }}>
              <i className="fa-solid fa-star" style={{ marginLeft: '0px' }}></i>
              <small
                style={{
                  marginLeft: '30px',
                  marginRight: 'auto',
                  fontSize: '14px',
                  fontWeight: '600'
                }}>
                My Review
              </small>
              <i
                className="fa-solid fa-angle-right"
                style={{ marginLeft: 'auto', marginRight: '0px' }}></i>
            </div>
            <div
              style={{
                display: 'flex',
                width: '70%',
                alignItems: 'center',
                marginBottom: '30px'
              }}>
              <i className="fa-solid fa-gear" style={{ marginLeft: '0px' }}></i>
              <small
                style={{
                  marginLeft: '30px',
                  marginRight: 'auto',
                  fontSize: '14px',
                  fontWeight: '600'
                }}>
                Settings
              </small>
              <i
                className="fa-solid fa-angle-right"
                style={{ marginLeft: 'auto', marginRight: '0px' }}></i>
            </div>
            <div
              style={{
                display: 'flex',
                width: '70%',
                alignItems: 'center',
                color: '#F24545'
              }}>
              <i className="fa-solid fa-right-from-bracket" style={{ marginLeft: '0px' }}></i>
              <small
                style={{
                  marginLeft: '30px',
                  marginRight: 'auto',
                  fontSize: '14px',
                  fontWeight: '600'
                }}>
                Logout
              </small>
              <i
                className="fa-solid fa-angle-right"
                style={{ marginLeft: 'auto', marginRight: '0px' }}></i>
            </div>
          </div>
        </div>
        <div
          className="rightArea"
          style={{
            width: '70%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}>
          <div
            style={{
              height: '13%',
              width: '95%',
              border: 'none',
              borderRadius: '15px',
              backgroundColor: '#FFFFFF',
              marginTop: '35px',
              display: 'flex',
              flexDirection: 'column',
              padding: '30px 25px',
              marginBottom: '25px'
            }}>
            <small
              style={{
                color: '#2395FF',
                letterSpacing: '0.3em',
                fontWeight: '500',
                marginBottom: '7px'
              }}>
              MY BOOKING
            </small>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <h4 style={{ fontWeight: '600', marginLeft: '0px', marginRight: 'auto' }}>
                My Booking
              </h4>
              <h6
                style={{
                  fontWeight: '600',
                  marginRight: '0px',
                  marginLeft: 'auto',
                  color: '#2395FF'
                }}>
                Order History
              </h6>
            </div>
          </div>
          <div
            style={{
              width: '95%',
              border: 'none',
              borderRadius: '15px',
              backgroundColor: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              padding: '30px 25px',
              marginBottom: '20px'
            }}>
            <small
              style={{
                marginBottom: '15px',
                fontSize: '14px'
              }}>
              Monday, 20 July ‘20 - 12:33
            </small>
            <div style={{ display: 'flex' }}>
              <h5 style={{ fontWeight: '600' }}>IDN</h5>
              <img src={Flight} style={{ marginLeft: '20px', marginRight: '20px' }} />
              <h5 style={{ fontWeight: '600' }}>JPN</h5>
            </div>
            <small style={{ fontSize: '14px', color: '#979797' }}>Garuda Indonesia, AB-221</small>
            <hr style={{ height: '1px', backgroundColor: '#E6E6E6' }} />
            <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <small
                style={{
                  fontSize: '14px',
                  color: '#7A7A7A',
                  fontWeight: '600',
                  marginLeft: '0px'
                }}>
                Status
              </small>
              <div
                style={{
                  padding: '7px 18px',
                  backgroundColor: '#FF7F23',
                  width: 'auto',
                  height: 'auto',
                  color: '#FFFFFF',
                  borderRadius: '6px',
                  marginLeft: '60px',
                  marginRight: 'auto'
                }}>
                <small style={{ fontSize: '14px', fontWeight: '600' }}>Waiting for payment</small>
              </div>
              <small
                style={{
                  fontSize: '16px',
                  color: '#2395FF',
                  fontWeight: '600',
                  marginLeft: 'auto',
                  marginRight: '15px'
                }}>
                View Details
              </small>
              <i
                className="fa-solid fa-angle-down"
                style={{ color: '#2395FF', marginRight: '0px' }}></i>
            </div>
          </div>
          <div
            style={{
              width: '95%',
              border: 'none',
              borderRadius: '15px',
              backgroundColor: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              padding: '30px 25px',
              marginBottom: '20px'
            }}>
            <small
              style={{
                marginBottom: '15px',
                fontSize: '14px'
              }}>
              Monday, 20 July ‘20 - 12:33
            </small>
            <div style={{ display: 'flex' }}>
              <h5 style={{ fontWeight: '600' }}>IDN</h5>
              <img src={Flight} style={{ marginLeft: '20px', marginRight: '20px' }} />
              <h5 style={{ fontWeight: '600' }}>JPN</h5>
            </div>
            <small style={{ fontSize: '14px', color: '#979797' }}>Garuda Indonesia, AB-221</small>
            <hr style={{ height: '1px', backgroundColor: '#E6E6E6' }} />
            <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <small
                style={{
                  fontSize: '14px',
                  color: '#7A7A7A',
                  fontWeight: '600',
                  marginLeft: '0px'
                }}>
                Status
              </small>
              <div
                style={{
                  padding: '7px 18px',
                  backgroundColor: '#4FCF4D',
                  width: 'auto',
                  height: 'auto',
                  color: '#FFFFFF',
                  borderRadius: '6px',
                  marginLeft: '60px',
                  marginRight: 'auto'
                }}>
                <small style={{ fontSize: '14px', fontWeight: '600' }}>Eticket issued</small>
              </div>
              <small
                style={{
                  fontSize: '16px',
                  color: '#2395FF',
                  fontWeight: '600',
                  marginLeft: 'auto',
                  marginRight: '15px'
                }}>
                View Details
              </small>
              <i
                className="fa-solid fa-angle-down"
                style={{ color: '#2395FF', marginRight: '0px' }}></i>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyBooking;

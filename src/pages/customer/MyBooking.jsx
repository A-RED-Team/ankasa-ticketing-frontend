import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert2';
import JwtDecode from 'jwt-decode';
import { getDetailUser } from '../../redux/actions/user';
import { getMyBooking } from '../../redux/actions/myBooking';
import { updatePhoto } from '../../redux/actions/updateUser';
import { payBooking, cancelTheBooking } from '../../redux/actions/booking';
import { useDispatch, useSelector } from 'react-redux';
import ContentLoader from 'react-content-loader';
import moment from 'moment';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import style from '../../assets/styles/input.module.css';
import mybookingStyle from '../../assets/styles/mybooking.module.css';

import Flight from '../../assets/icons/flightIcon.svg';

const MyBooking = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const myBookings = useSelector((state) => state.myBookings);
  const detailUser = useSelector((state) => state.detailUser);
  const token = localStorage.getItem('token');
  const decoded = JwtDecode(token);
  const [idBooking, setIdBooking] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCancel, setIsOpenCancel] = useState(false);
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState('');
  const [buttonVisibility, setButtonVisibility] = useState(false);
  const logout = () => {
    localStorage.clear();
    return navigate('/login');
  };
  const toggle1 = (idBook) => {
    setIsOpenCancel(!isOpenCancel);
    setIdBooking(idBook);
  };
  const toggle = (idBook) => {
    setIsOpen(!isOpen);
    setIdBooking(idBook);
  };
  const confirmPayment = (data) => {
    setIsOpen(!isOpen);
    payBooking(data)
      .then((res) => {
        swal
          .fire({
            title: 'Success!',
            text: res.message,
            icon: 'success'
          })
          .then(() => {
            dispatch(getMyBooking());
          });
      })
      .catch((err) => {
        swal.fire({
          title: 'Error!',
          text: err.response.data.message,
          icon: 'error'
        });
      });
  };
  const cancelBooking = (data) => {
    setIsOpenCancel(!isOpenCancel);
    cancelTheBooking(data)
      .then((res) => {
        swal
          .fire({
            title: 'Success!',
            text: res.message,
            icon: 'success'
          })
          .then(() => {
            dispatch(getMyBooking());
          });
      })
      .catch((err) => {
        swal.fire({
          title: 'Error!',
          text: err.response.data.message,
          icon: 'error'
        });
      });
  };
  const photoSubmit = (e) => {
    e.preventDefault();
    setLoading(false);
    if (loading == false) {
      setLoading(true);
      const formData = new FormData();
      formData.append('image', photo);
      updatePhoto(formData)
        .then((res) => {
          swal
            .fire({
              title: 'Success!',
              text: res.message,
              icon: 'success'
            })
            .then(() => {
              setButtonVisibility(!buttonVisibility);
              dispatch(getDetailUser(decoded.id));
            });
        })
        .catch((err) => {
          swal
            .fire({
              title: 'Error!',
              text: err.response.data.error,
              icon: 'error'
            })
            .then(() => {
              setButtonVisibility(!buttonVisibility);
            });
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };
  useEffect(() => {
    dispatch(getMyBooking());
    dispatch(getDetailUser(decoded.id));
  }, []);
  return (
    <>
      <Navbar isLogin={token} />
      <div
        className="container-fluid"
        style={{
          width: '100%',
          backgroundColor: '#F5F6FA',
          display: 'flex',
          marginTop: '90px'
        }}>
        <div
          // className="leftArea"
          className={`${mybookingStyle.leftContent} leftArea`}
          // style={{ width: '30%', height: '100%', display: 'flex' }}
        >
          {detailUser.isLoading ? (
            // untuk membuat loading page
            <ContentLoader />
          ) : detailUser.isError ? (
            // Disini bisa memasukkan sweet alert untuk error
            <div>Error</div>
          ) : (
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
                alignItems: 'center',
                paddingTop: '30px',
                paddingBottom: '30px'
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
                    backgroundImage: `url(${process.env.REACT_APP_PROD}uploads/users/${detailUser.data?.data?.photo})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                  }}></div>
              </div>
              <form id="form" onSubmit={(e) => photoSubmit(e)}>
                <input
                  type="file"
                  id="photo"
                  onChange={(e) => {
                    setPhoto(e.target.files[0]);
                    setButtonVisibility(!buttonVisibility);
                  }}
                  style={{ display: 'none' }}
                />
                <input type="submit" id="submit" style={{ display: 'none' }} />
              </form>
              {buttonVisibility ? (
                <>
                  <button
                    type="button"
                    onClick={() => {
                      document.getElementById('submit').click();
                    }}
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
                    {loading ? 'Loading..' : 'Confirm Upload'}
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => {
                      document.getElementById('photo').click();
                    }}
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
                </>
              )}
              <h5 style={{ fontWeight: 'bold' }}>{detailUser.data?.data?.username}</h5>
              <small style={{ color: '#6B6B6B', marginBottom: '20px' }}>
                {detailUser.data?.data?.address || 'Your Address'}
              </small>
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
                  marginBottom: '30px'
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
                className={style.logout}
                onClick={() => {
                  logout();
                }}
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
          )}
        </div>
        <div
          // className="rightArea"
          className={`${mybookingStyle.rightContent} rightArea`}
          // style={{
          //   width: '70%',
          //   height: '100%',
          //   display: 'flex',
          //   flexDirection: 'column'
          // }}
        >
          <div
            style={{
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
          {/* My Booking goes here */}
          {myBookings.isLoading ? (
            <ContentLoader />
          ) : myBookings.isError ? (
            <div>You dont have any booking</div>
          ) : myBookings.data ? (
            myBookings.data.map((e, i) => {
              return (
                <div
                  key={i}
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
                    {moment(e.departure_date).format('dddd, DD MMMM YYYY')}
                  </small>
                  <div style={{ display: 'flex' }}>
                    <h5 style={{ fontWeight: '600' }}>{e.from_contry}</h5>
                    <img src={Flight} style={{ marginLeft: '20px', marginRight: '20px' }} />
                    <h5 style={{ fontWeight: '600' }}>{e.to_contry}</h5>
                  </div>
                  <small style={{ fontSize: '14px', color: '#979797' }}>
                    {e.airline_name}, {e.terminal + '-' + e.gate}
                  </small>
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
                    {e.is_active === 0 ? (
                      <>
                        <div
                          style={{
                            padding: '7px 18px',
                            backgroundColor: '#DC3545',
                            width: 'auto',
                            height: 'auto',
                            color: '#FFFFFF',
                            borderRadius: '6px',
                            marginLeft: '60px',
                            marginRight: 'auto'
                          }}>
                          <small style={{ fontSize: '14px', fontWeight: '600' }}>
                            Booking Cancelled
                          </small>
                        </div>
                      </>
                    ) : e.payment_status === 0 ? (
                      <>
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
                          <small style={{ fontSize: '14px', fontWeight: '600' }}>
                            Waiting for payment
                          </small>
                        </div>
                        <div
                          style={{
                            width: '25%',
                            display: 'flex',
                            alignItems: 'center',
                            marginLeft: 'auto',
                            marginRight: '15px'
                          }}>
                          <input
                            type="button"
                            value="Pay now"
                            onClick={() => {
                              toggle(e.booking_id);
                            }}
                            style={{
                              padding: '7px 18px',
                              backgroundColor: '#2395FF',
                              width: 'auto',
                              height: 'auto',
                              color: '#FFFFFF',
                              borderRadius: '6px',
                              marginLeft: '0px',
                              border: 'none'
                            }}
                          />
                          <small
                            style={{
                              fontSize: '14px',
                              color: '#7A7A7A',
                              fontWeight: '600',
                              marginLeft: 'auto',
                              marginRight: 'auto'
                            }}>
                            Or
                          </small>
                          <input
                            type="button"
                            value="Cancel Booking"
                            onClick={() => {
                              toggle1(e.booking_id);
                            }}
                            style={{
                              padding: '7px 18px',
                              backgroundColor: '#dc3545',
                              width: 'auto',
                              height: 'auto',
                              color: '#FFFFFF',
                              borderRadius: '6px',
                              marginRight: '0px',
                              border: 'none'
                            }}
                          />
                        </div>
                      </>
                    ) : (
                      <>
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
                          <small style={{ fontSize: '14px', fontWeight: '600' }}>
                            Eticket issued
                          </small>
                        </div>
                        <Link to={'/booking/detail/' + e.booking_id}>
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
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <>No Booking Found</>
          )}
          <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>Booking payment</ModalHeader>
            <ModalBody>Confirm your payment ?</ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                onClick={() => {
                  confirmPayment(idBooking);
                }}>
                Confirm
              </Button>{' '}
              <Button color="danger" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
          <Modal isOpen={isOpenCancel} toggle={toggle1}>
            <ModalHeader toggle={toggle1}>Cancel Booking</ModalHeader>
            <ModalBody>Are you sure to cancel this booking ?</ModalBody>
            <ModalFooter>
              <Button
                color="danger"
                onClick={() => {
                  cancelBooking(idBooking);
                }}>
                Confirm
              </Button>{' '}
              <Button color="secondary" onClick={toggle1}>
                Back
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyBooking;

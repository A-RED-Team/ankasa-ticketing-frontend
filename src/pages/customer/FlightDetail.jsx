import '../../assets/styles/flight-detail.css';
import React, { useState, useEffect } from 'react';
import JwtDecode from 'jwt-decode';
import swal from 'sweetalert2';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { createBooking } from '../../redux/actions/booking';
import { getDetailUser } from '../../redux/actions/user';
import { getDetailFlight } from '../../redux/actions/flight';
import { getAllCountries } from '../../redux/actions/country';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { toastr } from '../../utils/toastr';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import flightIconSmall from '../../assets/images/flightIconSmall.svg';

import line from '../../assets/icons/Line 16.svg';
import alert from '../../assets/icons/ant-design_warning-filled.svg';

const FlightDetail = () => {
  const [query] = useSearchParams();
  const adult = query.get('adult') || '1';
  const child = query.get('child') || '0';
  const totalPax = parseInt(adult) + parseInt(child);
  const token = localStorage.getItem('token');
  const { flightId } = useParams();
  const decoded = JwtDecode(token);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const detailFlight = useSelector((state) => state.detailFlightReducer);
  const detailUser = useSelector((state) => state.detailUser);
  const allCountry = useSelector((state) => state.allCountry);
  const [sameAsContact, setSameAsContact] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [insurance, setInsurance] = useState(false);
  const [form, setForm] = useState({
    title: '',
    fullName: '',
    nationallity: '',
    flightId: flightId,
    email: '',
    phone: '',
    paxName: ''
  });
  const payNow = () => {
    const bookingData = {
      ...form,
      travelInsurance: insurance ? '1' : '0',
      adult: adult,
      child: child,
      payment: '1'
    };
    if (!bookingData.title) {
      swal.fire({
        title: 'Error!',
        text: `Select your title`,
        icon: 'error'
      });
    } else if (!bookingData.nationallity) {
      swal.fire({
        title: 'Error!',
        text: `Select your nationality`,
        icon: 'error'
      });
    } else if (
      !bookingData.fullName ||
      !bookingData.email ||
      !bookingData.phone ||
      !bookingData.paxName
    ) {
      swal.fire({
        title: 'Error!',
        text: `All field must be filled`,
        icon: 'error'
      });
    } else {
      createBooking(bookingData)
        .then((res) => {
          swal
            .fire({
              title: 'Success!',
              text: res.message,
              icon: 'success'
            })
            .then(() => {
              navigate('/profile/booking');
            });
        })
        .catch((err) => {
          if (err.response.data.message === 'validation failed') {
            const error = err.response.data.error;
            error.map((e) => toastr(e, 'error'));
          } else {
            swal.fire({
              title: 'Error!',
              text: err.response.data.message,
              icon: 'error'
            });
          }
        });
    }
  };
  const payLater = () => {
    const bookingData = {
      ...form,
      travelInsurance: insurance ? '1' : '0',
      adult: adult,
      child: child,
      payment: '0'
    };
    if (!bookingData.title) {
      swal.fire({
        title: 'Error!',
        text: `Select your title`,
        icon: 'error'
      });
    } else if (!bookingData.nationallity) {
      swal.fire({
        title: 'Error!',
        text: `Select your nationality`,
        icon: 'error'
      });
    } else if (
      !bookingData.fullName ||
      !bookingData.email ||
      !bookingData.phone ||
      !bookingData.paxName
    ) {
      swal.fire({
        title: 'Error!',
        text: `All field must be filled`,
        icon: 'error'
      });
    } else {
      createBooking(bookingData)
        .then((res) => {
          swal
            .fire({
              title: 'Success!',
              text: res.message,
              icon: 'success'
            })
            .then(() => {
              navigate('/profile/booking');
            });
        })
        .catch((err) => {
          if (err.response.data.message === 'validation failed') {
            const error = err.response.data.error;
            error.map((e) => toastr(e, 'error'));
          } else {
            swal.fire({
              title: 'Error!',
              text: err.response.data.message,
              icon: 'error'
            });
          }
        });
    }
  };
  useEffect(() => {
    dispatch(getDetailFlight(flightId));
    dispatch(getDetailUser(decoded.id));
    dispatch(getAllCountries());
    setForm({
      ...form,
      flightId: flightId
    });
  }, []);
  useEffect(() => {
    if (detailUser.data.data) {
      setForm({
        ...form,
        email: detailUser.data.data.email,
        phone: detailUser.data.data.phone_number
      });
    }
  }, [detailUser]);
  useEffect(() => {
    if (detailFlight.data.data) {
      setTotalPrice(detailFlight.data.data.price * totalPax);
    }
  }, [detailFlight]);
  useEffect(() => {
    if (insurance) {
      setTotalPrice(totalPrice + totalPax * 2);
    } else {
      if (detailFlight.data.data) {
        setTotalPrice(detailFlight.data.data.price * totalPax);
      }
    }
  }, [insurance]);
  useEffect(() => {
    if (sameAsContact) {
      setForm({ ...form, paxName: form.fullName });
    } else {
      setForm({ ...form, paxName: '' });
    }
  }, [sameAsContact]);
  return (
    <>
      <Navbar isLogin={token} />

      <div className="container-fluid flight ff-poppins">
        <Header />
        <div className="row no-gutters pl-5 pr-5 flight-container">
          <div className="col-sm-8">
            <div className="card p-2 mb-4 flight-card">
              <div className="card-body">
                <div className="flight-form">
                  <form action="#">
                    <div className="form-box">
                      <input
                        type="text"
                        id="fullname"
                        onChange={(e) => {
                          setForm({ ...form, fullName: e.target.value });
                        }}
                        required
                      />
                      <label htmlFor="fullname">Full Name</label>
                    </div>
                    <div className="form-box">
                      <input
                        type="email"
                        id="email"
                        onChange={(e) => {
                          setForm({ ...form, email: e.target.value });
                        }}
                        value={form.email}
                        required
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                    <div className="row separator">
                      <div className="col-2">
                        <div className="row">
                          <div className="col-8">
                            <div className="form-box">
                              <select name="" id="">
                                <option value="+62">+ 62</option>
                                <option value="+63">+ 63</option>
                                <option value="+64">+ 64</option>
                                <option value="+65">+ 65</option>
                                <option value="+66">+ 66</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-4">
                            <img src={line} />
                          </div>
                        </div>
                      </div>
                      <div className="col-10">
                        <div className="form-box">
                          <input
                            type="text"
                            id="phone"
                            onChange={(e) => {
                              setForm({ ...form, phone: e.target.value });
                            }}
                            value={form.phone}
                            required
                          />
                          <label htmlFor="phone">Phone Number</label>
                        </div>
                      </div>
                    </div>
                    <div className="card form-alert flight-card">
                      <div className="card-body">
                        <p className="mb-0 ml-3">
                          <img src={alert} alt="Warning" className="mr-3" />
                          Make sure the customer data is correct.
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <p className="flight-title">Passenger Details</p>
            <div className="card p-2 mb-4 flight-card">
              <div className="card-body">
                <div className="flight-form">
                  <form action="#">
                    <div
                      className="card mb-3 flight-card"
                      style={{ background: 'rgba(35, 149, 255, 0.1)' }}>
                      <div className="card-body pr-4 pl-4 pt-1 pb-1">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Passenger : 1 Adult</p>&nbsp;&nbsp;
                          <p className="mb-0 ml-auto mr-1">Same as contact person</p>&nbsp;&nbsp;
                          <div className="ml-auto mr-0">
                            <label className="switch mt-3">
                              <input
                                type="checkbox"
                                onChange={(e) => {
                                  setSameAsContact(e.target.checked);
                                }}
                              />
                              <span className="slider round"></span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-box">
                      <label htmlFor="title">Title</label>
                      <select
                        name="title"
                        id="title"
                        onChange={(e) => {
                          setForm({ ...form, title: e.target.value });
                        }}
                        required>
                        <option selected></option>
                        <option>Mr.</option>
                        <option>Mrs.</option>
                      </select>
                    </div>
                    <div className="form-box">
                      <input
                        type="text"
                        id="fullname"
                        onChange={(e) => {
                          setForm({ ...form, paxName: e.target.value });
                        }}
                        value={form.paxName}
                        required
                      />
                      <label htmlFor="fullname">Full Name</label>
                    </div>
                    <div className="form-box">
                      <select
                        name="nationality"
                        onChange={(e) => {
                          setForm({ ...form, nationallity: e.target.value });
                        }}
                        id="nationality"
                        required>
                        <option selected></option>
                        {allCountry.isLoading ? (
                          <>
                            <option>Loading..</option>
                          </>
                        ) : allCountry.isError ? (
                          <>
                            <option>Error</option>
                          </>
                        ) : allCountry.data ? (
                          allCountry.data?.map((e, i) => {
                            return (
                              <>
                                <option key={i}>{e.name}</option>
                              </>
                            );
                          })
                        ) : (
                          <>
                            <option>Error</option>
                          </>
                        )}
                      </select>
                      <label htmlFor="nationality">Nationality</label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <p className="flight-title">Passenger Details</p>
            <div className="card mb-4 flight-card">
              <div className="card-body">
                <div className="d-flex">
                  <div className="ml-4 mb-3 flight-checkbox">
                    <input
                      type="checkbox"
                      className="mr-2"
                      name=""
                      id=""
                      onChange={(e) => {
                        setInsurance(e.target.checked);
                      }}
                    />
                  </div>
                  <p>Travel Insurance</p>
                  <p className="ml-auto">$ 2,00</p>
                </div>
                <hr />
                <p>Get travel compensation up to $ 10.000,00</p>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button
                className="mb-4 flight-button"
                onClick={() => {
                  payNow();
                }}>
                Book & pay now
              </button>
              <button
                className="mb-4 bg-secondary flight-button"
                onClick={() => {
                  payLater();
                }}
                style={{ marginLeft: '50px' }}>
                Pay Later
              </button>
            </div>
          </div>
          <div className="col-sm-4 pl-4">
            <div className="card mb-4 flight-card">
              <div className="card-body">
                <p className="mb-4">
                  <img className="mr-4" src="" alt="" />
                  {detailFlight.isLoading ? (
                    <div>Loading...</div>
                  ) : detailFlight.isError ? (
                    <div>Error</div>
                  ) : (
                    detailFlight.data?.data?.airlinesname
                  )}
                </p>
                <h6 className="font-weight-bold mb-4">
                  {detailFlight.isLoading ? (
                    <div>Loading...</div>
                  ) : detailFlight.isError ? (
                    <div>Error</div>
                  ) : (
                    <>
                      {detailFlight.data?.data?.departurecityname} (
                      {detailFlight.data?.data?.departurecountryname})
                    </>
                  )}
                  <img
                    className="ml-3 mr-3"
                    src={flightIconSmall}
                    alt=""
                    style={{ marginLeft: '5px', marginRight: '5px' }}
                  />
                  {detailFlight.isLoading ? (
                    <div>Loading...</div>
                  ) : detailFlight.isError ? (
                    <div>Error</div>
                  ) : (
                    <>
                      {detailFlight.data?.data?.arrivalcityname} (
                      {detailFlight.data?.data?.arrivalcountryname})
                    </>
                  )}
                </h6>
                <p className="font-size-12 mb-4">
                  {detailFlight.isLoading ? (
                    <div>Loading...</div>
                  ) : detailFlight.isError ? (
                    <div>Error</div>
                  ) : (
                    <>
                      {moment(detailFlight.data?.data?.departuredate, 'DD-MM-YYYY').format(
                        'dddd, DD MMMM YYYY'
                      )}{' '}
                      -{' '}
                      {moment(detailFlight.data?.data?.departure_time, 'HH:mm:ss').format('HH:mm')}{' '}
                      - {moment(detailFlight.data?.data?.arrival_time, 'HH:mm:ss').format('HH:mm')}
                    </>
                  )}
                </p>
                <p> Refundable</p>
                <p> Can Reschedule</p>
                <hr />
                <div className="d-flex">
                  <h5>Total Payment&nbsp;</h5>
                  <h4 className="ml-auto">
                    ${' '}
                    {detailFlight.isLoading ? (
                      <div>Loading...</div>
                    ) : detailFlight.isError ? (
                      <div>Error</div>
                    ) : (
                      Intl.NumberFormat('en-US').format(totalPrice)
                    )}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FlightDetail;

import React, { useEffect, useState } from 'react';
import Modal from '../Search';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getDetailUser } from '../../redux/actions/user';
import jwt_decode from 'jwt-decode';
import { APP_STAGING, APP_DEV, APP_PROD } from '../../helper/env';
import '../../utils/navbar.js';

import logo from '../../assets/icons/illustration.svg';
import toggle from '../../assets/icons/align-right.svg';
import search from '../../assets/icons/search.svg';
import mail from '../../assets/icons/ic_round-mail-outline.svg';
import bell from '../../assets/icons/bell.svg';

const index = ({ isLogin = false }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [modal, setModal] = useState(false);
  const [arrCities, setArrCities] = useState('');
  const dispatch = useDispatch();
  const detailUser = useSelector((state) => state.detailUser);
  const onSubmit = (e) => {
    e.preventDefault();
    return navigate(`/booking?arrCity=${arrCities}`);
  };
  let decoded = '';
  if (isLogin) {
    decoded = jwt_decode(isLogin);
  }
  useEffect(() => {
    if (decoded) {
      dispatch(getDetailUser(decoded.id));
    }
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white">
        <div className="container">
          <img src={logo} alt="Ankasa Ticketing" className="mr-2" />
          <Link className="navbar-brand" to="/">
            ankasa
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <img src={toggle} alt="toggle" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <form
                onSubmit={(e) => {
                  onSubmit(e);
                }}>
                <div className="navbar-search p-1 pl-4">
                  <label htmlFor="search" className="navbar-icon-search">
                    <img src={search} alt="Search" id="search" />
                  </label>
                  <input
                    type="search"
                    className="form-control"
                    onChange={(e) => {
                      setArrCities(e.target.value);
                    }}
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      outline: 'none',
                      boxShadow: 'none'
                    }}
                    placeholder="Where you want to go ?"
                  />
                  <input type="submit" style={{ display: 'none' }} />
                </div>
              </form>
              <li className="nav-item">
                <a
                  onClick={() => setModal(!modal)}
                  className={modal && location.pathname === '/' ? 'nav-link active' : 'nav-link'}>
                  find ticket
                </a>
              </li>
              {isLogin && (
                <li className="nav-item">
                  <Link
                    to="/profile/booking"
                    className={
                      location.pathname === '/profile/booking' ? 'nav-link active' : 'nav-link'
                    }>
                    my booking
                  </Link>
                </li>
              )}
            </ul>
            {isLogin ? (
              <div className="navbar-profile">
                <img src={mail} alt="Message" />
                <img src={bell} alt="Notification" />
                <div className="navbar-photo">
                  <Link to="/profile">
                    <img
                      src={`${
                        APP_STAGING === 'dev'
                          ? `${APP_DEV}uploads/users/${detailUser.data?.data?.photo}`
                          : `${APP_PROD}uploads/users/${detailUser.data?.data?.photo}`
                      }`}
                      alt={detailUser.data?.data?.username}
                      onError={(e) => {
                        e.target.src = `${process.env.REACT_APP_PROD}uploads/users/profile-default.png`;
                      }}
                    />
                  </Link>
                </div>
              </div>
            ) : (
              <button className="navbar-button" onClick={() => navigate('/register')}>
                Sign Up
              </button>
            )}
          </div>
        </div>
      </nav>
      {modal && location.pathname === '/' ? <Modal /> : null}
    </>
  );
};

export default index;

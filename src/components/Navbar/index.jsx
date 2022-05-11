import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../Search';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { APP_STAGING, APP_DEV, APP_PROD } from '../../helper/env';

import '../../utils/navbar.js';
import './navbar.css';

import logo from '../../assets/icons/illustration.svg';
import toggle from '../../assets/icons/align-right.svg';
import search from '../../assets/icons/search.svg';
import mail from '../../assets/icons/ic_round-mail-outline.svg';
import bell from '../../assets/icons/bell.svg';
import profile from '../../assets/icons/user.png';
import exit from '../../assets/icons/log-out.png';

const Search = styled.div`
  border-radius: 10px;
  width: 250px;
  display: flex;
  align-items: center;
  background-color: #efefef;
  margin-right: 20px;

  input {
    font-family: 'Lato', 'sans-serif';
    font-weight: 400;
    font-size: 14px;
    margin-left: 10px;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
    margin: 10px 0;
  }
`;

const Icon = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    position: absolute;
    top: 0;
    bottom: -5px;
    margin: auto;
  }
`;

const Button = styled.button`
  background-color: var(--text-blue);
  color: var(--text-white);
  padding: 11px 13px;
  border: none;
  border-radius: 7px;
  font-size: 16px;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  text-transform: capitalize;
  transition: all 0.5 ease;
  font-weight: 500;
  text-decoration: none;
  width: 130px;
  text-align: center;

  &:hover {
    box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  }

  @media screen and (max-width: 576px) {
    display: block;
    margin: 0 auto;
    margin-top: 10px;
  }
`;

const Profile = styled.div`
  display: flex;
  width: 200px;
  height: 27px;
  justify-content: space-between;
`;

// const Photo = styled.img`
//   width: 45px;
//   height: 45px;
//   margin-top: -10px;
//   border: 2px solid #2395ff;
//   border-radius: 25px;
//   overflow: hidden;
//   padding: 3px;
// `;

const index = ({ isLogin = false }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  // const [isLogin, setIsLogin] = useState(false);
  // const token = localStorage.getItem('token');
  // let decoded = '';

  let decoded = '';
  if (isLogin) {
    decoded = jwt_decode(isLogin);
  }

  const menuToggle = () => {
    const toggleMenu = document.querySelector('.menu');
    toggleMenu.classList.toggle('active');
  };

  const logout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <img src={logo} alt="Ankasa Ticketing" className="mr-2" />
          <a className="navbar-brand" href="/">
            ankasa
          </a>
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
              <form>
                <Search className="p-1 pl-4">
                  <Icon>
                    <img src={search} alt="Search" />
                  </Icon>
                  <input
                    type="search"
                    className="form-control"
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      outline: 'none',
                      boxShadow: 'none'
                    }}
                    placeholder="Where you want to go ?"
                  />
                </Search>
              </form>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  find ticket
                </a>
              </li>
              {isLogin && (
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    my booking
                  </a>
                </li>
              )}
            </ul>
            {isLogin ? (
              <Profile>
                <img src={mail} alt="Message" />
                <img src={bell} alt="Notification" />
                <div className="action">
                  <div className="profile" onClick={menuToggle}>
                    <img
                      src={`${
                        APP_STAGING === 'dev'
                          ? `${APP_DEV}uploads/users/${decoded.photo}`
                          : `${APP_PROD}uploads/users/${decoded.photo}`
                      }`}
                      alt={decoded.name}
                    />
                  </div>
                  <div className="menu">
                    <h3>{decoded.username}</h3>
                    <ul>
                      <li>
                        <img src={profile} alt="My Profile" />
                        <Link to="/profile">My Profile</Link>
                      </li>
                      <li>
                        <img src={exit} alt="Logout" />
                        <a onClick={logout}>Logout</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Profile>
            ) : (
              <Button onClick={() => navigate('/register')}>Sign Up</Button>
            )}
          </div>
        </div>
      </nav>
      {/* <Navbar color="white" expand="lg" className="fixed-top" light>
        <Container>
          <img src={logo} alt="Ankasa Ticketing" className="mr-2" />
          <NavbarBrand href="/">ankasa</NavbarBrand>
          <NavbarToggler onClick={() => setIsOpen(!isOpen)}>
            <img src={toggle} alt="toggle" />
          </NavbarToggler>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="m-auto" navbar>
              <form>
                <Search className="p-1 pl-4">
                  <Icon>
                    <img src={search} alt="Search" />
                  </Icon>
                  <input
                    type="search"
                    className="form-control"
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      outline: 'none',
                      boxShadow: 'none'
                    }}
                    placeholder="Where you want to go ?"
                  />
                </Search>
              </form>
              <NavItem>
                <NavLink onClick={() => setModal(!modal)}>find ticket</NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={Link}
                  to="/profile/booking"
                  active={location.pathname === '/profile/booking'}>
                  my booking
                </NavLink>
              </NavItem>
            </Nav>
            {isLogin ? (
              <Profile>
                <img src={mail} alt="Message" />
                <img src={bell} alt="Notification" />
                <div className="action">
                  <div className="profile" onClick={menuToggle}>
                    <img
                      src={`${
                        APP_STAGING === 'dev'
                          ? `${APP_DEV}uploads/users/${decoded.photo}`
                          : `${APP_PROD}uploads/users/${decoded.photo}`
                      }`}
                      alt={decoded.name}
                    />
                  </div>
                  <div className="menu">
                    <h3>{decoded.username}</h3>
                    <ul>
                      <li>
                        <img src={profile} alt="My Profile" />
                        <Link to="/profile">My Profile</Link>
                      </li>
                      <li>
                        <img src={exit} alt="Logout" />
                        <a onClick={logout}>Logout</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Profile>
            ) : (
              <Button onClick={() => navigate('/register')}>Sign Up</Button>
            )}
          </Collapse>
        </Container>
      </Navbar> */}
      {modal ? <Modal /> : null}
    </>
  );
};

export default index;

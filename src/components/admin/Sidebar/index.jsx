import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { NavItem, NavLink } from 'reactstrap';

import logo from '../../../assets/img/vector 3.png';
import img from '../../../assets/img/user2-160x160.jpg';

const Logo = styled.img`
  width: 40px;
  height: auto;
`;

const index = () => {
  const location = useLocation();

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="index3.html" className="brand-link text-center">
        <Logo src={logo} alt="Ankasa Ticketing" style={{ opacity: '.8' }} />
        <span className="brand-text font-weight-light">Ankasa Ticketing</span>
      </a>

      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img src={img} className="img-circle elevation-2" alt="User Image" />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              Alexander Pierce
            </a>
          </div>
        </div>

        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input
              className="form-control form-control-sidebar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw"></i>
              </button>
            </div>
          </div>
        </div>

        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false">
            <NavItem>
              <NavLink tag={Link} to="/admin" active={location.pathname === '/admin'}>
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>Dashboard</p>
              </NavLink>
            </NavItem>
            <li className="nav-header">MANAGEMENT</li>
            <NavItem>
              <NavLink
                tag={Link}
                to="/admin/airlines"
                active={location.pathname === '/admin/airlines'}>
                <i className="nav-icon fas fa-plane"></i>
                <p>Airlines</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={Link}
                to="/admin/tickets"
                active={location.pathname === '/admin/tickets'}>
                <i className="nav-icon fas fa-ticket"></i>
                <p>Tickets</p>
              </NavLink>
            </NavItem>
            <li className="nav-header">LOGOUT</li>
            <li className="nav-item">
              <a href="pages/widgets.html" className="nav-link">
                <i className="nav-icon fas fa-right-from-bracket"></i>
                <p>Logout</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default index;

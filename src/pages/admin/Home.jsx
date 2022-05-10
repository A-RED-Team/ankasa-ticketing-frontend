import 'admin-lte/dist/css/adminlte.min.css';
import 'admin-lte/plugins/jquery/jquery.min.js';
import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
import 'admin-lte/dist/js/adminlte.min.js';
import React, { useEffect } from 'react';
import { APP_NAME } from '../../helper/env';
// import Preloader from '../../components/admin/Preloader';
import Navbar from '../../components/admin/Navbar';
import Sidebar from '../../components/admin/Sidebar';
import Breadcrumb from '../../components/admin/Breadcrumb';
import Footer from '../../components/admin/Footer';

const Home = () => {
  useEffect(() => {
    document.title = `${APP_NAME} | Dashboard Admin`;
    document.body.className = 'hold-transition sidebar-mini';
    return () => {
      document.body.className = '';
    };
  }, []);

  return (
    <div className="wrapper">
      {/* <Preloader /> */}
      <Navbar />
      <Sidebar />
      <div className="content-wrapper">
        <Breadcrumb text="Dashboard" />
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-6">
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>150</h3>
                    <p>Airlines</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-plane"></i>
                  </div>
                  <a href="#" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="small-box bg-success">
                  <div className="inner">
                    <h3>
                      53<sup style={{ fontSize: '20px' }}>%</sup>
                    </h3>

                    <p>Booking</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-stats-bars"></i>
                  </div>
                  <a href="#" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="small-box bg-warning">
                  <div className="inner">
                    <h3>44</h3>

                    <p>Customer</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-person"></i>
                  </div>
                  <a href="#" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="small-box bg-danger">
                  <div className="inner">
                    <h3>65</h3>

                    <p>Schedule</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-calendar"></i>
                  </div>
                  <a href="#" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

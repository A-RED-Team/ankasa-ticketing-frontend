// CSS
import 'admin-lte/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css';
import 'admin-lte/plugins/datatables-responsive/css/responsive.bootstrap4.min.css';
import 'admin-lte/dist/css/adminlte.min.css';
// JS
import 'admin-lte/plugins/datatables/jquery.dataTables.min.js';
import 'admin-lte/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js';
import 'admin-lte/plugins/datatables-responsive/js/dataTables.responsive.min.js';
import 'admin-lte/plugins/datatables-responsive/js/responsive.bootstrap4.min.js';
import 'admin-lte/plugins/jquery/jquery.min.js';
import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
import 'admin-lte/dist/js/adminlte.min.js';
import '../../utils/customTable';

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { APP_NAME } from '../../helper/env';
import Navbar from '../../components/admin/Navbar';
import Sidebar from '../../components/admin/Sidebar';
import Breadcrumb from '../../components/admin/Breadcrumb';
import Footer from '../../components/admin/Footer';

const Airlines = () => {
  useEffect(() => {
    document.title = `${APP_NAME} | Management Airline`;
    document.body.className = 'hold-transition sidebar-mini';
    return () => {
      document.body.className = '';
    };
  }, []);

  return (
    <div className="wrapper">
      <Navbar />
      <Sidebar />
      <div className="content-wrapper">
        <Breadcrumb text="Airlines" />
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">
                      <i className="fas fa-plane"></i> Management Airlines
                    </h3>
                  </div>
                  <div className="card-body">
                    <table id="example1" className="table table-bordered table-striped text-center">
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Name</th>
                          <th>Image</th>
                          <th>Date</th>
                          <th>Option</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Garuda</td>
                          <td>-</td>
                          <td>Tuesday, 03 Mei 2022</td>
                          <td className="">
                            <div className="btn-group btn-group-sm">
                              <a href="#" className="btn btn-info">
                                <i className="fas fa-eye"></i>
                              </a>
                              <a href="#" className="btn btn-warning">
                                <i className="fas fa-edit"></i>
                              </a>
                              <a href="#" className="btn btn-danger">
                                <i className="fas fa-trash"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="">
                  <Link className="text-decoration-none text-black" to="addairlines">
                    Add Airlines
                  </Link>
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

export default Airlines;

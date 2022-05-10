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

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert2';
import { APP_NAME } from '../../helper/env';
import Navbar from '../../components/admin/Navbar';
import Sidebar from '../../components/admin/Sidebar';
import Footer from '../../components/admin/Footer';
import { addAirlines } from '../../redux/actions/airline';

const AddAirlines = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  // to catch input file photo
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    document.title = `${APP_NAME} | Add Airline`;
    document.body.className = 'hold-transition sidebar-mini';
    return () => {
      document.body.className = '';
    };
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();
    if (name === '') {
      swal.fire({
        title: 'Error!',
        text: 'Name Must be filled',
        icon: 'error'
      });
    }
    if (photo == null) {
      swal.fire({
        title: 'Error!',
        text: 'You must upload image',
        icon: 'error'
      });
    }
    const data = new FormData();
    data.append('name', name);
    data.append('image', photo);

    setLoading(true);
    addAirlines(data)
      .then((res) => {
        swal
          .fire({
            title: 'Success!',
            text: res.message,
            icon: 'success'
          })
          .then(() => {
            navigate('/admin');
          });
      })
      .catch((err) => {
        console.log(err);
        swal.fire({
          title: 'Error!',
          text: err.response.data.message,
          icon: 'error'
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <Sidebar />
        <div className="content-wrapper">
          <section className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="card card-primary">
                    <div className="card-header">
                      <h3 className="card-title">Add Airline</h3>
                    </div>

                    <form onSubmit={(e) => onSubmit(e)}>
                      <div className="card-body">
                        <div className="form-group">
                          <label>Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>

                        <div className="form-group">
                          <label>File input</label>
                          <div className="input-group">
                            <div className="custom-file">
                              <input
                                type="file"
                                className="custom-file-input"
                                accept="image/*"
                                onChange={(e) => {
                                  setPhoto(e.target.files[0]);
                                }}
                              />
                              <label className="custom-file-label">Choose Image</label>
                            </div>
                            <div className="input-group-append">
                              <span className="input-group-text">Upload</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card-footer">
                        {loading ? (
                          <button type="submit" className="btn btn-primary" disabled>
                            <span
                              className="spinner-border spinner-border-sm"
                              role="status"
                              aria-hidden="true"
                            />
                          </button>
                        ) : (
                          <button type="submit" className="btn btn-primary">
                            Submit
                          </button>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AddAirlines;

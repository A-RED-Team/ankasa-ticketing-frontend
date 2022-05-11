import '../../assets/styles/auth.css';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icon from '../../assets/images/icon.svg';
import swal from 'sweetalert2';
import Banner from '../../components/Banner';
import { register } from '../../redux/actions/auth';
import { APP_NAME } from '../../helper/env';
import { toastr } from '../../utils/toastr';

const Register = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [loading, setLoading] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    terms: ''
  });

  useEffect(() => {
    document.title = `${APP_NAME} - Register Page`;

    if (token) {
      return navigate('/');
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (form.terms !== true) {
      swal.fire({
        title: 'Error!',
        text: 'You must agree terms & conditions',
        icon: 'error'
      });
      setLoading(false);
    } else if (form.username === '' || form.email === '' || form.password === '') {
      swal.fire({
        title: 'Error!',
        text: 'All field must be filled!',
        icon: 'error'
      });
    } else {
      register(form)
        .then((res) => {
          swal
            .fire({
              title: 'Success!',
              text: res.message,
              icon: 'success'
            })
            .then(() => {
              navigate('/login');
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
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <>
      <div className="container-fluid ff-poppins">
        <div className="row">
          <Banner />
          <div className="right-side col-sm-6">
            <div className="container right-content">
              <div className="d-flex mt-4 w-100 auth-logo">
                <img src={Icon} />
                <h3 className="auth-title">Ankasa</h3>
              </div>
              <div className="auth-content">
                <form onSubmit={(e) => onSubmit(e)}>
                  <h2 className="mb-4 auth-header">Register</h2>
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Username"
                    onChange={(e) => setForm({ ...form, username: e.target.value })}
                  />
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                  <input
                    type={passwordVisibility ? 'text' : 'password'}
                    name="password"
                    placeholder="Password"
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                  />
                  <div className="p-viewer">
                    {passwordVisibility ? (
                      <i
                        className="fa-solid fa-eye"
                        onClick={() => {
                          setPasswordVisibility(!passwordVisibility);
                        }}></i>
                    ) : (
                      <i
                        className="fa-solid fa-eye-slash"
                        onClick={() => {
                          setPasswordVisibility(!passwordVisibility);
                        }}></i>
                    )}
                  </div>
                  {loading ? (
                    <button type="submit" className="btn-auth" disabled>
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      />
                    </button>
                  ) : (
                    <button type="submit" className="btn-auth">
                      Sign Up
                    </button>
                  )}
                  <div className="d-flex align-items-center mt-3">
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      onChange={(e) => setForm({ ...form, terms: e.target.checked })}
                    />
                    <label htmlFor="terms"> Accept terms and condition</label>
                  </div>
                </form>
              </div>
              <div className="auth-separator"></div>
              <p className="small text-center mb-3">Already have an account?</p>
              <Link to="/login">
                <button type="button" className="btn-auth-secondary">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div style={{ width: '100%', height: '100vh', display: 'flex' }}>
        <div
          style={{
            width: '50%',
            height: '100vh',
            backgroundColor: '#2395FF',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <img src={Plane} />
        </div>
        <div
          style={{
            width: '50%',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
          <div
            style={{
              width: '60%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '25px'
            }}>
            <div style={{ display: 'flex', width: '100%' }}>
              <img src={Icon} />
              <h3 style={{ textAlign: 'left', marginLeft: '15px' }}>Ankasa</h3>
            </div>
            <div
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                marginTop: '150px'
              }}>
              <form onSubmit={(e) => onSubmit(e)}>
                <h2 style={{ marginBottom: '30px' }}>Register</h2>
                <input
                  type="text"
                  name="fullname"
                  onChange={(e) => setForm({ ...form, username: e.target.value })}
                  className={styles.inputForm}
                  placeholder="Username"
                  style={{
                    width: '95%',
                    marginBottom: '10px',
                    height: '50px',
                    border: 'none',
                    borderBottom: '2px solid #D2C2FF'
                  }}
                />
                <input
                  type="text"
                  name="email"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={styles.inputForm}
                  placeholder="Email"
                  style={{
                    width: '95%',
                    marginBottom: '10px',
                    height: '50px',
                    border: 'none',
                    borderBottom: '2px solid #D2C2FF'
                  }}
                />
                <div styles={{ width: '100%' }}>
                  <input
                    type={passwordVisibility ? 'text' : 'password'}
                    name="password"
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    className={styles.inputForm}
                    placeholder="Password"
                    style={{
                      width: '95%',
                      marginBottom: '20px',
                      height: '50px',
                      border: 'none',
                      borderBottom: '2px solid #D2C2FF'
                    }}
                  />
                  {passwordVisibility ? (
                    <i
                      className="fa-solid fa-eye"
                      onClick={() => {
                        setPasswordVisibility(!passwordVisibility);
                      }}
                      style={{ fontSize: '18px' }}></i>
                  ) : (
                    <i
                      className="fa-solid fa-eye-slash"
                      onClick={() => {
                        setPasswordVisibility(!passwordVisibility);
                      }}
                      style={{ fontSize: '18px' }}></i>
                  )}
                </div>
                <input
                  type="submit"
                  value="Sign up"
                  style={{
                    width: '100%',
                    marginBottom: '30px',
                    height: '50px',
                    backgroundColor: '#2395FF',
                    color: 'white',
                    borderRadius: '10px',
                    border: 'none',
                    fontSize: '17px',
                    fontWeight: 'bold'
                  }}
                />
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    name="terms"
                    onChange={(e) => setForm({ ...form, terms: e.target.checked })}
                    style={{
                      marginRight: '15px'
                    }}
                  />
                  <label htmlFor="terms"> Accept terms and condition</label>
                </div>
              </form>
            </div>
            <div
              style={{
                width: '90%',
                borderBottom: '1px solid #D8D8D8',
                marginTop: '35px',
                marginBottom: '13px'
              }}></div>
            <small style={{ marginBottom: '15px' }}>Already have an account?</small>
            <div style={{ width: '100%' }}>
              <Link to="/login">
                <input
                  type="button"
                  value="Sign In"
                  style={{
                    width: '100%',
                    marginBottom: '30px',
                    height: '50px',
                    backgroundColor: 'white',
                    color: '#2395FF',
                    borderRadius: '10px',
                    border: '1px solid #2395FF',
                    fontSize: '17px',
                    fontWeight: 'bold'
                  }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default Register;

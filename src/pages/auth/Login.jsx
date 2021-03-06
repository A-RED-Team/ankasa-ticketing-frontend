import '../../assets/styles/auth.css';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert2';
import { APP_NAME } from '../../helpers/env';
import { toastr } from '../../utils/toastr';
import jwt_decode from 'jwt-decode';
import Banner from '../../components/Banner';
import Icon from '../../assets/images/icon.svg';
import Google from '../../assets/images/google.svg';
import Facebook from '../../assets/images/facebook.svg';
import { login } from '../../redux/actions/auth';

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    username: '',
    password: ''
  });

  useEffect(() => {
    document.title = `${APP_NAME} - Login Page`;
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.username === '' || form.password === '') {
      swal.fire({
        title: 'Error!',
        text: 'All field must be filled!',
        icon: 'error'
      });
    } else {
      setLoading(true);
      login(form)
        .then((res) => {
          const decoded = jwt_decode(res.token);

          if (decoded.level === 0) {
            localStorage.setItem('token', res.token);
            swal
              .fire({
                title: 'Success!',
                text: res.message,
                icon: 'success'
              })
              .then(() => {
                navigate('/');
              });
          } else {
            swal.fire({
              title: 'Error!',
              text: "You don't have access to this page",
              icon: 'error'
            });
          }
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
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  return (
    <>
      <div className="container-fluid ff-poppins">
        <div className="row">
          <Banner />
          <div className="right-side col-sm-6">
            <div className="container right-content">
              <div className="d-flex mt-4 w-100">
                <img src={Icon} />
                <h3 className="auth-title">Ankasa</h3>
              </div>
              <div className="auth-content">
                <form onSubmit={(e) => onSubmit(e)}>
                  <h2 className="mb-4 auth-header">Login</h2>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={(e) => setForm({ ...form, username: e.target.value })}
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
                      Sign In
                    </button>
                  )}
                </form>
              </div>
              <p className="small mt-3 mb-3 text-center">
                Did you forgot your password? <br />
                <Link to="/forgot">Tap here for reset</Link>
              </p>
              <div className="auth-separator"></div>
              <p className="small text-center mb-2">or sign in with</p>
              <div className="another-login">
                <button type="button" className="btn-social-media">
                  <img src={Google} alt="Google" />
                </button>
                <button type="button" className="btn-social-media">
                  <img src={Facebook} alt="Facebook" />
                </button>
              </div>
              <p className="small text-center">
                Don&apos;t have an account? <Link to="/register">Sign up Here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;

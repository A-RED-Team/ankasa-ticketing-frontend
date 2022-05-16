import '../../assets/styles/auth.css';
import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Icon from '../../assets/images/icon.svg';
import swal from 'sweetalert2';
import Banner from '../../components/Banner';
import { reset } from '../../redux/actions/auth';
import { APP_NAME } from '../../helper/env';
import { toastr } from '../../utils/toastr';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [queryParams] = useSearchParams();
  const queryToken = queryParams.get('token');
  const token = localStorage.getItem('token');
  const [loading, setLoading] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [confirmVisibility, setConfirmVisibility] = useState(false);

  const [form, setForm] = useState({
    password: '',
    passwordConfirmation: ''
  });

  useEffect(() => {
    document.title = `${APP_NAME} - Reset Password Page`;

    if (token) {
      return navigate('/');
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.email === '') {
      swal.fire({
        title: 'Error!',
        text: 'Email must be filled!',
        icon: 'error'
      });
    } else {
      setLoading(true);
      reset(form, queryToken)
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
                  <h2 className="mb-5 auth-header">Reset Password</h2>
                  <input
                    type={passwordVisibility ? 'text' : 'password'}
                    name="password"
                    placeholder="New Password"
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
                  <input
                    type={confirmVisibility ? 'text' : 'password'}
                    name="passwordConfirmation"
                    placeholder="Password Confirmation"
                    onChange={(e) => setForm({ ...form, passwordConfirmation: e.target.value })}
                  />
                  <div className="p-viewer">
                    {confirmVisibility ? (
                      <i
                        className="fa-solid fa-eye"
                        onClick={() => {
                          setConfirmVisibility(!confirmVisibility);
                        }}></i>
                    ) : (
                      <i
                        className="fa-solid fa-eye-slash"
                        onClick={() => {
                          setConfirmVisibility(!confirmVisibility);
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
                      Reset Password
                    </button>
                  )}
                </form>
              </div>
              <p className="small text-center mb-3 mt-3">
                Please set a secure password that contains bot uppercase, lowercase, number, and
                special character. This is for your own safety
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ResetPassword;

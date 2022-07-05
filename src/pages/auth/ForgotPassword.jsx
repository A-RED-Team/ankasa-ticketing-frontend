import '../../assets/styles/auth.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../assets/images/icon.svg';
import swal from 'sweetalert2';
import Banner from '../../components/Banner';
import { forgot } from '../../redux/actions/auth';
import { APP_NAME } from '../../helpers/env';
import { toastr } from '../../utils/toastr';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: ''
  });

  useEffect(() => {
    document.title = `${APP_NAME} - Forgot Password Page`;

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
      forgot(form)
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
                  <h2 className="mb-5 auth-header">Forgot Password</h2>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
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
                      Send
                    </button>
                  )}
                </form>
              </div>
              <p className="small text-center mb-3 mt-3">
                You&apos;ll get message soon on your email
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ForgotPassword;

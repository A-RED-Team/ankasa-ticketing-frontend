import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../assets/styles/input.module.css';
import Plane from '../assets/images/plane.svg';
import Icon from '../assets/images/icon.svg';
const Register = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  return (
    <>
      <div style={{ width: '100%', height: '100vh', display: 'flex' }}>
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
              <form>
                <h2 style={{ marginBottom: '30px' }}>Register</h2>
                <input
                  type="text"
                  name="fullname"
                  className={styles.inputForm}
                  placeholder="Full Name"
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
      </div>
    </>
  );
};
export default Register;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import styles from '../assets/styles/input.module.css';
import Plane from '../assets/images/plane.svg';
import Icon from '../assets/images/icon.svg';
import Google from '../assets/images/google.svg';
import Facebook from '../assets/images/facebook.svg';
const Login = () => {
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
                <h2 style={{ marginBottom: '30px' }}>Login</h2>
                <input
                  type="text"
                  name="username"
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
                  value="Sign in"
                  style={{
                    width: '100%',
                    marginBottom: '10px',
                    height: '50px',
                    backgroundColor: '#2395FF',
                    color: 'white',
                    borderRadius: '10px',
                    border: 'none',
                    fontSize: '17px',
                    fontWeight: 'bold'
                  }}
                />
              </form>
            </div>
            <small>Did you forgot your password?</small>
            <small>
              <Link to="/forgot">Tap here for reset</Link>
            </small>
            <div
              style={{
                width: '90%',
                borderBottom: '1px solid #D8D8D8',
                marginTop: '35px',
                marginBottom: '13px'
              }}></div>
            <small style={{ marginBottom: '15px' }}>or sign in with</small>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '15px'
              }}>
              <Button
                color="primary"
                outline
                style={{ marginRight: '15px', width: '90px', height: '45px' }}>
                <img src={Google} />
              </Button>{' '}
              <Button color="primary" outline style={{ width: '90px', height: '45px' }}>
                <img src={Facebook} />
              </Button>
            </div>
            <small>
              Don&apos;t have an account? <Link to="/register">Sign up Here</Link>
            </small>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;

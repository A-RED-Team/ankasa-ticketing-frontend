import React, { useEffect, useState } from 'react';
import JwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert2';
import ContentLoader from 'react-content-loader';

import Navbar from '../../components/customer/Navbar';
import Footer from '../../components/customer/Footer';
import style from '../../assets/styles/input.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { getDetailUser } from '../../redux/actions/user';
import { updateUser } from '../../redux/actions/updateUser';

const Profile = () => {
  const dispatch = useDispatch();
  const detailUser = useSelector((state) => state.detailUser);

  // for input
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [postCode, setPostCode] = useState('');
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const decoded = JwtDecode(token);
  const [form, setForm] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    city: '',
    address: '',
    postCode: ''
  });
  useEffect(() => {
    if (!token) {
      return navigate('/register');
    }
    dispatch(getDetailUser(decoded.id));
    if (detailUser.data.data) {
      setUsername(detailUser.data.data.username);
      setEmail(detailUser.data.data.email);
      setPhoneNumber(detailUser.data.data.phone_number);
      setCity(detailUser.data.data.city);
      setAddress(detailUser.data.data.address);
      setPostCode(detailUser.data.data.post_code);
    }
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();
    setForm({
      username: username,
      email: email,
      phone: phoneNumber,
      city: city,
      address: address,
      postCode: postCode
    });
    setLoading(false);
    if (loading == false) {
      if (form.username === '') {
        swal.fire({
          title: 'Error!',
          text: `Username Can't be empty`,
          icon: 'error'
        });
      }
      if (form.email === '') {
        swal.fire({
          title: 'Error!',
          text: `Email Can't be empty`,
          icon: 'error'
        });
      } else {
        setLoading(true);
        updateUser(form)
          .then((res) => {
            swal
              .fire({
                title: 'Success!',
                text: res.message,
                icon: 'success'
              })
              .then(() => {
                navigate('/profile');
              });
          })
          .catch((err) => {
            swal.fire({
              title: 'Error!',
              text: err.response.data.message,
              icon: 'error'
            });
          })
          .finally(() => {
            setLoading(false);
          });
      }
    }
  };
  return (
    <>
      <Navbar />
      {detailUser.isLoading ? (
        // untuk membuat loading page
        <ContentLoader />
      ) : detailUser.isError ? (
        // Disini bisa memasukkan sweet alert untuk error
        <div>Error</div>
      ) : (
        <div
          className="container-fluid"
          style={{
            width: '100%',
            height: '85vh',
            backgroundColor: '#F5F6FA',
            display: 'flex',
            marginTop: '90px'
          }}>
          <div className="leftArea" style={{ width: '30%', height: '100%', display: 'flex' }}>
            <div
              style={{
                height: '80%',
                width: '85%',
                border: 'none',
                borderRadius: '15px',
                backgroundColor: '#FFFFFF',
                marginTop: '35px',
                marginLeft: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <div
                style={{
                  height: '125px',
                  width: '125px',
                  backgroundColor: '#FFF',
                  border: '3px solid #2395FF',
                  borderRadius: '100px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '20px'
                }}>
                <div
                  style={{
                    height: '105px',
                    width: '105px',
                    backgroundColor: '#FFF',
                    border: 'none',
                    borderRadius: '100px',
//                     backgroundImage: `url(${process.env.REACT_APP_PROD}uploads/users/${detailUser.data.data.photo})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                  }}></div>
              </div>
              <button
                type="button"
                style={{
                  width: '135px',
                  height: '40px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #2395FF',
                  color: '#2395FF',
                  borderRadius: '10px',
                  fontWeight: 'bold',
                  fontSize: '15px',
                  marginBottom: '20px'
                }}>
                Select Photo
              </button>
              {/* for username */}
              <h5 style={{ fontWeight: 'bold' }}>
                {detailUser.data.data.username || 'Your Username'}
              </h5>
              {/* for address */}
              <small style={{ color: '#6B6B6B', marginBottom: '20px' }}>
                {detailUser.data.data.address || 'Your Address'}
              </small>
              <div style={{ display: 'flex', width: '80%' }}>
                <h6
                  style={{
                    marginLeft: '0px',
                    marginRight: 'auto',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}>
                  Cards
                </h6>
                <h6
                  style={{
                    marginLeft: 'auto',
                    marginRight: '0px',
                    color: '#2395FF',
                    fontSize: '14px'
                  }}>
                  + Add
                </h6>
              </div>
              <div
                style={{
                  width: '80%',
                  height: '60px',
                  backgroundColor: '#2395FF',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '10px 25px 10px 25px',
                  marginBottom: '25px'
                }}>
                <h6 style={{ letterSpacing: '1.5px', fontSize: '14px', marginBottom: '0px' }}>
                  4441 1235 5512 5551
                </h6>
                <div style={{ display: 'flex', width: '100%', marginTop: 'auto' }}>
                  <small
                    style={{
                      marginLeft: '0px',
                      marginRight: 'auto',
                      color: '#AEFAFF',
                      fontSize: '12px'
                    }}>
                    X Card
                  </small>
                  <small
                    style={{
                      marginLeft: 'auto',
                      marginRight: '0px',
                      color: '#AEFAFF',
                      fontSize: '12px'
                    }}>
                    $ 1,440.2
                  </small>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  width: '70%',
                  alignItems: 'center',
                  marginBottom: '30px',
                  color: '#2395FF'
                }}>
                <i className="fa-solid fa-circle-user" style={{ marginLeft: '0px' }}></i>
                <small
                  style={{
                    marginLeft: '30px',
                    marginRight: 'auto',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}>
                  Profile
                </small>
                <i
                  className="fa-solid fa-angle-right"
                  style={{ marginLeft: 'auto', marginRight: '0px' }}></i>
              </div>
              <div
                style={{
                  display: 'flex',
                  width: '70%',
                  alignItems: 'center',
                  marginBottom: '30px'
                }}>
                <i className="fa-solid fa-star" style={{ marginLeft: '0px' }}></i>
                <small
                  style={{
                    marginLeft: '30px',
                    marginRight: 'auto',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}>
                  My Review
                </small>
                <i
                  className="fa-solid fa-angle-right"
                  style={{ marginLeft: 'auto', marginRight: '0px' }}></i>
              </div>
              <div
                style={{
                  display: 'flex',
                  width: '70%',
                  alignItems: 'center',
                  marginBottom: '30px'
                }}>
                <i className="fa-solid fa-gear" style={{ marginLeft: '0px' }}></i>
                <small
                  style={{
                    marginLeft: '30px',
                    marginRight: 'auto',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}>
                  Settings
                </small>
                <i
                  className="fa-solid fa-angle-right"
                  style={{ marginLeft: 'auto', marginRight: '0px' }}></i>
              </div>
              <div
                style={{
                  display: 'flex',
                  width: '70%',
                  alignItems: 'center',
                  color: '#F24545'
                }}>
                <i className="fa-solid fa-right-from-bracket" style={{ marginLeft: '0px' }}></i>
                <small
                  style={{
                    marginLeft: '30px',
                    marginRight: 'auto',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}>
                  Logout
                </small>
                <i
                  className="fa-solid fa-angle-right"
                  style={{ marginLeft: 'auto', marginRight: '0px' }}></i>
              </div>
            </div>
          </div>
          <div
            className="rightArea"
            style={{
              width: '70%',
              height: '100%',
              display: 'flex'
            }}>
            <div
              style={{
                height: '75%',
                width: '95%',
                border: 'none',
                borderRadius: '15px',
                backgroundColor: '#FFFFFF',
                marginTop: '35px',
                display: 'flex',
                flexDirection: 'column',
                padding: '30px 25px'
              }}>
              <small
                style={{
                  color: '#2395FF',
                  letterSpacing: '0.3em',
                  fontWeight: '500',
                  marginBottom: '7px'
                }}>
                PROFILE
              </small>
              <form onSubmit={(e) => onSubmit(e)}>
                <h4 style={{ fontWeight: '600', marginBottom: '30px' }}>Profile</h4>
                <div style={{ width: '100%', display: 'flex', height: '100px' }}>
                  <div
                    style={{
                      width: '50%',
                      paddingRight: '25px'
                    }}>
                    <h6 style={{ fontWeight: '600' }}>Contact</h6>
                    <small style={{ color: '#9B96AB' }}>Email</small>
                    <input
                      type="text"
                      className={style.inputForm}
                      name="email"
                      placeholder="Email"
                      value={email || ''}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        width: '100%',
                        height: '40px',
                        border: 'none',
                        borderBottom: '2px solid #D2C2FF',
                        marginBottom: '30px'
                      }}
                    />
                    <small style={{ color: '#9B96AB' }}>Phone Number</small>
                    <input
                      type="text"
                      className={style.inputForm}
                      name="phone"
                      placeholder="Phone Number"
                      value={phoneNumber || ''}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      style={{
                        width: '100%',
                        height: '40px',
                        border: 'none',
                        borderBottom: '2px solid #D2C2FF',
                        marginBottom: '30px'
                      }}
                    />

                    <div
                      style={{
                        color: '#2395FF',
                        width: '100%',
                        display: 'flex'
                      }}>
                      <h6
                        style={{
                          fontWeight: '600',
                          marginRight: '25px',
                          marginLeft: 'auto'
                        }}>
                        Account Settings
                      </h6>
                      <i
                        className="fa-solid fa-angle-right"
                        style={{ marginLeft: '0px', marginRight: '0px', paddingTop: '2px' }}></i>
                    </div>
                  </div>
                  <div
                    style={{
                      width: '50%',
                      paddingLeft: '0px'
                    }}>
                    <h6 style={{ fontWeight: '600' }}>Biodata</h6>
                    <small style={{ color: '#9B96AB' }}>Username</small>
                    <input
                      type="text"
                      className={style.inputForm}
                      name="username"
                      placeholder="Username"
                      value={username || ''}
                      onChange={(e) => setUsername(e.target.value)}
                      style={{
                        width: '100%',
                        height: '40px',
                        border: 'none',
                        borderBottom: '2px solid #D2C2FF',
                        marginBottom: '30px'
                      }}
                    />
                    <small style={{ color: '#9B96AB' }}>City</small>
                    <input
                      type="text"
                      className={style.inputForm}
                      name="city"
                      placeholder="City"
                      value={city || ''}
                      onChange={(e) => setCity(e.target.value)}
                      style={{
                        width: '100%',
                        height: '40px',
                        border: 'none',
                        borderBottom: '2px solid #D2C2FF',
                        marginBottom: '30px'
                      }}
                    />
                    <small style={{ color: '#9B96AB' }}>Address</small>
                    <input
                      type="text"
                      className={style.inputForm}
                      name="address"
                      placeholder="Address"
                      value={address || ''}
                      onChange={(e) => setAddress(e.target.value)}
                      style={{
                        width: '100%',
                        height: '40px',
                        border: 'none',
                        borderBottom: '2px solid #D2C2FF',
                        marginBottom: '30px'
                      }}
                    />
                    <small style={{ color: '#9B96AB' }}>Post Code</small>
                    <input
                      type="number"
                      className={style.inputForm}
                      name="postalcode"
                      placeholder="Post Code"
                      value={postCode || ''}
                      onChange={(e) => setPostCode(e.target.value)}
                      style={{
                        width: '100%',
                        height: '40px',
                        border: 'none',
                        borderBottom: '2px solid #D2C2FF',
                        marginBottom: '30px'
                      }}
                    />
                    <div style={{ width: '100%', display: 'flex' }}>
                      {loading ? (
                        <input
                          disabled
                          type="submit"
                          value="Save"
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                          style={{
                            width: '150px',
                            height: '50px',
                            marginLeft: 'auto',
                            marginRight: '0px',
                            backgroundColor: '#2395FF',
                            color: 'white',
                            borderRadius: '10px',
                            border: 'none',
                            fontWeight: 'bold'
                          }}
                        />
                      ) : (
                        <input
                          type="submit"
                          value="Save"
                          style={{
                            width: '150px',
                            height: '50px',
                            marginLeft: 'auto',
                            marginRight: '0px',
                            backgroundColor: '#2395FF',
                            color: 'white',
                            borderRadius: '10px',
                            border: 'none',
                            fontWeight: 'bold'
                          }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
    // <>
    //   <Navbar />

    //     <div
    //       className="container-fluid"
    //       style={{
    //         width: '100%',
    //         height: '85vh',
    //         backgroundColor: '#F5F6FA',
    //         display: 'flex',
    //         marginTop: '90px'
    //       }}>
    //       <div className="leftArea" style={{ width: '30%', height: '100%', display: 'flex' }}>
    //         <div
    //           style={{
    //             height: '80%',
    //             width: '85%',
    //             border: 'none',
    //             borderRadius: '15px',
    //             backgroundColor: '#FFFFFF',
    //             marginTop: '35px',
    //             marginLeft: '40px',
    //             display: 'flex',
    //             flexDirection: 'column',
    //             justifyContent: 'center',
    //             alignItems: 'center'
    //           }}>
    //           <div
    //             style={{
    //               height: '125px',
    //               width: '125px',
    //               backgroundColor: '#FFF',
    //               border: '3px solid #2395FF',
    //               borderRadius: '100px',
    //               display: 'flex',
    //               flexDirection: 'column',
    //               justifyContent: 'center',
    //               alignItems: 'center',
    //               marginBottom: '20px'
    //             }}>
    //             <div
    //               style={{
    //                 height: '105px',
    //                 width: '105px',
    //                 backgroundColor: '#FFF',
    //                 border: 'none',
    //                 borderRadius: '100px',
    //                 backgroundImage: `url(${process.env.REACT_APP_PROD}uploads/users/${detailUser.data.data.photo})`,
    //                 backgroundRepeat: 'no-repeat',
    //                 backgroundSize: 'cover'
    //               }}></div>
    //           </div>
    //           <button
    //             type="button"
    //             style={{
    //               width: '135px',
    //               height: '40px',
    //               backgroundColor: '#FFFFFF',
    //               border: '1px solid #2395FF',
    //               color: '#2395FF',
    //               borderRadius: '10px',
    //               fontWeight: 'bold',
    //               fontSize: '15px',
    //               marginBottom: '20px'
    //             }}>
    //             Select Photo
    //           </button>
    //           {/* for username */}
    //           <h5 style={{ fontWeight: 'bold' }}>
    //             {detailUser.data.data.username || 'Your Username'}
    //           </h5>
    //           {/* for address */}
    //           <small style={{ color: '#6B6B6B', marginBottom: '20px' }}>
    //             {detailUser.data.data.address || 'Your Address'}
    //           </small>
    //           <div style={{ display: 'flex', width: '80%' }}>
    //             <h6
    //               style={{
    //                 marginLeft: '0px',
    //                 marginRight: 'auto',
    //                 fontSize: '14px',
    //                 fontWeight: '600'
    //               }}>
    //               Cards
    //             </h6>
    //             <h6
    //               style={{
    //                 marginLeft: 'auto',
    //                 marginRight: '0px',
    //                 color: '#2395FF',
    //                 fontSize: '14px'
    //               }}>
    //               + Add
    //             </h6>
    //           </div>
    //           <div
    //             style={{
    //               width: '80%',
    //               height: '60px',
    //               backgroundColor: '#2395FF',
    //               color: '#FFFFFF',
    //               border: 'none',
    //               borderRadius: '10px',
    //               display: 'flex',
    //               flexDirection: 'column',
    //               padding: '10px 25px 10px 25px',
    //               marginBottom: '25px'
    //             }}>
    //             <h6 style={{ letterSpacing: '1.5px', fontSize: '14px', marginBottom: '0px' }}>
    //               4441 1235 5512 5551
    //             </h6>
    //             <div style={{ display: 'flex', width: '100%', marginTop: 'auto' }}>
    //               <small
    //                 style={{
    //                   marginLeft: '0px',
    //                   marginRight: 'auto',
    //                   color: '#AEFAFF',
    //                   fontSize: '12px'
    //                 }}>
    //                 X Card
    //               </small>
    //               <small
    //                 style={{
    //                   marginLeft: 'auto',
    //                   marginRight: '0px',
    //                   color: '#AEFAFF',
    //                   fontSize: '12px'
    //                 }}>
    //                 $ 1,440.2
    //               </small>
    //             </div>
    //           </div>
    //           <div
    //             style={{
    //               display: 'flex',
    //               width: '70%',
    //               alignItems: 'center',
    //               marginBottom: '30px',
    //               color: '#2395FF'
    //             }}>
    //             <i className="fa-solid fa-circle-user" style={{ marginLeft: '0px' }}></i>
    //             <small
    //               style={{
    //                 marginLeft: '30px',
    //                 marginRight: 'auto',
    //                 fontSize: '14px',
    //                 fontWeight: '600'
    //               }}>
    //               Profile
    //             </small>
    //             <i
    //               className="fa-solid fa-angle-right"
    //               style={{ marginLeft: 'auto', marginRight: '0px' }}></i>
    //           </div>
    //           <div
    //             style={{
    //               display: 'flex',
    //               width: '70%',
    //               alignItems: 'center',
    //               marginBottom: '30px'
    //             }}>
    //             <i className="fa-solid fa-star" style={{ marginLeft: '0px' }}></i>
    //             <small
    //               style={{
    //                 marginLeft: '30px',
    //                 marginRight: 'auto',
    //                 fontSize: '14px',
    //                 fontWeight: '600'
    //               }}>
    //               My Review
    //             </small>
    //             <i
    //               className="fa-solid fa-angle-right"
    //               style={{ marginLeft: 'auto', marginRight: '0px' }}></i>
    //           </div>
    //           <div
    //             style={{
    //               display: 'flex',
    //               width: '70%',
    //               alignItems: 'center',
    //               marginBottom: '30px'
    //             }}>
    //             <i className="fa-solid fa-gear" style={{ marginLeft: '0px' }}></i>
    //             <small
    //               style={{
    //                 marginLeft: '30px',
    //                 marginRight: 'auto',
    //                 fontSize: '14px',
    //                 fontWeight: '600'
    //               }}>
    //               Settings
    //             </small>
    //             <i
    //               className="fa-solid fa-angle-right"
    //               style={{ marginLeft: 'auto', marginRight: '0px' }}></i>
    //           </div>
    //           <div
    //             style={{
    //               display: 'flex',
    //               width: '70%',
    //               alignItems: 'center',
    //               color: '#F24545'
    //             }}>
    //             <i className="fa-solid fa-right-from-bracket" style={{ marginLeft: '0px' }}></i>
    //             <small
    //               style={{
    //                 marginLeft: '30px',
    //                 marginRight: 'auto',
    //                 fontSize: '14px',
    //                 fontWeight: '600'
    //               }}>
    //               Logout
    //             </small>
    //             <i
    //               className="fa-solid fa-angle-right"
    //               style={{ marginLeft: 'auto', marginRight: '0px' }}></i>
    //           </div>
    //         </div>
    //       </div>
    //       <div
    //         className="rightArea"
    //         style={{
    //           width: '70%',
    //           height: '100%',
    //           display: 'flex'
    //         }}>
    //         <div
    //           style={{
    //             height: '75%',
    //             width: '95%',
    //             border: 'none',
    //             borderRadius: '15px',
    //             backgroundColor: '#FFFFFF',
    //             marginTop: '35px',
    //             display: 'flex',
    //             flexDirection: 'column',
    //             padding: '30px 25px'
    //           }}>
    //           <small
    //             style={{
    //               color: '#2395FF',
    //               letterSpacing: '0.3em',
    //               fontWeight: '500',
    //               marginBottom: '7px'
    //             }}>
    //             PROFILE
    //           </small>
    //           <form onSubmit={(e) => onSubmit(e)}>
    //             <h4 style={{ fontWeight: '600', marginBottom: '30px' }}>Profile</h4>
    //             <div style={{ width: '100%', display: 'flex', height: '100px' }}>
    //               <div
    //                 style={{
    //                   width: '50%',
    //                   paddingRight: '25px'
    //                 }}>
    //                 <h6 style={{ fontWeight: '600' }}>Contact</h6>
    //                 <small style={{ color: '#9B96AB' }}>Email</small>
    //                 <input
    //                   type="text"
    //                   className={style.inputForm}
    //                   name="email"
    //                   placeholder="Email"
    //                   value={email || ''}
    //                   onChange={(e) => setEmail(e.target.value)}
    //                   style={{
    //                     width: '100%',
    //                     height: '40px',
    //                     border: 'none',
    //                     borderBottom: '2px solid #D2C2FF',
    //                     marginBottom: '30px'
    //                   }}
    //                 />
    //                 <small style={{ color: '#9B96AB' }}>Phone Number</small>
    //                 <input
    //                   type="text"
    //                   className={style.inputForm}
    //                   name="phone"
    //                   placeholder="Phone Number"
    //                   value={phoneNumber || ''}
    //                   onChange={(e) => setPhoneNumber(e.target.value)}
    //                   style={{
    //                     width: '100%',
    //                     height: '40px',
    //                     border: 'none',
    //                     borderBottom: '2px solid #D2C2FF',
    //                     marginBottom: '30px'
    //                   }}
    //                 />

    //                 <div
    //                   style={{
    //                     color: '#2395FF',
    //                     width: '100%',
    //                     display: 'flex'
    //                   }}>
    //                   <h6
    //                     style={{
    //                       fontWeight: '600',
    //                       marginRight: '25px',
    //                       marginLeft: 'auto'
    //                     }}>
    //                     Account Settings
    //                   </h6>
    //                   <i
    //                     className="fa-solid fa-angle-right"
    //                     style={{ marginLeft: '0px', marginRight: '0px', paddingTop: '2px' }}></i>
    //                 </div>
    //               </div>
    //               <div
    //                 style={{
    //                   width: '50%',
    //                   paddingLeft: '0px'
    //                 }}>
    //                 <h6 style={{ fontWeight: '600' }}>Biodata</h6>
    //                 <small style={{ color: '#9B96AB' }}>Username</small>
    //                 <input
    //                   type="text"
    //                   className={style.inputForm}
    //                   name="username"
    //                   placeholder="Username"
    //                   value={username || ''}
    //                   onChange={(e) => setUsername(e.target.value)}
    //                   style={{
    //                     width: '100%',
    //                     height: '40px',
    //                     border: 'none',
    //                     borderBottom: '2px solid #D2C2FF',
    //                     marginBottom: '30px'
    //                   }}
    //                 />
    //                 <small style={{ color: '#9B96AB' }}>City</small>
    //                 <input
    //                   type="text"
    //                   className={style.inputForm}
    //                   name="city"
    //                   placeholder="City"
    //                   value={city || ''}
    //                   onChange={(e) => setCity(e.target.value)}
    //                   style={{
    //                     width: '100%',
    //                     height: '40px',
    //                     border: 'none',
    //                     borderBottom: '2px solid #D2C2FF',
    //                     marginBottom: '30px'
    //                   }}
    //                 />
    //                 <small style={{ color: '#9B96AB' }}>Address</small>
    //                 <input
    //                   type="text"
    //                   className={style.inputForm}
    //                   name="address"
    //                   placeholder="Address"
    //                   value={address || ''}
    //                   onChange={(e) => setAddress(e.target.value)}
    //                   style={{
    //                     width: '100%',
    //                     height: '40px',
    //                     border: 'none',
    //                     borderBottom: '2px solid #D2C2FF',
    //                     marginBottom: '30px'
    //                   }}
    //                 />
    //                 <small style={{ color: '#9B96AB' }}>Post Code</small>
    //                 <input
    //                   type="number"
    //                   className={style.inputForm}
    //                   name="postalcode"
    //                   placeholder="Post Code"
    //                   value={postCode || ''}
    //                   onChange={(e) => setPostCode(e.target.value)}
    //                   style={{
    //                     width: '100%',
    //                     height: '40px',
    //                     border: 'none',
    //                     borderBottom: '2px solid #D2C2FF',
    //                     marginBottom: '30px'
    //                   }}
    //                 />
    //                 <div style={{ width: '100%', display: 'flex' }}>
    //                   <input
    //                     type="submit"
    //                     value="Save"
    //                     style={{
    //                       width: '150px',
    //                       height: '50px',
    //                       marginLeft: 'auto',
    //                       marginRight: '0px',
    //                       backgroundColor: '#2395FF',
    //                       color: 'white',
    //                       borderRadius: '10px',
    //                       border: 'none',
    //                       fontWeight: 'bold'
    //                     }}
    //                   />
    //                 </div>
    //               </div>
    //             </div>
    //           </form>
    //         </div>
    //       </div>
    //     </div>

    //   <Footer />
    // </>
  );
};

export default Profile;

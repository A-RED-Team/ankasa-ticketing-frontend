import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import bg from '../../assets/images/vector 2.png';
import line from '../../assets/icons/Line 16.svg';
import alert from '../../assets/icons/ant-design_warning-filled.svg';

const Section = styled.section`
  font-family: 'Poppins', 'sans-serif';
  margin-top: 90px;
`;

const Header = styled.div`
  background: #2395ff url(${bg});
  width: 100%;
  height: 176px;
  border-radius: 0px 0px 30px 30px;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
`;

const Body = styled.div`
  margin-top: -50px;
`;

const Card = styled.div`
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: none !important;
  border-radius: 15px !important;
`;

const Form = styled.div`
  h4 {
    margin: 0 0 20px;
    padding: 0;
    color: #000000;
    text-align: left;
  }
  .form-box {
    position: relative;
  }
  .form-box span {
    color: #9b96ab;
    width: 100%;
    margin-bottom: 30px;
    border-bottom: 2px solid rgba(210, 194, 255, 0.68);
  }
  .form-box input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    margin-bottom: 30px;
    border: none;
    border-bottom: 2px solid rgba(210, 194, 255, 0.68);
    outline: none;
    background: transparent;
  }
  .form-box label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 15px;
    color: #9b96ab;
    pointer-events: none;
    transition: 0.5s;
  }
  .form-box input:focus ~ label,
  .form-box input:valid ~ label {
    top: -20px;
    left: 0;
    font-size: 12px;
  }
  .form-box select {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    margin-bottom: 30px;
    border: none;
    outline: none;
    background: transparent;
  }
  .separator {
    border-bottom: 2px solid rgba(210, 194, 255, 0.68);
    height: 47px;
    width: 99.7%;
    margin-left: 1px;
  }
  .separator img {
    margin-left: 15px;
    margin-top: 10px;
  }
  .separator .form-box input {
    border-bottom: none;
  }
  .separator .form-box input:focus ~ label,
  .separator .form-box input:valid ~ label {
    top: -20px;
    left: -135px;
    font-size: 12px;
  }
  .separator .form-box select:focus ~ label,
  .separator .form-box select:valid ~ label {
    top: -20px;
    left: -135px;
    font-size: 12px;
  }
  .form-alert {
    background: rgba(242, 69, 69, 0.1);
    border-radius: 10px;
    margin-top: 40px;
  }
  .form-alert .card-body p {
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #595959;
  }
`;

const Checkbox = styled.div`
  position: relative;
  display: block;
  padding-left: 0rem !important;
  font-size: 14px;
  font-weight: normal;
`;

const Button = styled.button`
  border: none;
  box-sizing: border-box;
  background: #2395ff;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  border-radius: 10px;
  color: #fff;
  padding: 15px 50px;
`;

const FlightDetail = () => {
  const token = localStorage.getItem('token');
  return (
    <>
      <Navbar isLogin={token} />
      <Section className="d-sm-block d-none">
        <Header className="no-gutters pl-5 text-white">
          <div className="col-8">
            <Title>Contact Person Detail</Title>
          </div>
          <div className="col-4">
            <div className="d-flex">
              <Title>Flight Detail</Title>
              <p className="ml-auto pt-2 mr-5">View Details</p>
            </div>
          </div>
        </Header>
        <Body className="row no-gutters pl-5 pr-5">
          <div className="col-sm-8">
            <Card className="card p-2 mb-4">
              <div className="card-body">
                <Form>
                  <form action="#">
                    <div className="form-box">
                      <input type="text" id="fullname" required />
                      <label htmlFor="fullname">Full Name</label>
                    </div>
                    <div className="form-box">
                      <input type="email" id="email" required />
                      <label htmlFor="email">Email</label>
                    </div>
                    <div className="row separator">
                      <div className="col-2">
                        <div className="row">
                          <div className="col-8">
                            <div className="form-box">
                              <select name="" id="">
                                <option value="+62">+ 62</option>
                                <option value="+63">+ 63</option>
                                <option value="+64">+ 64</option>
                                <option value="+65">+ 65</option>
                                <option value="+66">+ 66</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-4">
                            <img src={line} />
                          </div>
                        </div>
                      </div>
                      <div className="col-10">
                        <div className="form-box">
                          <input type="text" id="phone" required />
                          <label htmlFor="phone">Phone Number</label>
                        </div>
                      </div>
                    </div>
                    <Card className="card form-alert">
                      <div className="card-body">
                        <p className="mb-0 ml-3">
                          <img src={alert} alt="Warning" className="mr-3" />
                          Make sure the customer data is correct.
                        </p>
                      </div>
                    </Card>
                  </form>
                </Form>
              </div>
            </Card>
            <Title>Passenger Details</Title>
            <Card className="card p-2 mb-4">
              <div className="card-body">
                <Form>
                  <form action="#">
                    <Card className="card mb-3" style={{ background: 'rgba(35, 149, 255, 0.1)' }}>
                      <div className="card-body pr-4 pl-4 pt-1 pb-1">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Passenger : 1 Adult</p>
                          <p className="mb-0 ml-auto mr-3">Same as contact person</p>
                          <div>
                            <label className="switch mt-3">
                              <input type="checkbox" />
                              <span className="slider round"></span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </Card>
                    <div className="form-box">
                      <select name="" id="" required>
                        <option selected>Mr.</option>
                        <option>Mrs.</option>
                      </select>
                      <label>Title</label>
                    </div>
                    <div className="form-box">
                      <input type="text" id="fullname" required />
                      <label htmlFor="fullname">Full Name</label>
                    </div>
                    <div className="form-box">
                      <select name="" id="" required>
                        <option selected>Mr.</option>
                        <option>Mrs.</option>
                      </select>
                      <label>Title</label>
                    </div>
                  </form>
                </Form>
              </div>
            </Card>
            <Title>Passenger Details</Title>
            <Card className="card mb-4">
              <div className="card-body">
                <div className="d-flex">
                  <Checkbox className="ml-4 mb-3">
                    <input type="checkbox" className="mr-2" name="" id="" />
                  </Checkbox>
                  <p>Travel Insurance</p>
                  <p className="ml-auto">$ 2,00</p>
                </div>
                <hr />
                <p>Get travel compensation up to $ 10.000,00</p>
              </div>
            </Card>
            <div className="d-flex justify-content-center">
              <Button className="mb-4">Proceed to Payment</Button>
            </div>
          </div>
          <div className="col-sm-4 pl-4">
            <Card className="card mb-4">
              <div className="card-body">
                <p className="mb-4">
                  <img className="mr-4" src="" alt="" />
                  Garuda Indonesia
                </p>
                <h5 className="font-weight-bold mb-4">
                  Medan INA
                  <img className="ml-3 mr-3" src="" alt="" />
                  Tokyo JPN
                </h5>
                <p className="font-size-12 mb-4">Sunday, 15 August 2020 . 12:33-15:21</p>
                <p> Refundable</p>
                <p> Can Reschedule</p>
                <hr />
                <div className="d-flex">
                  <h5>Total Payment</h5>
                  <h4 className="ml-auto">$ 145,00</h4>
                </div>
              </div>
            </Card>
          </div>
        </Body>
      </Section>
      <Footer />
    </>
  );
};

export default FlightDetail;

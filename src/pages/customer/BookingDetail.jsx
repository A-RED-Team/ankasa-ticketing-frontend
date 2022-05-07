import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/customer/Navbar';
import Footer from '../../components/customer/Footer';

// Import Images
import logo from '../../assets/images/Group 1125.svg';
import plane from '../../assets/icons/Vector.svg';
import qrcode from '../../assets/images/QR Code 1.svg';

const Section = styled.section`
  background-color: #2395ff;
  overflow: hidden;
  height: 100vh;
`;

const Card = styled.div`
  background-color: #fff;
  box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
  border-radius: 20px;
  height: 100%;
  width: 60%;
  margin-top: 85px;

  @media and (max-width: 567px) {
    width: 90%;
  }
`;

const Left = styled.div`
  border: 0.5px solid #e5e5e5;
  border-right: 2px dashed #e5e5e5;
  border-radius: 10px;
  padding: 20px;
  margin-left: -20px;
`;

const Country = styled.b`
  font-size: 20px;
  font-weight: bold;
`;

const Right = styled.div`
  height: 300px;
  border: 0.5px solid #e5e5e5;
  border-left: none;
  border-radius: 10px;
  display: flex;
  align-items: center;

  img {
    margin: 10% 0;
  }
`;

const BookingDetail = () => {
  return (
    <>
      <Navbar />
      <Section>
        <div className="row justify-content-center align-items-center">
          <h4 className="font-weight-bold mb-4 ml-5 d-md-none text-white mt-4">Booking Pass</h4>
          <Card className="p-3">
            <div className="container mt-5">
              <div className="row">
                <div className="col-10">
                  <h4 className="font-weight-bold mb-4 ml-5">Booking Pass</h4>
                </div>
                <div className="col-2">
                  <h3 className="text-info d-none d-md-block text-center">
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                  </h3>
                </div>
              </div>
              <div className="row justify-content-center mb-5">
                <Left className="col-sm-7">
                  <div className="row">
                    <div className="col-8">
                      <img src={logo} alt="Garuda Indonesia" />
                    </div>
                    <div className="col-4">
                      <Country className="mr-2">IDN</Country>
                      <img src={plane} alt="Departure" />
                      <Country className="ml-2">JPN</Country>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-4">
                      <b className="small text-muted">Code</b>
                      <p className="small">AB-221</p>
                    </div>
                    <div className="col-4">
                      <b className="small text-muted">Class</b>
                      <p className="small">Economy</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <b className="small text-muted">Terminal</b>
                      <p className="small">A</p>
                    </div>
                    <div className="col-4">
                      <b className="small text-muted">Gate</b>
                      <p className="small">221</p>
                    </div>
                  </div>
                  <b className="small text-muted">Departure</b>
                  <p className="small">Monday, 20 July ‘20 - 12:33</p>
                </Left>
                <Right className="col-sm-3">
                  <img src={qrcode} alt="QR Code" />
                </Right>
              </div>
            </div>
          </Card>
        </div>
      </Section>
      <Footer />
    </>
  );
};

export default BookingDetail;

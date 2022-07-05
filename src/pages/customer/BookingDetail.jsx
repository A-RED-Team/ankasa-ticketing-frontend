import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import moment from 'moment';
import { APP_PROD } from '../../helpers/env';
import Swal from 'sweetalert2';
import { getDetailBooking } from '../../redux/actions/detailBooking';
import Airline from '../../assets/images/airline.png';

// Import Images
// import logo from '../../assets/images/Group 1125.svg';
import plane from '../../assets/icons/Vector.svg';

const Section = styled.section`
  background-color: #2395ff;
  overflow: hidden;
  height: 100vh;

  @media screen and (max-width: 576px) {
    height: 120vh;
  }
`;

const Card = styled.div`
  background-color: #fff;
  box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
  border-radius: 20px;
  height: 100%;
  width: 60%;
  margin-top: 85px;

  @media screen and (max-width: 576px) {
    width: 90%;
  }
`;

const Left = styled.div`
  border: 0.5px solid #e5e5e5;
  border-right: 2px dashed #e5e5e5;
  border-radius: 10px;
  padding: 20px;
  margin-left: -20px;

  @media screen and (max-width: 576px) {
    border: 0.5px solid #e5e5e5;
    border-bottom: 2px dashed #e5e5e5;
  }
`;

const Country = styled.b`
  font-size: 20px;
  font-weight: bold;

  @media screen and (max-width: 576px) {
    align-items: center;
    justify-content: center;
  }
`;

const Plane = styled.div`
  display: flex;

  @media screen and (max-width: 576px) {
    align-items: center;
    justify-content: center;
  }
`;

const Going = styled.div`
  display: flex;

  @media screen and (max-width: 576px) {
    align-items: center;
    justify-content: center;
  }
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

  @media screen and (max-width: 576px) {
    margin-left: -16px;
    height: 250px;
    border: 0.5px solid #e5e5e5;
    border-top: none;

    img {
      margin: 0 auto;
    }
  }
`;

const Pass = styled.div`
  display: flex;

  @media screen and (max-width: 576px) {
    display: none;
  }
`;

const BookingDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [getQrcode, setGetQrcode] = useState('');
  const token = localStorage.getItem('token');
  const detailBooking = useSelector((state) => state.detailBooking);
  const { id } = useParams();
  const date = moment(detailBooking.data.departure_date).format(`dddd, DD MMMM 'YY`);
  const time = detailBooking.data.departure_time;
  const clas =
    detailBooking.data.class == 0
      ? 'Economy'
      : detailBooking.data.class == 1
      ? 'Business'
      : 'First Class';
  const logo = detailBooking.data.image;

  useEffect(() => {
    dispatch(getDetailBooking(id));
    if (detailBooking.data.is_active == 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please make payment first!'
      }).then(() => {
        navigate('/profile/booking');
      });
    }
    const requestImage = async () => {
      try {
        const response = await fetch(`${APP_PROD}qrcode/${id}.png`);
        if (response.status != 200) {
          setGetQrcode(`${APP_PROD}qrcode/6dee2567-ee39-4aad-b855-51cf7f7eed15.png`);
        } else {
          setGetQrcode(`${APP_PROD}qrcode/${id}.png`);
        }
      } catch (err) {
        console.log(err);
      }
    };
    requestImage();
  }, []);

  return (
    <>
      <Navbar isLogin={token} />
      <Section>
        <div className="row justify-content-center align-items-center">
          <h4 className="font-weight-bold mb-4 ml-5 d-md-none text-white mt-4">Booking Pass</h4>
          <Card className="p-3">
            <div className="container mt-5">
              <Pass className="row">
                <div className="col-10">
                  <h4 className="font-weight-bold mb-4 ml-5">Booking Pass</h4>
                </div>
                <div className="col-2">
                  <h3 className="text-info d-none d-md-block text-center">
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                  </h3>
                </div>
              </Pass>
              <div className="row justify-content-center mb-5 ">
                <Left className="col-sm-7 ">
                  <div className="row">
                    <Plane className="col-sm-8 col-12 mb-4 mb-sm-0">
                      <img
                        src={`https://drive.google.com/uc?export=view&id=${logo}`}
                        onError={(e) => {
                          e.target.src = Airline;
                        }}
                        style={{ width: '90px', height: '40px', objectFit: 'center' }}
                        alt={`${logo}`}
                      />
                    </Plane>
                    <Going className="col-sm-4 col-12">
                      <Country className="mr-2">{detailBooking.data.from_contry}</Country>
                      <img className="m-2" src={plane} alt="Departure" />
                      <Country className="ml-2">{detailBooking.data.to_contry}</Country>
                    </Going>
                  </div>
                  <div className="row mt-4">
                    <div className="col-4">
                      <b className="small text-muted">Code</b>
                      <p className="small">
                        {detailBooking.data.terminal} - {detailBooking.data.gate}
                      </p>
                    </div>
                    <div className="col-4">
                      <b className="small text-muted">Class</b>
                      <p className="small">{clas}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <b className="small text-muted">Terminal</b>
                      <p className="small">{detailBooking.data.terminal}</p>
                    </div>
                    <div className="col-4">
                      <b className="small text-muted">Gate</b>
                      <p className="small">{detailBooking.data.gate}</p>
                    </div>
                  </div>
                  <b className="small text-muted">Departure</b>
                  <p className="small">
                    {date} - {time}
                  </p>
                </Left>
                <Right className="col-sm-3 ">
                  <img
                    src={getQrcode}
                    // src={`${APP_PROD}qrcode/6dee2567-ee39-4aad-b855-51cf7f7eed15.png`}
                    alt="QR Code"
                  />
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

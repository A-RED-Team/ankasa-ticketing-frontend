import React, { useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../../components/customer/Navbar';
import Footer from '../../components/customer/Footer';
import { useSelector, useDispatch } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { useParams, useNavigate } from 'react-router-dom';
import moment from 'moment';
import { APP_PROD } from '../../helper/env';
// import Swal from 'sweetalert2';
import { getDetailBooking } from '../../redux/actions/detailBooking';

// Import Images
import logo from '../../assets/images/Group 1125.svg';
import plane from '../../assets/icons/Vector.svg';

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

  @media screen and (max-width: 567px) {
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
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const detailBooking = useSelector((state) => state.detailBooking);
  const { id } = useParams();
  const date = moment(detailBooking.data.departure_date).format(`dddd, DD MMMM 'YY`);
  const time = detailBooking.data.departure_time;
  const clas =
    detailBooking.data.class == 0
      ? 'Economy'
      : detailBooking.data.class == 1
      ? 'Buisiness'
      : 'Firts Class';
  // const logo = detailBooking.data.image

  useEffect(() => {
    dispatch(getDetailBooking(id));
    // if (detailBooking.data.code != 200) {
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Oops...',
    //     text: 'Please make payment first!'
    //   });
    //   // navigate('/booking/');
    // }
  }, []);

  return (
    <>
      <Navbar isLogin={token} />
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
                      <img
                        src={logo}
                        //src={`${APP_PROD}uploads/airlines${logo}`}
                        alt="Garuda Indonesia"
                      />
                    </div>
                    <div className="col-4">
                      <Country className="mr-2">{detailBooking.data.from_contry}</Country>
                      <img src={plane} alt="Departure" />
                      <Country className="ml-2">{detailBooking.data.to_contry}</Country>
                    </div>
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
                <Right className="col-sm-3">
                  <img
                    // src={`${APP_PROD}qrcode/${id}.png`}
                    src={`${APP_PROD}qrcode/6dee2567-ee39-4aad-b855-51cf7f7eed15.png`}
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

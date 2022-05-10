import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { APP_PROD } from '../../../helper/env';

import 'swiper/css';
import 'swiper/css/navigation';
import '../../../assets/styles/swiper.css';

import bg from '../../../assets/images/vector 3.png';
// import paris from '../../../assets/images/paris.png';
// import bali from '../../../assets/images/bali.png';
// import singapore from '../../../assets/images/singapore.png';
// import agra from '../../../assets/images/agra.png';
// import sidney from '../../../assets/images/sidney.png';

const Section = styled.section`
  height: 100vh;
  font-family: 'Poppins', 'sans-serif';
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Carousel = styled.div`
  height: 85%;
  width: 85%;
  background-color: var(--text-blue);
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: 550px !important;
  background-position: left bottom;
  border-radius: 60px;
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Text = styled.div`
  margin-top: 4em;
  margin-bottom: 2em;
`;

const Title = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: var(--text-white);
`;

const Subtitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: var(--text-white);
`;

const Decoration = styled.div`
  border: 3px solid #ffffff;
  border-radius: 50%;
  padding: 0.5em;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 125px;
`;

const Caption = styled.p`
  text-transform: uppercase;
  color: #ffffff;
  font-size: 1.2em;
`;

const index = ({ destination }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // mengecek jika destination datanya ada dan loading menjadi false
    if (destination) {
      setLoading(false);
    }
  }, [destination]);

  return (
    <Section>
      <Wrapper>
        <Carousel>
          <Text>
            <Title>top 10</Title>
            <Subtitle>Top 10 destinations</Subtitle>
          </Text>
          <Swiper
            slidesPerView={5}
            slidesPerGroup={1}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper">
            {loading ? (
              <div></div>
            ) : (
              destination.data.map((item) => (
                <SwiperSlide key={item.city_id}>
                  <div>
                    <Decoration>
                      <Image
                        src={`${APP_PROD}uploads/cities/${item.image}`}
                        alt={`${item.city_name}`}
                        style={{ width: '120px', height: '120px', objectFit: 'center' }}
                      />
                    </Decoration>
                    <Caption className="mt-4">{item.city_name}</Caption>
                  </div>
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </Carousel>
      </Wrapper>
    </Section>
  );
};

export default index;

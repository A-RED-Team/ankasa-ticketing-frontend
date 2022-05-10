import React, { useState } from 'react';
import styled from 'styled-components';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import '../../../assets/styles/swiper.css';

import bg from '../../../assets/images/vector 3.png';
import paris from '../../../assets/images/paris.png';
import bali from '../../../assets/images/bali.png';
import singapore from '../../../assets/images/singapore.png';
import agra from '../../../assets/images/agra.png';
import sidney from '../../../assets/images/sidney.png';

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

const index = () => {
  const [destinations] = useState([
    {
      id: 1,
      image: paris,
      city: 'Paris'
    },
    {
      id: 2,
      image: bali,
      city: 'Bali'
    },
    {
      id: 3,
      image: singapore,
      city: 'Singapore'
    },
    {
      id: 4,
      image: agra,
      city: 'Agra'
    },
    {
      id: 5,
      image: sidney,
      city: 'Sidney'
    },
    {
      id: 6,
      image: paris,
      city: 'Paris'
    },
    {
      id: 7,
      image: bali,
      city: 'Bali'
    },
    {
      id: 8,
      image: singapore,
      city: 'Singapore'
    },
    {
      id: 9,
      image: agra,
      city: 'Agra'
    },
    {
      id: 10,
      image: sidney,
      city: 'Sidney'
    }
  ]);

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
            {destinations.map((item) => (
              <SwiperSlide key={item.id}>
                <div>
                  <Decoration>
                    <Image src={item.image} alt={item.city} />
                  </Decoration>
                  <Caption className="mt-4">{item.city}</Caption>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Carousel>
      </Wrapper>
    </Section>
  );
};

export default index;

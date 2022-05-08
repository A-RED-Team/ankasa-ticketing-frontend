import React, { useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

import tokyo from '../../../assets/images/tokyo.svg';
import barcelona from '../../../assets/images/barcelona.svg';
import back from '../../../assets/icons/btnback.svg';

const Section = styled.section`
  height: 70vh;
  margin-top: 30px;
`;

const Container = styled.div`
  margin: 2em 8em 1em 7.4em;
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: var(--text-black);
`;

const ViewAll = styled.p`
  color: var(--text-blue);

  &:hover {
    text-decoration: underline;
    cursor: pointer;
    transition: 0.3s;
  }
`;

const Wrapper = styled.div`
  margin-right: 6em;
  margin-left: 6em;
`;

const Card = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  height: 260px;
  width: 200px;
  border-radius: 20px;
  color: #fff;
  position: relative;

  &:hover {
    box-shadow: 20px -20px rgba(115, 115, 115, 0.65), 40px -40px rgba(196, 196, 196, 0.65);
    margin: 30px 0 -30px -20px;
    transition: all 0.4s ease;
  }

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
    position: absolute;
    bottom: 0;
    border-radius: 20px;
  }
`;

const Top = styled.div`
  position: relative;
  z-index: 99;
  background-color: rgba(255, 255, 255, 0.41);
  border-radius: 20px;
  font-size: 12px;
  width: 88px;
  height: 28px;
`;

const Detail = styled.div`
  position: relative;
  z-index: 99;
  margin: 60% 0 0 10%;
`;

const Button = styled.div`
  margin-top: 20%;
  background: rgba(255, 255, 255, 0.17);
  border-radius: 50%;
  height: 20px;
  width: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const index = () => {
  const [destinations] = useState([
    {
      id: 1,
      image: tokyo,
      airline: 15,
      city: 'Tokyo',
      country: 'Japan'
    },
    {
      id: 2,
      image: barcelona,
      airline: 22,
      city: 'Barcelona',
      country: 'Spain'
    },
    {
      id: 3,
      image: tokyo,
      airline: 15,
      city: 'Tokyo',
      country: 'Japan'
    },
    {
      id: 4,
      image: barcelona,
      airline: 22,
      city: 'Barcelona',
      country: 'Spain'
    },
    {
      id: 5,
      image: tokyo,
      airline: 15,
      city: 'Tokyo',
      country: 'Japan'
    }
  ]);

  return (
    <Section>
      <Container className="d-flex justify-content-between">
        <div>
          <p style={{ textTransform: 'uppercase', color: 'var(--text-blue' }}>Trending</p>
          <Title>Trending destinations</Title>
        </div>
        <ViewAll className="mb-0">View all</ViewAll>
      </Container>
      <Wrapper className="d-flex justify-content-evenly mt-5">
        {destinations.map((item) => (
          <Card style={{ background: `url(${item.image})` }} key={item.id}>
            <Top className="mt-3 ml-3">
              <p className="ml-3 mt-1">
                <b>{item.airline}</b> Airlines
              </p>
            </Top>
            <Detail className="row">
              <div className="col-sm-8">
                <p>{item.city},</p>
                <h4 h4>{item.country}</h4>
              </div>
              <Button className="col-sm-2">
                <img src={back} alt="Back" />
              </Button>
            </Detail>
          </Card>
        ))}
      </Wrapper>
    </Section>
  );
};

export default index;
import React from 'react';
import styled from 'styled-components';

import hero2 from '../../../assets/images/hero-1.svg';
import hero1 from '../../../assets/images/hero-2.svg';
import vector from '../../../assets/images/vector 6.svg';

const Section = styled.section`
  height: 130vh;
  margin-top: 90px;
  display: flex;
  font-family: 'Poppins', 'sans-serif';
`;

const Left = styled.div`
  flex: 2.1;
`;

const Wrapper = styled.div`
  margin: 5em 4em 5em 7.4em;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 600;
  color: var(--text-gray);
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: var(--text-gainsboro);
`;

const Right = styled.div`
  flex: 0.9;
`;

const Vector = styled.div`
  margin-top: 5em;
  padding-left: 3.5em;
`;

const index = () => {
  return (
    <Section>
      <Left className="d-flex flex-column">
        <Wrapper>
          <Title>
            Find Your <span style={{ color: 'var(--text-blue)' }}>Flight</span>
          </Title>
          <Subtitle>and explore the world with us</Subtitle>
        </Wrapper>
        <div>
          <img src={hero1} alt="Tokyo" />
        </div>
      </Left>

      <Right className="d-flex flex-column">
        <div>
          <img src={hero2} alt="Tokyo" />
        </div>
        <Vector>
          <img src={vector} alt="Vector" />
        </Vector>
      </Right>
    </Section>
  );
};

export default index;

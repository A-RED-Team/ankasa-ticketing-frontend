import React, { useRef, useLayoutEffect } from 'react';
import useScrollPosition from '@react-hook/window-scroll';
import styled from 'styled-components';

const Up = styled.div`
  width: 3rem;
  height: 3rem;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: var(--text-white);
  background-color: var(--text-blue);
  font-size: 2em;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  cursor: pointer;
  display: none;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.2);
  }
  &:active {
    transform: scale(0.9);
  }
`;

const ScrollToTop = () => {
  const ref = useRef(null);
  const scrollY = useScrollPosition(60 /*fps*/);

  useLayoutEffect(() => {
    if (scrollY > 200) {
      ref.current.style.display = 'flex';
    } else {
      ref.current.style.display = 'none';
    }
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Up ref={ref} onClick={() => scrollToTop()}>
      &#x2191;
    </Up>
  );
};

export default ScrollToTop;

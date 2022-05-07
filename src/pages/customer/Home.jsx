import React from 'react';

import Navbar from '../../components/customer/Navbar';
import Hero from '../../components/customer/Hero';
import Card from '../../components/customer/Card';
import Carousel from '../../components/customer/Carousel';
import Footer from '../../components/customer/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Card />
      <Carousel />
      <Footer />
    </>
  );
};

export default Home;

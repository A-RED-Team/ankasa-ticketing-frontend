import React, { useEffect } from 'react';

import Navbar from '../../components/customer/Navbar';
import Hero from '../../components/customer/Hero';
import Card from '../../components/customer/Card';
import Carousel from '../../components/customer/Carousel';
import Footer from '../../components/customer/Footer';

import ContentLoader from 'react-content-loader';
import { useSelector, useDispatch } from 'react-redux';
import { getTrendingCity } from '../../redux/actions/trending';

const Home = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const trending = useSelector((state) => state.trending);

  useEffect(() => {
    dispatch(getTrendingCity('cities.created_at', 'ASC', 5));
  }, []);

  return (
    <>
      <Navbar isLogin={token} />
      <Hero />
      {trending.isLoading ? (
        // untuk membuat loading page
        <ContentLoader />
      ) : trending.isError ? (
        // Disini bisa memasukkan sweet alert untuk error
        <div>Error</div>
      ) : (
        // Mengirim data trending ke komponent card
        <Card trending={trending} />
      )}
      <Carousel />
      <Footer />
    </>
  );
};

export default Home;

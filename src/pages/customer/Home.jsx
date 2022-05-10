import React, { useEffect } from 'react';

import Navbar from '../../components/customer/Navbar';
import Hero from '../../components/customer/Hero';
import Card from '../../components/customer/Card';
import Carousel from '../../components/customer/Carousel';
import Footer from '../../components/customer/Footer';

import ContentLoader from 'react-content-loader';
import { useSelector, useDispatch } from 'react-redux';
import { getTrendingCity } from '../../redux/actions/trending';
import { getDestinationCity } from '../../redux/actions/topDestination';

const Home = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const trending = useSelector((state) => state.trending);
  const destination = useSelector((state) => state.topDestination);

  useEffect(() => {
    dispatch(getTrendingCity('cities.created_at', 'DESC', 5));
    dispatch(getDestinationCity('cities.created_at', 'ASC', 10));
    console.log(trending);
    console.log(destination);
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

      {destination.isLoading ? (
        // untuk membuat loading page
        <ContentLoader />
      ) : destination.isError ? (
        // Disini bisa memasukkan sweet alert untuk error
        <div>Error</div>
      ) : (
        // Mengirim data trending ke komponent destination
        <Carousel destination={destination} />
      )}
      <Footer />
    </>
  );
};

export default Home;

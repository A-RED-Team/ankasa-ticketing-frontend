import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';
import ScrollToTop from '../utils/scrollToTop';

// Main
import Explore from '../pages/Explore';
import NotFound from '../pages/NotFound';

// Auth
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import ForgotPassword from '../pages/auth/ForgotPassword';
import ResetPassword from '../pages/auth/ResetPassword';

// Customer
import SearchResult from '../pages/customer/SearchResult';
import FlightDetail from '../pages/customer/FlightDetail';
import BookingDetail from '../pages/customer/BookingDetail';
import Profile from '../pages/customer/Profile';
import MyBooking from '../pages/customer/MyBooking';

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Explore />} />
        </Route>
        <Route path="/" element={<PublicRoute />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot" element={<ForgotPassword />} />
          <Route path="reset/:token" element={<ResetPassword />} />
        </Route>
        <Route path="booking/" element={<PrivateRoute />}>
          <Route index element={<SearchResult />} />
          <Route path="detail/:id" element={<BookingDetail />} />
          <Route path="add/:flightId" element={<FlightDetail />} />
        </Route>
        <Route path="profile/" element={<PrivateRoute />}>
          <Route index element={<Profile />} />
          <Route path="booking" element={<MyBooking />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
};
export default router;

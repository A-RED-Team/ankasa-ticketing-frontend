import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from '../utils/privateRoute';
import ScrollToTop from '../utils/scrollToTop';

// Auth
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';

// Customer
import Home from '../pages/customer/Home';
import NotFound from '../pages/customer/NotFound';
import BookingDetail from '../pages/customer/BookingDetail';
import FlightDetail from '../pages/customer/FlightDetail';
import Profile from '../pages/main/Profile';

// Admin
import Dashboard from '../pages/admin/Home';
import NotFoundPage from '../pages/admin/NotFound';
import Airlines from '../pages/admin/Airlines';

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="profile/" element={<PrivateRoute />}>
          <Route index element={<Profile />} />
        </Route>
        <Route path="booking/">
          <Route path="detail" element={<BookingDetail />} />
          <Route path="add" element={<FlightDetail />} />
        </Route>
        <Route path="admin/" element={<PrivateRoute />}>
          <Route index element={<Dashboard />} />
          <Route path="airlines" element={<Airlines />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
};
export default router;

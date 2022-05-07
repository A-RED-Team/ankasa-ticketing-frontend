import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from '../utils/privateRoute';
import ScrollToTop from '../utils/scrollToTop';

// Customer
import Home from '../pages/customer/Home';
import NotFound from '../pages/customer/NotFound';
import BookingDetail from '../pages/customer/BookingDetail';

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
          <Route path="/*" element={<NotFound />} />
        </Route>
        <Route path="booking/">
          <Route path="detail" element={<BookingDetail />} />
        </Route>
        <Route path="admin/" element={<PrivateRoute />}>
          <Route index element={<Dashboard />} />
          <Route path="airlines" element={<Airlines />} />
          <Route path="admin/*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
};
export default router;

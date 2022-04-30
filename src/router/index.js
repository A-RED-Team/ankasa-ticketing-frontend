import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from '../utils/ScrollToTop';

import Home from '../pages/main/Home';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default Router;

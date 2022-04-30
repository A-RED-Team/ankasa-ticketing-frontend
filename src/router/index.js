import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../views/Login';
import Register from '../views/Register';

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login">
          <Route index element={<Login />} />
        </Route>
        <Route path="/register">
          <Route index element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default router;

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UserProvider } from "../contexts/UserContext";
import HomePage from "../pages/HomePage";
import UserPage from '../pages/UserPage';

export default function App() {

  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:user" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

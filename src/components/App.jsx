import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UserProvider } from "../contexts/UserContext";
import Header from './Header';
import HomePage from "../pages/HomePage";
import UserPage from '../pages/UserPage';
import RepositoryPage from '../pages/RepositoryPage';


export default function App() {

  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:user" element={<UserPage />} />
          <Route path="/:user/:repository" element={<RepositoryPage />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

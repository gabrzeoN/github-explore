import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { UserProvider } from "../contexts/UserContext";
// import { PageNavigationProvider } from "../contexts/PageNavigationContext";
import HomePage from "../pages/HomePage";
import Header from './Header';


export default function App() {

  return (
    // <UserProvider>
    //   <PageNavigationProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
    //   </PageNavigationProvider>
    // </UserProvider>
  );
}

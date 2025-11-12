import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

import Header from "./components/common/Header";
import Hero from "./components/common/Hero";

import AboutUs from "./components/common/AboutUs";
import Footer from "./components/common/Footer";

import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";

import Login from "./components/admin/Login";
import { ToastContainer, toast } from "react-toastify";
import Dashboard from "./components/admin/Dashboard";
import { AdminRequireAuth } from "./components/admin/AdminRequireAuth";



import TamilPage from "./components/TamilPage";
import SinhalaPage from "./components/SinhalaPage";
import EnglishPage from "./components/EnglishPage";

import ReportPage from "./components/ReportPage";






function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
         
          <Route path="/header" element={<Header />} />
          <Route path="/hero" element={<Hero />} />
         
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/Report" element={<ReportPage />} />
         
         
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
         
     
        
          <Route path="/Sinhala" element={<SinhalaPage />} />
          <Route path="/Tamil" element={<TamilPage />} />
          <Route path="/English" element={<EnglishPage />} />

          {/*Admin Process */}
          <Route path="/admin/dashboard" element={
            <AdminRequireAuth>
              <Dashboard />
            </AdminRequireAuth>
          } />
          <Route path="/admin/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;

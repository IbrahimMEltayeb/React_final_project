import React, { useState } from "react";
import Regpg from "./pages/Auth/Regpg.jsx";
import Loginpg from "./pages/Auth/Loginpg.jsx";
import Navbar from "./Layout/Navbar.jsx";
import Cart from "./pages/Cart.jsx";
import Contact from "./pages/Contact.jsx";
import Aboutus from "./pages/Aboutus.jsx";
import Userdetails from "./pages/User-details.jsx";
import Notfound from "./pages/Notfound.jsx";
import Productslist from "./pages/Products/Productslist.jsx";
import Footer from "./Layout/Footer.jsx";
import { Routes, Route } from "react-router-dom";
import Productdetails from "./pages/Products/Productdetails.jsx";
import Guide from "./pages/Products/Guide.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Loginpg />} />
        <Route path="about" element={<Aboutus />} />
        <Route path="cart" element={<Cart />} />
        <Route path="contact" element={<Contact />} />
        <Route path="home" element={<Productslist />} />
        <Route path="productslist" element={<Productslist />} />
        <Route path="logout" element={<Loginpg />} />
        <Route path="logout/reg" element={<Regpg />} />
        <Route path="login" element={<Loginpg />} />
        <Route path="reg" element={<Regpg />} />
        <Route path="*" element={<Notfound />} />
        <Route path="userdet/:id" element={<Userdetails />} /> 
        <Route path="userdet" element={<Guide />} /> 
        <Route path="productdet/:id" element={<Productdetails />} /> 
      </Routes>
      <Footer/>
    </>
  );
};

export default App;

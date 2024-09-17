import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import Newsletter from "./sections/Newsletter";
import ProductDisplay from "./Component/ProductDisplay";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Home from "./sections/Home";
import Contact from "./sections/Contact";
import { Feature } from "./sections/Features";
import AOS from "aos";
import "aos/dist/aos.css";
import { CartProvider } from "./context/CartContext"; // Import the context provider
import CartPage from "./Component/CartPage";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <CartProvider>
      <Router>
        <ToastContainer theme="dark" position="top-center" />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<ProductDisplay />} />
          <Route path="/about" element={<Feature />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Newsletter />
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;

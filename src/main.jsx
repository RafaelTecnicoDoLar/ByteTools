import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css';

import Header from './Components/Header'
import Footer from './Components/Footer'

import Home from './Components/Home'
import Contact from './Components/Contact'
import Product from './Components/Products'
import About from './Components/About'
import FAQ from './Components/Faq'
import Orders from './Components/Orders'
import Cart from './Components/Cart'
import User from './Components/User'
import PageNotFound from './Components/PageNotFound'

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contato" element={<Contact />} />
      <Route path="/produtos" element={< Product />} />
      <Route path="/sobre" element={< About />} />
      <Route path="/sobre" element={< About />} />
      <Route path="/faq" element={< FAQ />} />
      <Route path="/pedidos" element={< Orders />} />
      <Route path="/carrinho" element={< Cart />} />
      <Route path="/usuario" element={< User />} />
      <Route path="*" element={<PageNotFound />} />

    </Routes>
    <Footer />
  </BrowserRouter>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css';

import Header from './Components/Header'
import Footer from './Components/Footer'

import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import Sale from './Components/Sale'
import FAQ from './Components/Faq'
import Product from './Components/Product'
import Orders from './Components/Orders'
import Cart from './Components/Cart'
import User from './Components/User'
import PageNotFound from './Components/PageNotFound'

import Manutencao from "./Components/Manutencao";
import Pecas from "./Components/Pecas";
import Ferramentas from "./Components/Ferramentas";
import Organizacao from "./Components/Organizacao";
import Resfriamento from "./Components/Resfriamento";
import Energia from "./Components/Energia";
import Rede from "./Components/Rede"
import Perifericos from "./Components/Perifericos"

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contato" element={<Contact />} />
      <Route path="/sobre" element={< About />} />
      <Route path="/ofertas" element={< Sale />} />
      <Route path="/faq" element={< FAQ />} />
      <Route path="/pedidos" element={< Orders />} />
      <Route path="/carrinho" element={< Cart />} />
      <Route path="/usuario" element={< User />} />

      <Route path="/produtos/manutencao-e-reparo" element={< Manutencao />} />
      <Route path="/produtos/pecas-e-componentes" element={< Pecas />} />
      <Route path="/produtos/ferramentas-para-diagnostico" element={< Ferramentas />} />
      <Route path="/produtos/organizacao-e-montagem" element={< Organizacao />} />
      <Route path="/produtos/resfriamento-e-ventilacao" element={< Resfriamento />} />
      <Route path="/produtos/energia-e-protecao" element={< Energia />} />
      <Route path="/produtos/redes-e-conectividade" element={< Rede />} />
      <Route path="/produtos/perifericos-e-acessorios" element={< Perifericos />} />

      <Route path="*" element={<PageNotFound />} />

    </Routes>
    <Footer />
  </BrowserRouter>
);

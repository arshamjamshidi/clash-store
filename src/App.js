import React from "react";
import { Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

// components
import RTL from "./components/shared/RTL";
import Layout from "./components/layout/Index";
import ScrollToTop from "./components/shared/ScrollToTop";
import HomePage from "./components/home/HomePage";
import Products from "./components/products/Products";
import ProductDetails from "./components/products/ProductDetails";
import Cart from "./components/cart/Cart";
import Favorites from "./components/favorites/Favorites";
import RegisterProductForm from "./components/products/RegisterProductForm";
import Temporary from "./components/shared/Temporary";

const App = () => {
  return (
    <Provider store={store}>
      <RTL>
        <Layout>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/accounts" element={<Products />} />
            <Route path="/accounts/:slug" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/register-account" element={<RegisterProductForm />} />
            <Route path="/contact-us" element={<Temporary />} />
            <Route path="/about-us" element={<Temporary />} />
          </Routes>
        </Layout>
      </RTL>
    </Provider>
  );
};

export default App;

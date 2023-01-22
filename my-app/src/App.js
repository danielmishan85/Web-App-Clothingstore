import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import User from './pages/User';
import Admin from './pages/Admin';
import Categories from './pages/Categories';
import Category from './pages/Category';
import Product from './pages/Product';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Checkout from './pages/Checkout'
import ForgotPassword from './pages/ForgotPassword';
import MainNavBar from './components/Navigation/MainNavigation';

function App() {
  const [products, setProducts] = useState([]);

  const getData = () => {
    fetch('http://localhost:5000/api/products')
      .then((res) => (res.ok ? res.json() : { products: '' }))
      .then((data) => {
        setProducts(data.products);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
      <Router>
        <MainNavBar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/users/profile' element={<User />} />
          <Route path='/users/admin' element={<Admin />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/passwordReset' element={<ForgotPassword />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path='/brands' element={<Categories />} />
          <Route
            path='/:title'
            element={<Category categoryItems={products} />}
          />
          <Route
            path='/products/:productId'
            element={<Product products={products} />}
          />
        </Routes>
      </Router>
  );
}

export default App;

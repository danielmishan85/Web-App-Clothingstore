import React, { useEffect, useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import User from './pages/User';
import Admin from './pages/Admin';
import Categories from './pages/Categories';
import Category from './pages/Category';
import Product from './pages/Product';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import MainNavBar from './components/Navigation/MainNavigation';
import { AuthContext } from './context/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, [isLoggedIn]);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <MainNavBar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/users/profile' element={<User />} />
          <Route path='/users/admin' element={<Admin />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/passwordReset' element={<ForgotPassword />} />
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
    </AuthContext.Provider>
  );
}

export default App;

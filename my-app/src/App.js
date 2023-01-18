import React, { useEffect, useState, useCallback, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import User from './pages/User';
import Categories from './pages/Categories';
import Category from './pages/Category';
import Product from './pages/Product';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import MainNavBar from './components/Navigation/MainNavigation';
import { AuthContext } from './components/context/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [products, setProducts] = useState([]);
  const auth = useContext(AuthContext);
  console.log(isLoggedIn);
  console.log(auth.isLoggedIn);

  const sendRequest = () => {
    fetch('http://localhost:5000/api/products')
      .then((res) => (res.ok ? res.json() : { products: '' }))
      .then((data) => {
        setProducts(data.products);
      });
  };
  useEffect(() => {
    sendRequest();
  }, []);

  const login = useCallback(() => {
    setIsLoggedIn(true);
    console.log(isLoggedIn);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    console.log(isLoggedIn);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedin: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <MainNavBar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/profile' element={<User />} />
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

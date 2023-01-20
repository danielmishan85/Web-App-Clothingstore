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

// const users = [
//   {
//     id: 'u1',
//     firstName: 'Daniella',
//     lastName: 'Mishan',
//     email: 'Danielmishan85@gmail.com',
//     password: '1234556',
//     role: 'customer',
//     ordersList: [
//       {
//         products: [],
//         totalPrice: 1500,
//         date: '1/2/2022',
//         creator: 'u1',
//       },
//       {
//         products: [],
//         totalPrice: 1000,
//         date: '28/2/2022',
//         creator: 'u1',
//       },
//     ],
//   },
// ];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [products, setProducts] = useState([]);
  const [userId, setUserId] = useState('id');

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

  const setId = useCallback((id) => {
    setUserId(id);
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout, userId: userId, setId: setId }}
    >
      <Router>
        <MainNavBar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/users/:userId' element={<User />} />
          <Route
            path='/users/admin/:userId/'
            element={<Admin />}
          />
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

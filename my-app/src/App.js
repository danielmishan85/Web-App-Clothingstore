import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePageContent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import products from './data';
import CategoryItems from './components/Card/CategoryItems';
import ProductPage from './components/Products/ProductPage';
import SigninPage from './components/Profile/SigninPage';
import SignUpPage from './components/Profile/SignupPage';
import ForgotPasswordPage from './components/Profile/ForgotPasswordPage';
import React from 'react';
import { useEffect, useState } from 'react';
import CategoryPage from './components/Category/CategoryPage';

function App() {
  const [products, setProducts] = useState([]);

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

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signin' element={<SigninPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/passwordReset' element={<ForgotPasswordPage />} />
        <Route
          path='/:title'
          element={<CategoryItems categoryItems={products} />}
        />
        <Route
          path='/products/:productId'
          element={<ProductPage products={products} />}
        />
        <Route
          path='/categories'
          element={<CategoryPage categories={products} />}
        />
      </Routes>
    </Router>
  );
}

export default App;

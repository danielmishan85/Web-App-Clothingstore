import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePageContent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoryCard from "./components/Category/CategoryCard";
import products from "./data";
import CategoryItems from "./components/Card/CategoryItems";
import ProductCard from "./components/Products/ProductCard";
import ProductPage from "./components/Products/ProductPage";
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/:title"
          element={<CategoryItems categoryItems={products} />}
        />
        <Route
          path="/products/:productId"
          element={<ProductPage products={products} />}
        />
      </Routes>
    </Router>
  );
}

export default App;

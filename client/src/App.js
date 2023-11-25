import './App.css';
import Home from './pages/Home.jsx';
import ProductList from './pages/ProductList.jsx';
import Product from "./pages/Product.jsx";
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Cart from './pages/Cart.jsx';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const user = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        {/* If user is present, navigate to Home page when trying to Login. */}
        <Route path="/login" element={user? <Navigate to="/"/> : <Login />} />
        <Route path="/register" element={user? <Navigate to="/"/> : <Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

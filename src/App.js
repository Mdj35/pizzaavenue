import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/AboutUs';
import Menu from './Pages/Menu';
import FinishOrder from './Pages/FinishOrder';
import ContactUs from './Pages/ContactUs';
import OrderSuccess from './Pages/Order-Success';

// Example components for routing


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/finish-order" element={<FinishOrder />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
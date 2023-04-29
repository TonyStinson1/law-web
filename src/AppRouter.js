// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Header from './components/Header/Header';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import RequireAuth from './RequireAuth'; // Import RequireAuth

const AppRouter = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  return (
    <Router>
      <Header />
      <Routes>
        {!isAuthenticated === 'true' ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;

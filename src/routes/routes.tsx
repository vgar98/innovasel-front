import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'; // Página de inicio
import Contact from '../pages/Contact';  // Página de contacto
import AboutPage from '../pages/AboutPage';


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<AboutPage />} />
  
    </Routes>
  );
};

export default AppRoutes;
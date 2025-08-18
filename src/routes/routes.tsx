import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'; // Página de inicio
import Contact from '../pages/Contact';  // Página de contacto


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
  
    </Routes>
  );
};

export default AppRoutes;
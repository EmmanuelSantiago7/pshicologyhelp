// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './components/Login';
import Register from './components/Register';
import Resources from './components/Resources';
import Self from './components/Self';
import Chatbot from './components/Chatbot';  // Importa el Chatbot

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/self" element={<Self />} />
        </Routes>
        <div className="fixed bottom-4 right-4 z-50"> {/* Asegura que el chatbot siempre esté arriba */} 
          <Chatbot />
        </div>
      </div>
    </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import GameLobby from './components/GameLobby';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={<GameLobby />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}
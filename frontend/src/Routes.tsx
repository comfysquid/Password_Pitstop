import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PasswordGenerator from './pages/PasswordGenerator.tsx';
import PasswordTester from './pages/PasswordTester.tsx';
import Home from './pages/Home.tsx';
import Navbar from './components/Navbar.tsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generator" element={<PasswordGenerator />} />
        <Route path="/tester" element={<PasswordTester />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

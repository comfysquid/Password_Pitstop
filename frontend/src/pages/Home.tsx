import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import "../styles/button.css";

function Home() {
  return (
    <div className="container">
      <h1 className="title">Welcome to the Password Pitstop</h1>
      <p className="subtitle">Please choose an option:</p>
      <div className="button-container">
        <Link to="/generator" className="button">
          Generate Password
        </Link>
        <Link to="/tester" className="button">
          Test Password
        </Link>
      </div>
    </div>
  );
}

export default Home;

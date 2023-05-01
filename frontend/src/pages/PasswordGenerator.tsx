import axios from 'axios';
import { useState } from 'react';
import '../styles/passwordGenerator.css'
import "../styles/button.css";

function PasswordGenerator() {
  const [password, setPassword] = useState('');

  const generatePassword = async () => {
    const response = await axios.post('http://localhost:5000/generate', {
      length: 12,
    });
    setPassword(response.data.password);
  };

  return (
    <div className="container">
      <h1 className="title">Password Generator</h1>
      <div className="password-generator">
        <div className="password">{password}</div>
        <button className="button" onClick={generatePassword}>Generate Password</button>
      </div>
    </div>
  );
}

export default PasswordGenerator;
import axios from 'axios';
import { useState } from 'react';
import '../styles/passwordGenerator.css'
import "../styles/button.css";

function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);

  const generatePassword = async () => {
    const response = await axios.post('http://localhost:5000/generate', {
      length: 12,
    });
    setPassword(response.data.password);
    setCopied(false);
  };

const copyPasswordToClipboard = () => {
  navigator.clipboard.writeText(password);
  setCopied(true)
  document.querySelector(".copy-button").classList.add("copied");
};

  return (
    <div className="container">
      <h1 className="title">Password Generator</h1>
      <div className="password-generator">
        <div className="password">{password}</div>
        {password && (
          <button className={`copy-button ${copied ? 'copied' : ''}`}
          onClick={copyPasswordToClipboard}>{copied ? 'Copied!' : 'Copy to Clipboard'}</button>
        )}
        <button className="button" onClick={generatePassword}>Generate Password</button>
      </div>
    </div>
  );
}

export default PasswordGenerator;
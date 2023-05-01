import { useState } from 'react';
import axios from 'axios';
import '../styles/passwordTester.css';
import "../styles/button.css";

function PasswordTester() {
  const [password, setPassword] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await axios.post('http://localhost:5000/test', { password: password });
        setResult(response.data.message);
    } catch (error) {
        setResult(error.response.data.error);
    }
    setPassword('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="container">
      <h1 className="title">Password Tester</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="password-input">Enter password:</label>
        <input
          type="text"
          id="password-input"
          value={password}
          onChange={handlePasswordChange}
        />
        <button className="button" type="submit">Test Password</button>
      </form>
      {result && <p className="result">{result}</p>}
    </div>
  );
}

export default PasswordTester;

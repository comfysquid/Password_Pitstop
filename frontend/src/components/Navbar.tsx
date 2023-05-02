import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import logo from '../styles/logo.png';

function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <img src={logo} alt="Logo" className="logo"/>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/generator">Password Generator</Link></li>
          <li><Link to="/tester">Password Tester</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

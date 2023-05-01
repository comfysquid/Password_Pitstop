import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/generator">Password Generator</Link></li>
        <li><Link to="/tester">Password Tester</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

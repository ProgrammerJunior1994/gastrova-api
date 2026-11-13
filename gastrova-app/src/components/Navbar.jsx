
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Gastrova</h2>
      </div>

      <div className="navbar-links">
        <Link to="/">Inicio</Link>
        <Link to="/acerca-de">Acerca de</Link>
        <Link to="/contacto">Contacto</Link>
      </div>
    </nav>
  );
}

export default Navbar;

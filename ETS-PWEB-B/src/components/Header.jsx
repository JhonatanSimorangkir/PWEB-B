import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Jasa Sewa Mainan</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">Tentang</Link>
        <Link to="/contact">Kontak</Link>
      </nav>
    </header>
  );
};

export default Header;

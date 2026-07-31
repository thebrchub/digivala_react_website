import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/main.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsOpen(!isOpen);

  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  
  useEffect(() => {
    document.body.classList.add("loaded");
  }, []);

  
  const handleHomeClick = () => {
    setIsOpen(false);
    if (location.pathname === '/') {
      
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} id="header">
      <div className="nav-container">
        {}
        <Link to="/" className="logo" onClick={handleHomeClick}>
          <img src="/images/logo.svg" alt="Digivala Logo" />
        </Link>

        {}
        <nav>
          <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
            <li>
              <Link to="/" className="nav-link" onClick={handleHomeClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="nav-link" onClick={() => setIsOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/features" className="nav-link" onClick={() => setIsOpen(false)}>
                Features
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {}
        <button
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {}
      {isOpen && <div className={`overlay ${isOpen ? "active" : ""}`} onClick={toggleMenu}></div>}
    </header>
  );
}

export default Header;
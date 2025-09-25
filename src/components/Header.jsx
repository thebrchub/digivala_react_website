import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/main.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Add loaded class to body for CSS animations
  useEffect(() => {
    document.body.classList.add("loaded");
  }, []);

  // Handle logo/home click - scroll to top if already on home page
  const handleHomeClick = () => {
    setIsOpen(false);
    if (location.pathname === '/') {
      // Already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // If not on home page, React Router will navigate normally
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} id="header">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="logo" onClick={handleHomeClick}>
          <img src="/images/logo.svg" alt="Digivala Logo" />
        </Link>

        {/* Navigation Menu */}
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

        {/* Hamburger Menu */}
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

      {/* Mobile overlay */}
      {isOpen && <div className={`overlay ${isOpen ? "active" : ""}`} onClick={toggleMenu}></div>}
    </header>
  );
}

export default Header;
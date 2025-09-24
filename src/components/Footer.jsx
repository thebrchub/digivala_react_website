import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";

const Footer = () => {
  const [openModal, setOpenModal] = useState(null);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && openModal) {
        setOpenModal(null);
      }
    };

    if (openModal) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [openModal]);

  const closeModal = () => setOpenModal(null);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* Top Content */}
        <div className="footer-content">
          {/* Brand */}
          <div className="footer-brand">
            <h3>Digivala</h3>
            <p>
              Digital solutions that don't just look good – they perform.
              We make waves, not just promises.
            </p>
            <div className="social-links">
              <a
                href="https://www.facebook.com/share/1CTKot76vh/"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
              >
                <img src="src/assets/images/socials/fb.svg" alt="Facebook" />
              </a>
              <a
                href="https://www.instagram.com/digivalaofficial"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
              >
                <img src="src/assets/images/socials/insta.svg" alt="Instagram" />
              </a>
              <a
                href="https://www.linkedin.com/company/digivala"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on LinkedIn"
              >
                <img src="src/assets/images/socials/in.svg" alt="LinkedIn" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li><a href="#web-development">Web Development</a></li>
              <li><a href="#social-media">Social Media</a></li>
              <li><a href="#seo-marketing">SEO & Marketing</a></li>
              <li><a href="#brand-design">Brand Design</a></li>
              <li><a href="#content-creation">Content Creation</a></li>
            </ul>
          </div>

          {/* Company - Updated to use React Router */}
          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-links">
            <h4>Contact Info</h4>
            <ul>
              <li>Email: <a href="mailto:info@digivala.in">info@digivala.in</a></li>
              <li>
                Address:{" "}
                <span className="footer-info">
                  131 Jawahar Puram, Albatiya Road, Shahganj, Agra 282010
                </span>
              </li>
              <li>
                Phone: <a href="tel:+919119728159">+91 91197 28159</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2025 HireEdge Digital Solutions LLP. All rights reserved.</p>
          <div className="footer-bottom-links">
            <button 
              onClick={() => setOpenModal("terms")} 
              className="link-button"
              aria-label="View Terms and Conditions"
            >
              Terms & Conditions
            </button>
            <button 
              onClick={() => setOpenModal("privacy")} 
              className="link-button"
              aria-label="View Privacy Policy"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </div>

      {/* Terms Modal */}
      {openModal === "terms" && (
        <div 
          className="modal" 
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="terms-title"
        >
          <div className="modal-content">
            <button 
              className="close" 
              onClick={closeModal}
              aria-label="Close Terms and Conditions"
            >
              &times;
            </button>
            <h2 id="terms-title">📑 Terms & Conditions</h2>
            <div className="modal-body">
              <p><strong>Welcome to DIGIVALA</strong>. By using our website or services, you agree to these terms:</p>

              <h3>1. Services</h3>
              <p>DIGIVALA provides digital marketing, social media management, and ad set-up services. Deliverables are defined in agreements.</p>

              <h3>2. Payments</h3>
              <p>Payments follow agreed terms. Services are non-refundable unless stated otherwise.</p>

              <h3>3. Client Responsibilities</h3>
              <p>Clients must provide accurate info and access. DIGIVALA is not liable for delays due to incomplete input.</p>

              <h3>4. Intellectual Property</h3>
              <p>Content remains DIGIVALA's property until payment. Ownership transfers post-payment unless stated otherwise.</p>

              <h3>5. Limitation of Liability</h3>
              <p>We follow best practices but do not guarantee results. Not responsible for third-party platform issues.</p>

              <h3>6. Termination</h3>
              <p>Services can be terminated with notice. Outstanding dues must be cleared.</p>

              <h3>7. Jurisdiction</h3>
              <p>Governed by laws of India.</p>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Modal */}
      {openModal === "privacy" && (
        <div 
          className="modal" 
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-title"
        >
          <div className="modal-content">
            <button 
              className="close" 
              onClick={closeModal}
              aria-label="Close Privacy Policy"
            >
              &times;
            </button>
            <h2 id="privacy-title">🔒 Privacy Policy</h2>
            <div className="modal-body">
              <h3>1. Information We Collect</h3>
              <p>Personal info: name, email, phone, business details. Marketing data: analytics and ad access.</p>

              <h3>2. How We Use Information</h3>
              <p>To provide services, communicate updates, improve website and service quality.</p>

              <h3>3. Data Protection</h3>
              <p>We use strict security measures. Access limited to authorized team members.</p>

              <h3>4. Third-Party Sharing</h3>
              <p>We do not sell data. Shared with trusted partners only for campaigns.</p>

              <h3>5. Cookies</h3>
              <p>Cookies improve experience and analytics. Can be disabled in browser settings.</p>

              <h3>6. Your Rights</h3>
              <p>You can access, update, or delete your data anytime by contacting us.</p>

              <h3>7. Contact Us</h3>
              <p>Email <a href="mailto:info@digivala.in">info@digivala.in</a> for privacy queries.</p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
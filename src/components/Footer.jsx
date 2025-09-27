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
    <>
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
                  <img src="/images/socials/fb.svg" alt="Facebook" />
                </a>
                <a
                  href="https://www.instagram.com/digivalaofficial"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                >
                  <img src="/images/socials/insta.svg" alt="Instagram" />
                </a>
                <a
                  href="https://www.linkedin.com/company/digivala"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on LinkedIn"
                >
                  <img src="/images/socials/in.svg" alt="LinkedIn" />
                </a>
                <a
                  href="https://wa.me/919119728159"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with us on WhatsApp"
                >
                  <img src="/images/socials/wa.svg" alt="WhatsApp" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="footer-links">
              <h4>Services</h4>
              <ul>
                <li><a>Web Development</a></li>
                <li><a>Social Media</a></li>
                <li><a>SEO & Marketing</a></li>
                <li><a>Brand Design</a></li>
                <li><a>Content Creation</a></li>
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
                onClick={() => {
                  console.log("Terms button clicked");
                  setOpenModal("terms");
                }}
                className="link-button"
                aria-label="View Terms and Conditions"
              >
                Terms & Conditions
              </button>
              <button 
                onClick={() => {
                  console.log("Privacy button clicked");
                  setOpenModal("privacy");
                }}
                className="link-button"
                aria-label="View Privacy Policy"
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Terms Modal */}
      {openModal === "terms" && (
        <div 
          onClick={handleBackdropClick}
          style={{
            position: 'fixed',
            zIndex: 10000,
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            overflowY: 'auto',
            background: 'rgba(0,0,0,0.9)',
            padding: '40px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="terms-title"
        >
          <div style={{
            background: '#111',
            color: '#fff',
            padding: '30px 40px',
            borderRadius: '14px',
            maxWidth: '750px',
            width: '100%',
            position: 'relative',
            maxHeight: '80vh',
            overflowY: 'auto',
            lineHeight: '1.7'
          }}>
            <button 
              onClick={closeModal}
              aria-label="Close Terms and Conditions"
              style={{
                position: 'absolute',
                top: '20px',
                right: '30px',
                background: 'none',
                border: 'none',
                color: '#aaa',
                fontSize: '28px',
                fontWeight: 'bold',
                cursor: 'pointer',
                lineHeight: 1,
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#f97316'}
              onMouseLeave={(e) => e.target.style.color = '#aaa'}
            >
              ×
            </button>
            <h2 id="terms-title" style={{ 
              color: '#2d9dff', 
              marginBottom: '20px', 
              fontSize: '1.8rem' 
            }}>📑 Terms & Conditions</h2>
            <div className="modal-body">
              <p><strong>Welcome to DIGIVALA</strong>. By using our website or services, you agree to these terms:</p>

              <h3 style={{ 
                color: '#f6c6e6', 
                marginTop: '25px', 
                marginBottom: '10px',
                fontSize: '1.1rem' 
              }}>1. Services</h3>
              <p style={{ marginBottom: '12px', fontSize: '0.95rem' }}>DIGIVALA provides digital marketing, social media management, and ad set-up services. Deliverables are defined in agreements.</p>

              <h3 style={{ 
                color: '#f6c6e6', 
                marginTop: '25px', 
                marginBottom: '10px',
                fontSize: '1.1rem' 
              }}>2. Payments</h3>
              <p style={{ marginBottom: '12px', fontSize: '0.95rem' }}>Payments follow agreed terms. Services are non-refundable unless stated otherwise.</p>

              <h3 style={{ 
                color: '#f6c6e6', 
                marginTop: '25px', 
                marginBottom: '10px',
                fontSize: '1.1rem' 
              }}>3. Client Responsibilities</h3>
              <p style={{ marginBottom: '12px', fontSize: '0.95rem' }}>Clients must provide accurate info and access. DIGIVALA is not liable for delays due to incomplete input.</p>

              <h3 style={{ 
                color: '#f6c6e6', 
                marginTop: '25px', 
                marginBottom: '10px',
                fontSize: '1.1rem' 
              }}>4. Intellectual Property</h3>
              <p style={{ marginBottom: '12px', fontSize: '0.95rem' }}>Content remains DIGIVALA's property until payment. Ownership transfers post-payment unless stated otherwise.</p>

              <h3 style={{ 
                color: '#f6c6e6', 
                marginTop: '25px', 
                marginBottom: '10px',
                fontSize: '1.1rem' 
              }}>5. Limitation of Liability</h3>
              <p style={{ marginBottom: '12px', fontSize: '0.95rem' }}>We follow best practices but do not guarantee results. Not responsible for third-party platform issues.</p>

              <h3 style={{ 
                color: '#f6c6e6', 
                marginTop: '25px', 
                marginBottom: '10px',
                fontSize: '1.1rem' 
              }}>6. Termination</h3>
              <p style={{ marginBottom: '12px', fontSize: '0.95rem' }}>Services can be terminated with notice. Outstanding dues must be cleared.</p>

              <h3 style={{ 
                color: '#f6c6e6', 
                marginTop: '25px', 
                marginBottom: '10px',
                fontSize: '1.1rem' 
              }}>7. Jurisdiction</h3>
              <p style={{ marginBottom: '12px', fontSize: '0.95rem' }}>Governed by laws of India.</p>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Modal */}
      {openModal === "privacy" && (
        <div 
          onClick={handleBackdropClick}
          style={{
            position: 'fixed',
            zIndex: 10000,
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            overflowY: 'auto',
            background: 'rgba(0,0,0,0.9)',
            padding: '40px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-title"
        >
          <div style={{
            background: '#111',
            color: '#fff',
            padding: '30px 40px',
            borderRadius: '14px',
            maxWidth: '750px',
            width: '100%',
            position: 'relative',
            maxHeight: '80vh',
            overflowY: 'auto',
            lineHeight: '1.7'
          }}>
            <button 
              onClick={closeModal}
              aria-label="Close Privacy Policy"
              style={{
                position: 'absolute',
                top: '20px',
                right: '30px',
                background: 'none',
                border: 'none',
                color: '#aaa',
                fontSize: '28px',
                fontWeight: 'bold',
                cursor: 'pointer',
                lineHeight: 1,
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#f97316'}
              onMouseLeave={(e) => e.target.style.color = '#aaa'}
            >
              ×
            </button>
            <h2 id="privacy-title" style={{ 
              color: '#2d9dff', 
              marginBottom: '20px', 
              fontSize: '1.8rem' 
            }}>🔒 Privacy Policy</h2>
            <div className="modal-body">
              <h3 style={{ 
                color: '#f6c6e6', 
                marginTop: '25px', 
                marginBottom: '10px',
                fontSize: '1.1rem' 
              }}>1. Information We Collect</h3>
              <p style={{ marginBottom: '12px', fontSize: '0.95rem' }}>Personal info: name, email, phone, business details. Marketing data: analytics and ad access.</p>

              <h3 style={{ 
                color: '#f6c6e6', 
                marginTop: '25px', 
                marginBottom: '10px',
                fontSize: '1.1rem' 
              }}>2. How We Use Information</h3>
              <p style={{ marginBottom: '12px', fontSize: '0.95rem' }}>To provide services, communicate updates, improve website and service quality.</p>

              <h3 style={{ 
                color: '#f6c6e6', 
                marginTop: '25px', 
                marginBottom: '10px',
                fontSize: '1.1rem' 
              }}>3. Data Protection</h3>
              <p style={{ marginBottom: '12px', fontSize: '0.95rem' }}>We use strict security measures. Access limited to authorized team members.</p>

              <h3 style={{ 
                color: '#f6c6e6', 
                marginTop: '25px', 
                marginBottom: '10px',
                fontSize: '1.1rem' 
              }}>4. Third-Party Sharing</h3>
              <p style={{ marginBottom: '12px', fontSize: '0.95rem' }}>We do not sell data. Shared with trusted partners only for campaigns.</p>

              <h3 style={{ 
                color: '#f6c6e6', 
                marginTop: '25px', 
                marginBottom: '10px',
                fontSize: '1.1rem' 
              }}>5. Cookies</h3>
              <p style={{ marginBottom: '12px', fontSize: '0.95rem' }}>Cookies improve experience and analytics. Can be disabled in browser settings.</p>

              <h3 style={{ 
                color: '#f6c6e6', 
                marginTop: '25px', 
                marginBottom: '10px',
                fontSize: '1.1rem' 
              }}>6. Your Rights</h3>
              <p style={{ marginBottom: '12px', fontSize: '0.95rem' }}>You can access, update, or delete your data anytime by contacting us.</p>

              <h3 style={{ 
                color: '#f6c6e6', 
                marginTop: '25px', 
                marginBottom: '10px',
                fontSize: '1.1rem' 
              }}>7. Contact Us</h3>
              <p style={{ marginBottom: '12px', fontSize: '0.95rem' }}>Email <a href="mailto:info@digivala.in" style={{ color: 'white', textDecoration: 'underline' }}>info@digivala.in</a> for privacy queries.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
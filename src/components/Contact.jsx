import React, { useState, useEffect, useRef } from "react";

const Contact = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    document.body.classList.add("loaded");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), i * 150);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  // Handle checkbox selection
  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      mobile: form.mobile.value,
      message: form.message.value,
      brand: "digivaala",
      services: selectedServices,
    };

    try {
      const response = await fetch(
        "https://mail-porter.vercel.app/api/email/send-email/gmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
            "x-api-key": "SuperSecretApiKey123!@#",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        form.reset();
        setSelectedServices([]);
        setDropdownOpen(false);
        setSuccessModal(true);
      } else {
        const err = await response.json();
        setErrorMsg(err.message || "Failed to send. Try again later.");
      }
    } catch (error) {
      setErrorMsg("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const services = [
    "Digital Marketing",
    "Social Media Management",
    "META Ads",
    "Google Ads",
    "Web Development",
    "Logo Creation",
    "Advertising",
    "SMS Marketing",
    "Email Marketing",
  ];

  return (
    <div style={{
      padding: '8rem 0',
      textAlign: 'center',
      background: '#0a0a0a',
      color: 'white',
      minHeight: '100vh'
    }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 20px' }}>
        <div>
          <h2 style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '700',
            marginBottom: '1rem'
          }}>
            Let's Build <span style={{color: '#38bdf8'}}>Something Great Together</span>
          </h2>
          <p style={{
            color: '#a1a1aa',
            marginBottom: '2rem'
          }}>
            Got an idea, project, or collab in mind? Drop us a line — we'd love to hear from you.
          </p>

          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              required 
              style={{
                padding: '1rem 1.5rem',
                background: '#1a1a1a',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                color: 'white',
                outline: 'none',
                fontSize: '1rem'
              }}
            />
            
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              required 
              style={{
                padding: '1rem 1.5rem',
                background: '#1a1a1a',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                color: 'white',
                outline: 'none',
                fontSize: '1rem'
              }}
            />
            
            <input
              type="tel"
              name="mobile"
              placeholder="Your Phone Number"
              pattern="[0-9]{10}"
              required
              style={{
                padding: '1rem 1.5rem',
                background: '#1a1a1a',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                color: 'white',
                outline: 'none',
                fontSize: '1rem'
              }}
            />

            {/* Simplified Service Dropdown */}
            <div style={{ position: 'relative' }} ref={dropdownRef}>
              <div
                onClick={() => setDropdownOpen(!dropdownOpen)}
                style={{
                  padding: '1rem 1.5rem',
                  background: '#1a1a1a',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  color: 'white',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '1rem'
                }}
              >
                <span>
                  {selectedServices.length > 0
                    ? selectedServices.join(", ")
                    : "Select Services"}
                </span>
                <span style={{
                  transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                  color: '#f97316'
                }}>▼</span>
              </div>

              {dropdownOpen && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: '0',
                  right: '0',
                  background: '#1a1a1a',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  marginTop: '4px',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
                  zIndex: 1000,
                  maxHeight: '250px',
                  overflowY: 'auto'
                }}>
                  {services.map((service, index) => (
                    <label key={service} style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '10px 15px',
                      cursor: 'pointer',
                      borderBottom: index < services.length - 1 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
                      transition: 'background 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.05)'}
                    onMouseLeave={(e) => e.target.style.background = 'transparent'}>
                      <input
                        type="checkbox"
                        value={service}
                        checked={selectedServices.includes(service)}
                        onChange={() => toggleService(service)}
                        style={{
                          appearance: 'none',
                          width: '18px',
                          height: '18px',
                          border: '2px solid #f97316',
                          borderRadius: '50%',
                          marginRight: '10px',
                          position: 'relative',
                          cursor: 'pointer',
                          background: selectedServices.includes(service) ? '#f97316' : 'transparent'
                        }}
                      />
                      {selectedServices.includes(service) && (
                        <span style={{
                          position: 'absolute',
                          marginLeft: '-24px',
                          color: 'white',
                          fontSize: '12px',
                          pointerEvents: 'none'
                        }}>✓</span>
                      )}
                      <span style={{ color: 'white' }}>{service}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              style={{
                padding: '1rem 1.5rem',
                background: '#1a1a1a',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                color: 'white',
                outline: 'none',
                fontSize: '1rem',
                resize: 'vertical'
              }}
            />

            <button type="submit" disabled={loading} style={{
              padding: '1rem 2rem',
              background: 'linear-gradient(135deg, #f97316, #ea580c)',
              border: 'none',
              borderRadius: '50px',
              color: 'white',
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.15rem',
              fontWeight: '600',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              opacity: loading ? 0.7 : 1
            }}>
              {loading ? (
                <span style={{
                  width: '18px',
                  height: '18px',
                  border: '3px solid rgba(255, 255, 255, 0.3)',
                  borderTop: '3px solid #fff',
                  borderRadius: '50%',
                  animation: 'spin 0.7s linear infinite',
                  display: 'inline-block'
                }}>
                </span>
              ) : "Send Message"}
            </button>

            {errorMsg && <p style={{color: '#f87171', fontSize: '14px'}}>{errorMsg}</p>}
          </form>
          

        </div>
      </div>

      {/* Success Modal */}
      {successModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000
        }}>
          <div style={{
            background: '#1a1a1a',
            padding: '2rem',
            borderRadius: '12px',
            textAlign: 'center',
            maxWidth: '400px',
            width: '90%',
            border: '1px solid rgba(99,102,241,0.3)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}>
            <h3 style={{marginBottom: '0.5rem', color: '#fff'}}>🎉 Message Sent Successfully!</h3>
            <p style={{color: '#a1a1aa'}}>Our team will get back to you within 24 hours.</p>
            <button 
              onClick={() => setSuccessModal(false)}
              style={{
                marginTop: '1rem',
                padding: '10px 20px',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                border: 'none',
                borderRadius: '8px',
                color: '#fff',
                cursor: 'pointer'
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
      
      <style jsx>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
import React, { useState, useEffect, useRef } from "react";
import "../styles/main.css";

const Contact = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    document.body.classList.add("loaded");

    // Fade-in animation
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
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  // Handle checkbox selection
  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
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
      const response = await fetch("https://mail-porter.vercel.app/api/email/send-email/gmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          "x-api-key": "SuperSecretApiKey123!@#",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("✅ Message sent successfully!");
        form.reset();
        setSelectedServices([]);
        setDropdownOpen(false);
      } else {
        const err = await response.json();
        alert("❌ Failed to send: " + (err.message || response.statusText));
      }
    } catch (error) {
      console.error(error);
      alert("⚠️ Something went wrong. Please try again later.");
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
    <section className="contact fade-in" id="contact">
      <div className="container">
        <div className="contact-content">
          <h2>
            Let&apos;s Build <span className="highlight">Something Great Together</span>
          </h2>
          <p>
            Got an idea, project, or collab in mind? Drop us a line — we&apos;d love to hear from you.
          </p>

          <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
            <input type="text" className="input-field" name="name" placeholder="Your Name" required />
            <input type="email" className="input-field" name="email" placeholder="Your Email" required />
            <input
              type="tel"
              className="input-field"
              name="mobile"
              placeholder="Your Phone Number"
              pattern="[0-9]{10}"
              required
            />

            {/* Service Dropdown */}
            <div className="custom-multiselect" ref={dropdownRef}>
              <div
                className="select-box"
                onClick={() => setDropdownOpen((prev) => !prev)}
                role="button"
                tabIndex="0"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setDropdownOpen((prev) => !prev);
                  }
                }}
              >
                <span>
                  {selectedServices.length > 0 ? selectedServices.join(", ") : "Select Services"}
                </span>
                <i className={`arrow ${dropdownOpen ? 'arrow-up' : ''}`}></i>
              </div>
              
              {dropdownOpen && (
                <div className="options-container">
                  {[
                    "Digital Marketing",
                    "Social Media Management",
                    "META Ads",
                    "Google Ads",
                    "Web Development",
                    "Logo Creation",
                    "Advertising",
                    "SMS Marketing",
                    "Email Marketing",
                  ].map((service) => (
                    <label key={service}>
                      <input
                        type="checkbox"
                        value={service}
                        checked={selectedServices.includes(service)}
                        onChange={() => toggleService(service)}
                      />
                      {service}
                    </label>
                  ))}
                </div>
              )}
            </div>

            <textarea
              className="input-field"
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
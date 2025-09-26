import React, { useState, useEffect, useRef } from "react";
import "../styles/main.css";

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
              >
                <span>
                  {selectedServices.length > 0
                    ? selectedServices.join(", ")
                    : "Select Services"}
                </span>
                <i className={`arrow ${dropdownOpen ? "arrow-up" : ""}`}></i>
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

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? <span className="loader"></span> : "Send Message"}
            </button>

            {errorMsg && <p className="error-text">{errorMsg}</p>}
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {successModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>🎉 Message Sent Successfully!</h3>
            <p>Our team will get back to you within 24 hours.</p>
            <button className="close-btn" onClick={() => setSuccessModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;

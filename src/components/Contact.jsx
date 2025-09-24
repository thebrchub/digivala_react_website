import React, { useState, useEffect } from "react";
import "../styles/main.css";// single global stylesheet

const Contact = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
      } else {
        const err = await response.json();
        alert("❌ Failed to send: " + (err.message || response.statusText));
      }
    } catch (error) {
      console.error(error);
      alert("⚠️ Something went wrong. Please try again later.");
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
            <div className="custom-multiselect">
              <div
                className="select-box"
                id="serviceSelectBox"
                onClick={() => setDropdownOpen((prev) => !prev)}
              >
                <span id="selectedServices">
                  {selectedServices.length > 0 ? selectedServices.join(", ") : "Select Services"}
                </span>
                <i className="arrow"></i>
              </div>
              {dropdownOpen && (
                <div className="options-container" id="servicesOptions">
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

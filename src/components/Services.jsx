import React, { useEffect } from "react";
import "../styles/main.css";

const servicesData = [
  { video: "/videos/1.mp4", title: "Digital Marketing", description: "Build powerful strategies that blend creativity and data to grow your brand online." },
  { video: "/videos/2.mp4", title: "Social Media Management", description: "We make your socials pop off with content that gets shared, saved, and screenshot." },
  { video: "/videos/3.mp4", title: "META Ads", description: "Get discovered by the right people at the right time with strategies that actually work." },
  { video: "/videos/4.mp4", title: "Google Ads", description: "Capture intent-driven traffic with smart search and display campaigns." },
  { video: "/videos/5.mp4", title: "Web Development", description: "Websites so clean they belong in a museum, yet so functional they convert like crazy." },
  { video: "/videos/6.mp4", title: "Logo Creation", description: "Logos and brands that stick in minds and hearts – the kind people tattoo on themselves." },
  { video: "/videos/7.mp4", title: "Advertising", description: "Connect with creators who actually align with your vibe and values." },
  { video: "/videos/8.mp4", title: "SMS Marketing", description: "Send direct, personal messages that connect instantly with your audience." },
  { video: "/videos/9.mp4", title: "Email Marketing", description: "Deliver personalized campaigns that nurture leads and drive conversions." },
];

const Services = () => {
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

  return (
    <section className="services fade-in" id="services">
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">
            Services That <span className="highlight">Actually Move the Needle</span>
          </h2>
        </div>
        <div className="services-grid">
          {servicesData.map((service, idx) => (
            <div className="service-card fade-in" key={idx}>
              <div className="service-video">
                <video src={service.video} autoPlay loop muted playsInline></video>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="services-cta fade-in">
          <h3 className="cta-heading">
            Your Growth.<span className="highlight"> Our Playbook.</span>
          </h3>
          <p className="cta-subtext">From ads to design, we've got the moves to keep your brand winning.</p>
          <a href="/contact/" className="cta-button">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
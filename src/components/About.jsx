// AboutScreen.jsx
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "../styles/main.css"; // existing CSS

const AboutScreen = () => {
  useEffect(() => {
    // Fade-in on page load
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.3s ease";
    requestAnimationFrame(() => { document.body.style.opacity = "1"; });

    // Add class for any global loaded styles
    document.body.classList.add("loaded");

    // Scroll to top
    window.scrollTo(0, 0);

    // IntersectionObserver for fade-in elements
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
    <>
      <Helmet>
        <title>Digivala | About Us</title>
        <meta
          name="description"
          content="Learn about Digivala: our expertise in digital marketing, web development, creative solutions, and building measurable growth for brands."
        />
        <meta
          name="keywords"
          content="Digivala, About, Digital Marketing, Web Development, Social Media, Brand Design"
        />
        <meta name="author" content="Digivala" />
        <link rel="canonical" href="https://www.digivala.in/about" />
        <link rel="icon" type="image/png" href="/images/favicon.png" />
      </Helmet>

      <section className="about fade-in" id="about">
        <div className="floating-element elem-1"></div>
        <div className="floating-element elem-2"></div>

        <div className="container">
          <div className="about-content">
            <h2 className="about-title">
              About <span className="highlight">Digivala</span>
            </h2>

            <div className="about-intro" style={{ marginBottom: "3rem" }}>
              <p style={{ fontSize: "1.25rem", fontWeight: 500, marginBottom: "1.5rem" }}>
                Welcome to <strong>DIGIVALA</strong>, your trusted partner in the digital world.
              </p>
            </div>

            <div className="about-services" style={{ marginBottom: "2.5rem" }}>
              <h3 className="section-subheading">What We Do</h3>
              <p>
                We specialize in <strong>Digital Marketing, Social Media Management, and Ad Campaign Set-up</strong>{" "}
                designed to help businesses grow faster and smarter.
              </p>
            </div>

            <div className="about-mission" style={{ marginBottom: "3rem" }}>
              <h3 className="section-subheading">Our Mission</h3>
              <p>
                As a brand powered by <strong>Legalvala</strong>, we bring professionalism, trust, and industry expertise
                to every project we handle. Our team focuses on creating tailored strategies that build your online
                presence, connect you with the right audience, and deliver measurable results.
              </p>
            </div>

            <div className="about-philosophy">
              <p>
                At <strong>DIGIVALA</strong>, we believe every brand has a story worth sharing – and we make sure yours
                reaches the right people, at the right time.
              </p>
            </div>

            {/* About Grid */}
            <div className="about-grid">
              {[
                { video: "10.mp4", title: "Expertise", desc: "A multidisciplinary team with proven expertise" },
                { video: "11.mp4", title: "Data-Driven", desc: "Strategies built on data, not guesswork" },
                { video: "15.mp4", title: "Transparency", desc: "Transparent process & measurable results" },
                { video: "12.mp4", title: "Storytelling", desc: "Creative storytelling that connects with audiences" },
                { video: "13.mp4", title: "Support", desc: "Long-term support to keep your brand thriving" },
                { video: "14.mp4", title: "Future-Ready", desc: "Future-ready solutions for tomorrow's challenges" },
              ].map((card, index) => (
                <div className="about-card fade-in" key={index}>
                  <div className="about-media">
                    <video src={`/videos/${card.video}`} autoPlay loop muted playsInline></video>
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              ))}
            </div>

            <div className="about-tagline">
              <p>
                DIGIVALA – Driving Digital Growth, <span className="highlight">Powered by Legalvala</span>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutScreen;

import React, { useEffect } from "react";
import "../styles/main.css";
import SEO from "./SEO";

const Features = () => {
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

  return (
    <>
      {/* SEO Meta Tags */}
      <SEO
        title="Our Features | Digivala"
        description="Explore Digivala’s premium features — ROI-driven results, lightning speed execution, and strategies tailored to your unique brand DNA."
        keywords="digital marketing features, SEO services, ROI growth, custom marketing strategies, Digivala"
        author="Digivala"
        canonical="https://digivala.in/features"
        ogTitle="Digivala Features"
        ogDescription="From real-time analytics to growth accelerators — see how Digivala empowers your brand."
        ogImage="https://digivala.in/images/logo_hero.jpg"
      />

      {/* Features Section */}
      <section className="features fade-in" id="features">
        <div className="container">
          <div className="features-container">
            <div className="features-content fade-in">
              <h2>
                We Don't Just Follow Trends –{" "}
                <span className="highlight">We Set Them</span>
              </h2>
              <ul className="features-list">
                <li className="feature-item">
                  <div className="feature-icon">📈</div>
                  <div className="feature-text">
                    <h3>Results That Actually Matter</h3>
                    <p>
                      No vanity metrics here. We focus on ROI, conversions, and
                      growth that impacts your bottom line.
                    </p>
                  </div>
                </li>
                <li className="feature-item">
                  <div className="feature-icon">🎯</div>
                  <div className="feature-text">
                    <h3>Strategies Built for You</h3>
                    <p>
                      Cookie-cutter solutions are for cookies. We create custom
                      strategies that fit your unique brand DNA.
                    </p>
                  </div>
                </li>
                <li className="feature-item">
                  <div className="feature-icon">⚡</div>
                  <div className="feature-text">
                    <h3>Speed That Shocks</h3>
                    <p>
                      While others are still planning, we're already executing.
                      Fast turnarounds without compromising quality.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="features-visual">
              {[
                { icon: "📊", title: "Analytics Dashboard", subtitle: "Real-time insights" },
                { icon: "🎨", title: "Creative Suite", subtitle: "Unlimited revisions" },
                { icon: "⚡", title: "Lightning Fast", subtitle: "24/7 support" },
                { icon: "🛡️", title: "Secure Hosting", subtitle: "Enterprise-grade protection" },
                { icon: "🤝", title: "Collaboration Tools", subtitle: "Work seamlessly with your team" },
                { icon: "🚀", title: "Growth Accelerator", subtitle: "Strategies for rapid scaling" },
              ].map((card) => (
                <div className="floating-card" key={card.title}>
                  <h4>
                    {card.icon} {card.title}
                  </h4>
                  <p>{card.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;

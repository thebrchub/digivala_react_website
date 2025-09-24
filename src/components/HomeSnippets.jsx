import React, { useEffect } from "react";
import "../styles/main.css";

const snippetsData = [
  {
    id: "about",
    title: "Why Brands ",
    highlight: "Choose Digivala",
    paragraphs: [
      "We're not your typical digital agency. We're creative rebels who turn bold ideas into breakthrough results. Every project is a chance to push boundaries and create something that truly resonates.",
      "From crafting standout branding to building cutting-edge digital experiences, we help businesses leave a lasting impression. Our team thrives on innovation, collaboration, and delivering results that matter."
    ],
    stats: [
      { number: "20+", label: "Projects Delivered" },
      { number: "98%", label: "Client Satisfaction" },
      { number: "3x", label: "Average ROI Boost" },
      { number: "10+", label: "Industries Served" },
      { number: "5+", label: "Years of Expertise" },
      { number: "24/7", label: "Support & Assistance" },
    ],
    cta: { text: "Our Story →", href: "/about/" }
  },
  {
    id: "services",
    title: "Services That ",
    highlight: "Actually Work",
    paragraphs: ["From strategy to execution, we handle every aspect of your digital presence with precision and creativity."],
    features: [
      { icon: "📈", name: "Digital Marketing", desc: "Build powerful strategies that blend creativity and data to grow your brand online." },
      { icon: "📱", name: "Social Media", desc: "We make your socials pop with content that gets noticed and shared." },
      { icon: "🎯", name: "META Ads", desc: "Reach the right people with campaigns that actually convert." },
      { icon: "💻", name: "Web Development", desc: "Clean, modern sites that look great and drive results." },
    ],
    cta: { text: "Explore All Services →", href: "/services/" }
  },
  {
    id: "features",
    title: "What Makes Us ",
    highlight: "Different",
    paragraphs: ["We combine cutting-edge technology with creative storytelling to deliver experiences that don't just look good – they perform."],
    features: [
      { icon: "📊", name: "Data-Driven Creativity", desc: "Every creative decision backed by insights and performance metrics" },
      { icon: "⚡", name: "Lightning-Fast Delivery", desc: "Agile workflows that get your campaigns live without compromising quality" },
      { icon: "📈", name: "Scalable Solutions", desc: "Built to grow with your business, from startup to enterprise level" },
      { icon: "🔧", name: "24/7 Support", desc: "Round-the-clock monitoring and optimization of your digital assets" },
    ],
    cta: { text: "See Features →", href: "/features/" }
  }
];

const HomeSnippets = () => {
  useEffect(() => {
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
    <section className="home-snippets">
      {snippetsData.map((snippet) => (
        <div key={snippet.id} className="snippet fade-in">
          <h2>
            {snippet.title}
            <span className="highlight">{snippet.highlight}</span>
          </h2>
          {snippet.paragraphs.map((p, idx) => <p key={idx}>{p}</p>)}

          {snippet.stats && (
            <div className="stats-grid">
              {snippet.stats.map((s, idx) => (
                <div className="stat-item" key={idx}>
                  <span className="stat-number">{s.number}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          )}

          {snippet.features && (
            <ul className="detailed-features">
              {snippet.features.map((f, idx) => (
                <li key={idx}>
                  <span className="feature-icon">{f.icon}</span>
                  <div className="feature-content">
                    <strong>{f.name}</strong>
                    <span className="feature-desc">{f.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <a href={snippet.cta.href} className="btn-secondary">{snippet.cta.text}</a>
        </div>
      ))}
    </section>
  );
};

export default HomeSnippets;

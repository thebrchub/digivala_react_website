import React, { useEffect, useRef } from "react";
import "../styles/main.css"; // make sure scrolling animation CSS exists

const testimonialsData = [
  {
    company: "E-Commerce",
    message: "Digivala completely transformed our online presence. Their creative campaigns didn't just boost engagement – they drove real business growth. The ROI exceeded all our expectations, and our conversion rates increased by 240% in just 6 months.",
    avatar: "AS",
    author: "Aarav Sharma",
    position: "CEO, GrowthMart"
  },
  {
    company: "Marketing",
    message: "Working with Digivala was a game-changer. They don't just execute – they strategize, innovate, and deliver results that matter. Our brand visibility increased by 300%, and we finally have a digital presence that matches our ambition.",
    avatar: "PV",
    author: "Priya Verma",
    position: "Marketing Head, BrightAds"
  },
  {
    company: "Fashion",
    message: "Our social media was dead until Digivala brought it to life. Their content strategy was spot-on, and the execution was flawless. Engagement rates tripled within 3 months, and we're now trending regularly in our industry.",
    avatar: "RM",
    author: "Rohit Mehta",
    position: "Founder, TrendyWear"
  },
  {
    company: "FinTech",
    message: "They don't just deliver projects, they deliver transformation. Our customer acquisition cost dropped by 45% while our lifetime value increased by 180%. Digivala isn't just a vendor – they're true growth partners.",
    avatar: "AG",
    author: "Ananya Gupta",
    position: "COO, FinEdge"
  },
  {
    company: "Food & Beverage",
    message: "Best investment we've made in our digital presence. Professional, innovative, and genuinely passionate about our success. They turned our local restaurant into a regional brand with a cult following.",
    avatar: "KP",
    author: "Karan Patel",
    position: "Director, FoodiesHub"
  },
  {
    company: "Technology",
    message: "Outstanding creativity meets strategic thinking. They helped us penetrate new markets and achieve a 320% increase in qualified leads. Their campaigns don't just look good – they convert like crazy.",
    avatar: "SN",
    author: "Sneha Nair",
    position: "VP Marketing, TechFlow"
  }
];

const Testimonials = () => {
  const trackRef = useRef(null);
  const groupRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const group = groupRef.current;

    if (!track || !group) return;

    // Clone groups for seamless scroll
    for (let i = 0; i < 2; i++) {
      const clone = group.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      track.appendChild(clone);
    }

    // Set CSS variable for animation width
    const groupWidth = group.getBoundingClientRect().width;
    track.style.setProperty("--group-width", `${groupWidth}px`);
    track.classList.add("scrolling");

    // Pause on hover
    const handleMouseEnter = () => { track.style.animationPlayState = "paused"; };
    const handleMouseLeave = () => { track.style.animationPlayState = "running"; };

    track.addEventListener("mouseenter", handleMouseEnter);
    track.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      track.removeEventListener("mouseenter", handleMouseEnter);
      track.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials-header fade-in">
          <h2 className="testimonials-title">
            Brands That Trusted Us to{" "}
            <span className="highlight-text">
              Deliver Results
            </span>
          </h2>
          <p className="testimonials-subtitle">
            Don't just take our word for it — hear from the brands we've helped transform their digital presence and achieve measurable growth
          </p>
        </div>

        <div className="testimonials-viewport">
          <div className="testimonials-track" ref={trackRef}>
            <div className="testimonials-group" ref={groupRef}>
              {testimonialsData.map((t, idx) => (
                <article className="testimonial" key={idx}>
                  <div className="company-badge">{t.company}</div>
                  <div className="testimonial-stars">
                    {[...Array(5)].map((_, i) => <div className="star" key={i}></div>)}
                  </div>
                  <div className="testimonial-message">{t.message}</div>
                  <div className="testimonial-author-row">
                    <div className="testimonial-avatar">{t.avatar}</div>
                    <div>
                      <div className="testimonial-author">{t.author}</div>
                      <div className="testimonial-position">{t.position}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

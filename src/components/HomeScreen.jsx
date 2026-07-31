
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";



import Header from "./Header";
import HeroSection from "./Hero";
import AboutSnippet from "./About";
import HomeSnippets from "./HomeSnippets";
import TestimonialsSection from "./Testimonials";

import Footer from "./Footer";


import "../styles/main.css"; 

const HomeScreen = () => {

  
  useEffect(() => {
    
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.3s ease";
    requestAnimationFrame(() => { document.body.style.opacity = "1"; });

     
    document.body.classList.add("loaded");

    
    window.scrollTo(0, 0);
  }, []);

  return (
    <>

    <Helmet>
        <title>Digivala | Premium Digital Solutions</title>
        <meta name="description" content="Digivala provides top-notch digital marketing, web development, and creative solutions." />
        <meta name="keywords" content="Digital Marketing, Web Development, SEO, Social Media, Brand Design" />
        <meta name="author" content="Digivala" />
        <link rel="canonical" href="https://digivala.in/" />
      </Helmet>

      {}
      <div className="bg-animation"></div>

      {}
      <Header />

      {}
      <HeroSection />

      {}
      {}

      {}
      <HomeSnippets />

      {}
      <TestimonialsSection />

      {}
      <section className="cta-section fade-in">
        <div className="cta-home">
          <h2>
            Ready to <span className="highlight">Skyrocket Your Brand?</span>
          </h2>
          <p>
            We craft bold, unforgettable experiences that don't just look
            amazing—they deliver results your competitors will envy.
          </p>

          <div className="hero-buttons">
  
            <Link to="/contact" className="btn-primary">
              <span>Start Your Project</span>
              <span></span>
            </Link>

            {}
            <a href="tel:9119728159" className="btn-secondary">
              <span>📞</span>
              <span>Call Us</span>
            </a>
          </div>
          
        </div>
        
      </section>
      

      
    </>
    
  );
  
};

export default HomeScreen;
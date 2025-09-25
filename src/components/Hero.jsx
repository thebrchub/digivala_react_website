import "../styles/main.css"; // single global stylesheet
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* Left Side - Content */}
        <div className="hero-content fade-in">
          <div className="hero-badge">
            <span>✨</span>
            <span>Digital Solutions That Hit Different</span>
          </div>

          <h1 className="hero-title">
            Building Brands That{" "}
            <span className="hero-highlight">Absolutely Slap</span>
          </h1>

          <p className="hero-description">
            We don't just create websites and campaigns – we craft digital
            experiences that make your audience stop scrolling and start
            engaging. From jaw-dropping designs to viral-worthy content, we're
            the secret sauce your brand needs.
          </p>

          <div className="hero-buttons">
            <Link to="/contact" className="btn-primary">
              <span>Let's Collab</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Right Side - 3D Dice */}
        <div className="hero-visual">
          <div className="hero-dice">
            {/* Logo Face */}
            {/* <div className="face front">
              <div className="face-inner">
                <img
                  src="/images/logo_hero.jpg"
                  alt="Digivala_logo"
                  className="face-img"
                />
              </div>
            </div> */}

            {/* Video Faces */}
            <div className="face front">
              <div className="face-inner">
                <video
                  src="/videos/12.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="face-video"
                ></video>
                <span>Branding</span>
              </div>
            </div>

            <div className="face back">
              <div className="face-inner">
                <video
                  src="/videos/12.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="face-video"
                ></video>
                <span>Branding</span>
              </div>
            </div>

            <div className="face right">
              <div className="face-inner">
                <video
                  src="/videos/7.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="face-video"
                ></video>
                <span>Ads</span>
              </div>
            </div>

            <div className="face left">
              <div className="face-inner">
                <video
                  src="/videos/3.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="face-video"
                ></video>
                <span>Content</span>
              </div>
            </div>

            <div className="face top">
              <div className="face-inner">
                <video
                  src="/videos/6.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="face-video"
                ></video>
                <span>Design</span>
              </div>
            </div>

            <div className="face bottom">
              <div className="face-inner">
                <video
                  src="/videos/4.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="face-video"
                ></video>
                <span>Strategy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./components/HomeScreen";
import AboutScreen from "./components/About";
import ServicesScreen from "./components/Services";
import FeaturesScreen from "./components/Features";
import ContactScreen from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop"; // 👈 import helper

function App() {
  return (
    <Router>
      {/* This ensures every route change scrolls back to top */}
      <ScrollToTop />

      <Header /> {/* Always visible */}

      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/services" element={<ServicesScreen />} />
        <Route path="/features" element={<FeaturesScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
      </Routes>

      <Footer /> {/* Always visible */}
    </Router>
  );
}

export default App;

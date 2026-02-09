import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Services";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import Intro from "./components/Intro";
import "./index.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(false);

  return (
    <>
      {/* Intro Splash Screen */}
      {!navbarVisible && <Intro showNavbar={() => setNavbarVisible(true)} />}

      {/* Main Page Content */}
      {navbarVisible && (
        <>
          {/* Navbar with modal trigger */}
          <Navbar openModal={() => setShowModal(true)} />

          <Hero />
          <About />
          <Service />
          <Testimonial />

          {/* Footer with modal trigger */}
          <Footer openModal={() => setShowModal(true)} />

          {/* Contact Modal */}
          <ContactModal
            show={showModal}
            close={() => setShowModal(false)}
          />
        </>
      )}
    </>
  );
}

export default App;

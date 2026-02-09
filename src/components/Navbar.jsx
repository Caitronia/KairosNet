import { useEffect, useState } from "react";

export default function Navbar({ openModal }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const nav = document.querySelector(".navbar-wrapper");
    const handleScroll = () => {
      if (window.scrollY > 20) nav.classList.add("scroll-on");
      else nav.classList.remove("scroll-on");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar-wrapper">
      <div className="nav-container">
        {/* Logo */}
        <a href="#" className="nav-logo">
          <img src="/logo.png" alt="Logo" height={40} />
        </a>

        {/* Nav Links */}
        <ul className={`nav-links ${isMobileOpen ? "mobile" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#aboutus">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#testimonial">Testimonials</a></li>

          {/* Mobile Contact Button */}
          {isMobileOpen && (
            <li>
                
              <button className="nav-button" onClick={openModal} >
                Contact
              </button>
            </li>
          )}
        </ul>

        {/* Desktop Contact Button */}
        <button
          className="nav-button desktop-only"
          onClick={openModal}
        >
          Contact
        </button>

        {/* Mobile hamburger / X toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? "✕" : "☰"}
        </button>
      </div>
    </nav>
  );
}

import React from "react";

const Footer = ({openModal}) => {
  return (
    <footer className="site-footer">
      <div className="container py-5">
        <div className="row gy-4">

          {/* Brand / About */}
          <div className="col-md-4">
            <img src="/logo.png" alt="Company Logo" height="40" className="mb-3" />
            <p className="footer-desc">
              We build intelligent, scalable, and secure digital solutions to help
              businesses grow in the modern tech world.
            </p>
          </div>

          {/* Services */}
          <div className="col-6 col-md-2">
            <h6 className="footer-title">Services</h6>
            <ul className="footer-links">
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Mobile Application</a></li>
              <li><a href="#">Smart Automation</a></li>
              <li><a href="#">System software</a></li>
              <li><a href="#">Internship</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-6 col-md-2">
            <h6 className="footer-title">Company</h6>
            <ul className="footer-links">
              <li><a href="#aboutus">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#testimonial">Testimonial</a></li>
              <li>
    <a
         href="#" className="contact-trigger" onClick={(e) => { e.preventDefault(); // <-- prevents page jump
                openModal();
        }}
    >
         Contact
    </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-4">
            <h6 className="footer-title">Connect With Us</h6>
            <p className="footer-desc">
              Get insights, updates, and tech trends straight to your inbox.
            </p>
            <form className="footer-form">
              <input type="email" placeholder="Email address" />
              <button type="button">Subscribe</button>
            </form>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom mt-5 pt-4 d-flex justify-content-between align-items-center flex-wrap">
          <p>© 2026 Your IT Company. All rights reserved.</p>
          <div className="footer-socials">
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="https://www.linkedin.com/company/kairosnet"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

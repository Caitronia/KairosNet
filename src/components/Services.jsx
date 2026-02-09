import React, { useRef } from "react";

const servicesData = [
  {
    title: "Web Application Development",
    description: "Scalable, secure, and modern web applications.",
    items: [
      "Custom Web Applications: Scalable applications tailored to business workflows.",
      "Dashboards & Admin Panels: Secure systems for data, users, and analytics.",
      "MVP & SaaS Development: Fast MVPs to validate startup ideas.",
    ],
  },
  {
    title: "Mobile Application Development",
    description: "High-performance Android & iOS applications.",
    items: [
      "Cross-Platform Apps: Shared codebase for Android & iOS.",
      "Business & Utility Apps: Apps that improve daily efficiency.",
      "MVP Mobile Products: Test ideas before full investment.",
    ],
  },
  {
    title: "AI Automation & Smart Tools",
    description: "Smart automation for modern businesses.",
    items: [
      "AI-Powered Automation: Reduce manual tasks using AI.",
      "Custom AI Tools: Smart solutions for workflows & data.",
      "Chatbots & Assistants: Support, onboarding, and knowledge bots.",
    ],
  },
  {
    title: "System Software & Internal Tools",
    description: "Custom systems for internal efficiency.",
    items: [
      "Internal Management Systems: Centralized business operations.",
      "Process Automation: Replace manual workflows.",
      "Reporting & Analytics: Data-driven insights and dashboards.",
    ],
  },
  {
    title: "Internship & Talent Development",
    description: "Hands-on training through Kairos Academy.",
    items: [
      "Real-Project Training: Work on live industry projects.",
      "Industry Mentorship: Learn real tools & workflows.",
      "Internship-Ready Talent: Job-ready from day one.",
    ],
  },
];

const Service = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -350 : 350,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="container-fluid py-4 mt-5" id="services">
      {/* Section Heading */}
      <div className="info-box text-center mb-5">
        <h2 style={{ fontSize: "40px" }}>
          <span className="gradient-txt">Fully Managed IT Services</span>
        </h2>
      </div>

      {/* Services Wrapper */}
      <div className="services-wrapper">
        {/* Left Arrow */}
        <button className="scroll-btn left" onClick={() => scroll("left")}>
          <i className="bi bi-chevron-left"></i>
        </button>

        {/* Scroll Area */}
        <section className="services-scroll" ref={scrollRef}>
          <div className="services-track">
            {servicesData.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="card-content">
                  <ul>
                    {service.items.map((item, idx) => (
                      <li key={idx}>
                        <strong>{item.split(":")[0]}</strong>
                        {item.split(":")[1]}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card-footer">
                  <hr />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="arrow">→</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Right Arrow */}
        <button className="scroll-btn right" onClick={() => scroll("right")}>
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    </section>
  );
};

export default Service;

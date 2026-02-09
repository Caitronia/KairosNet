export default function About() {
  return (
    <section className="about-section" id="aboutus">
      <div className="about-container">

        {/* LEFT IMAGE */}
        <div className="about-image">
          <img src="/aboutus.jpg" alt="No img" />

          <div className="stats-card">
            <div>
              <span>Projects Completed</span>
              <h3>250+</h3>
            </div>
            <div className="divider"></div>
            <div>
              <span>Client Satisfaction</span>
              <h3 className="blue">98%</h3>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <p className="tag">ABOUT US</p>
          <h1>
            Innovating the Future of<br />Digital Solutions
          </h1>

          <p className="desc">
            At KairosNet, we believe in the power of technology to transform
            businesses. Our team of dedicated experts works tirelessly to deliver
            custom solutions that not only meet your current needs but scale with
            your future ambitions.
          </p>

          <div className="features">
            <div><i className="bi bi-check-circle"></i> Award-winning support team</div>
            <div><i className="bi bi-check-circle"></i> Scalable architecture design</div>
            <div><i className="bi bi-check-circle"></i> Enterprise-grade security</div>
            <div><i className="bi bi-check-circle"></i> Continuous integration & deployment</div>
          </div>

          <button className="btn btn-discover">Discover Our Story</button>
        </div>

      </div>
    </section>
  );
}

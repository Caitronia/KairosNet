export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container text-center">

        {/* Hero Intro Button */}
        <button className="btn btn-grey-glass rounded-pill px-3 mb-3">
          <i className="bi bi-cash-coin"></i> We raised $1M as pre-seed fund
        </button>

        {/* Main Heading */}
        <h1 className="display-1 mb-4">
          We Make Everything Look <br /> As Good As You Want
        </h1>

        {/* Paragraph */}
        <p className="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, ullam.
        </p>

        {/* Buttons */}
        <div className="d-flex justify-content-center gap-3 mb-5">
          <button
            className="btn rounded-pill px-4 py-3"
            style={{ backgroundColor: "#16a1d9", color: "white" }}
          >
            Get Started
          </button>

          <button
            className="btn rounded-pill px-4 py-3"
            style={{ backgroundColor: "#fa721e", color: "white" }}
          >
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}

import React, { useState } from "react";

const testimonialData = [
  {
    name: "Choi Soobin",
    review:
      "Allows you to collaborate, experiment, and test much more effectively and efficiently.",
    image: "/catt.jpg",
    order: 1,
  },
  {
    name: "Choi Yeonjun",
    review:
      "A game-changer for our business operations. The efficiency gains are remarkable.",
    image: "/Meme.jpg",
    order: 2,
  },
  {
    name: "Choi Beomgyu",
    review:
      "The platform is incredibly intuitive and helped our team boost productivity instantly.",
    image: "/catt.jpg",
    order: 3,
  },
  {
    name: "Kang Taehyun",
    review: "Beautiful design, smooth workflow, and outstanding customer support.",
    image: "/Meme.jpg",
    order: 4,
  },
  {
    name: "Kai Hueningkai",
    review: "Everything works seamlessly. Highly recommended for growing businesses.",
    image: "/catt.jpg",
    order: 5,
  },
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbClick = (index) => {
    setActiveIndex(index);
  };

  const activeTestimonial = testimonialData[activeIndex];

  return (
    <section className="testimonial-section">
      <span id="testimonial" className="anchor-offset"></span>

      {/* Section Heading */}
      <div className="section-heading">
        <h2>Testimonial</h2>
        <p>What our clients say about us</p>
      </div>

      {/* Vertical Title */}
      <div className="review-title">Reviews</div>

      <div className="testimonial-wrapper">
        {/* Main Testimonial */}
        <div className="testimonial-main">
          <img src={activeTestimonial.image} alt={activeTestimonial.name} />

          <div className="testimonial-text">
            <span className="count">#{activeTestimonial.order}</span>
            <h3>{activeTestimonial.name}</h3>
            <p>{activeTestimonial.review}</p>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="testimonial-thumbs">
          {testimonialData.map((client, index) => (
            <img
              key={index}
              src={client.image}
              alt={client.name}
              className={activeIndex === index ? "thumb active" : "thumb"}
              onClick={() => handleThumbClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

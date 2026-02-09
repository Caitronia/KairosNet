import React, { useState, useEffect } from "react";

const ContactModal = ({ show, close }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [close]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Live phone validation: remove non-numeric
    if (name === "phone") {
      setFormData((prev) => ({ ...prev, [name]: value.replace(/\D/g, "") }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!formData.email.includes("@"))
      newErrors.email = "Email must contain @";

    if (!formData.phone.trim()) newErrors.phone = "Contact number is required";
    else if (formData.phone.length < 7)
      newErrors.phone = "Contact number is too short";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    alert("Message sent successfully ✅");
    setFormData({ name: "", email: "", phone: "", message: "" });
    close();
  };

  if (!show) return null;

  return (
    <div
  className={`modal-overlay ${show ? "active" : ""}`}
  onClick={(e) => e.target === e.currentTarget && close()}
>
  <div className="modal-box">
        <span className="modal-close" onClick={close}>
          &times;
        </span>

        <h2>Contact Us</h2>
        <p>We’d love to hear from you</p>

        <form className="modal-form" onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "invalid" : ""}
          />
          <small className="error">{errors.name}</small>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "invalid" : ""}
          />
          <small className="error">{errors.email}</small>

          <input
            type="tel"
            name="phone"
            placeholder="Contact Number"
            inputMode="numeric"
            pattern="[0-9]*"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? "invalid" : ""}
          />
          <small className="error">{errors.phone}</small>

          <textarea
            rows="4"
            name="message"
            placeholder="Your Message (optional)"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;

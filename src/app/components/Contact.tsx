// components/ContactSection.tsx
"use client"
import { useState, ChangeEvent, FormEvent } from 'react';

const Contact = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle form input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // You can process the form data here, for example sending it to an API or email service.
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>

      <div className="contact__container bd-grid">
        <form onSubmit={handleSubmit} className="contact__form">
          <input
            type="text"
            placeholder="Name"
            className="contact__input"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            className="contact__input"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            placeholder="Message"
            className="contact__input"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={10}
          ></textarea>
          <button type="submit" className="contact__button button">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;


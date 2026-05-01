'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="section" id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">
          <span className="text-gradient">Get In Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
            <div className="social-links flex flex-col gap-3">
              <a
                href="https://github.com/0xIta3hi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-light transition-colors"
              >
                → GitHub: 0xIta3hi
              </a>
              <a
                href="https://twitter.com/0xIta3hi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-light transition-colors"
              >
                → Twitter: @0xIta3hi
              </a>
              <a
                href="https://linkedin.com/in/aryan-bharadiya"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-light transition-colors"
              >
                → LinkedIn: Aryan Bharadiya
              </a>
              <a
                href="mailto:aryanbharadiyak2006@gmail.com"
                className="hover:text-accent-light transition-colors"
              >
                → Email: aryanbharadiyak2006@gmail.com
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message here..."
              />
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

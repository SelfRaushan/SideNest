import { useEffect, useState } from "react";
import styles from './Contact.module.css';

const Contact = () => {
  useEffect(() => {
    document.title = "Contact - SideNest";
  }, []);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  // Validation errors
  const [formErrors, setFormErrors] = useState({});

  // Form submission status
  const [formStatus, setFormStatus] = useState(null);

  // Validate individual fields
  const validateField = (name, value) => {
    switch(name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Enter a valid email';
        return '';
      case 'phone':
        if (value.trim()) {
          const phoneRegex = /^[0-9+\-\s]*$/;
          if (!phoneRegex.test(value)) return 'Enter a valid phone number';
        }
        return '';
      case 'subject':
        // Subject not required in your current form, but you can toggle this
        // if (!value.trim()) return 'Subject is required';
        return '';
      case 'message':
        if (!value.trim()) return 'Message is required';
        return '';
      default:
        return '';
    }
  };

  // Validate entire form
  const validateForm = () => {
    const errors = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) errors[key] = error;
    });
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle input value changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Validate field on change
    const error = validateField(name, value);
    setFormErrors(prev => ({
      ...prev,
      [name]: error,
    }));
  };

  // Submit form handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus(null);

    if (!validateForm()) {
      setFormStatus({ success: false, message: 'Please fix the errors in the form.' });
      return;
    }

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

      const response = await fetch(`${apiUrl}/form`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || 'Failed to submit form');

      setFormStatus({ success: true, message: data.message });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setFormErrors({});
    } catch (error) {
      setFormStatus({ success: false, message: error.message });
    }
  };

  return (
    <>
      <section className={styles["contact-hero-banner"]}>
        <div className={styles["contact-hero-bg"]}></div>
        <div className={styles["contact-hero-overlay"]}></div>
        <div className={styles["contact-hero-content"]}>
          <h1>Contact Us</h1>
          <p>
            Sapien, eget egestas et sociis donec mauris nulla nisl hac ornare non pellentesque nunc, amet, elit tristique sit viverra risus ornare at nunc turpis.
          </p>
        </div>
      </section>

      <div className={styles["contact-hero-wrap"]}>
        {/* LEFT: Info */}
        <section className={styles["contact-info-col"]}>
          <div>
            <div className={styles["contact-headline"]}>
              Request A Free <br />Estimate
            </div>
            <div className={styles["contact-desc-bold"]}>
              Condimentum ultrices vitae dictumst augue id porta sed accumsan ut amet varius nibh neque faucibus iaculis interdum erat eget.
            </div>
            <div className={styles["contact-desc-para"]}>
              Neque amet at sit elementum ut proin lacus vestibulum amet bibendum purus dolor turpis platea sodales senectus purus donec elit molestie scelerisque amet nullam tincidunt arcu odio enim ut nunc vel, tristique dictumst adipiscing elit ultrices.
            </div>
          </div>
          {/* Address */}
          <div className={styles["contact-details-row"]}>
            <span className={styles["contact-icon"]} title="Address">📍</span>
            <div className={styles["contact-details-group"]}>
              <span>Address</span>
              <p>123 5th Ave, New York, NY 10021</p>
            </div>
          </div>
          {/* Phone */}
          <div className={styles["contact-details-row"]}>
            <span className={styles["contact-icon"]} title="Phone">📞</span>
            <div className={styles["contact-details-group"]}>
              <span>Call Us</span>
              <a href="tel:+11234567890">+1 123 456 7890</a>
            </div>
          </div>
          {/* Email */}
          <div className={styles["contact-details-row"]}>
            <span className={styles["contact-icon"]} title="Email">✉️</span>
            <div className={styles["contact-details-group"]}>
              <span>Email Us</span>
              <a href="mailto:info@example.com">info@example.com</a>
            </div>
          </div>
          {/* Emergency/24x7 Box */}
          <div className={styles["emergency-box"]}>
            <span className={styles["contact-icon"]} style={{ background: "#fff", color: "var(--purple)" }}>📱</span>
            Emergency Roofing Service 24/7<br />
            <a style={{ color: "#fff", textDecoration: "underline" }} href="tel:+11231112345">+1 123 111 2345</a>
          </div>
        </section>

        {/* RIGHT: Contact Form */}
        <section className={styles["contact-form-col"]}>
          <form onSubmit={handleSubmit} className={styles["contact-form"]} autoComplete="off" noValidate>
            <div>
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
                value={formData.name}
                onChange={handleChange}
                aria-describedby="nameError"
                aria-invalid={!!formErrors.name}
              />
              {formErrors.name && <div id="nameError" className={styles.errorText} role="alert">{formErrors.name}</div>}
            </div>
            <div>
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@email.com"
                required
                value={formData.email}
                onChange={handleChange}
                aria-describedby="emailError"
                aria-invalid={!!formErrors.email}
              />
              {formErrors.email && <div id="emailError" className={styles.errorText} role="alert">{formErrors.email}</div>}
            </div>
            <div>
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="e.g., +1 234 567 8901"
                value={formData.phone}
                onChange={handleChange}
                aria-describedby="phoneError"
                aria-invalid={!!formErrors.phone}
              />
              {formErrors.phone && <div id="phoneError" className={styles.errorText} role="alert">{formErrors.phone}</div>}
            </div>
            <div>
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Tell us how we can help"
                value={formData.subject}
                onChange={handleChange}
                aria-describedby="subjectError"
                aria-invalid={!!formErrors.subject}
              />
              {formErrors.subject && <div id="subjectError" className={styles.errorText} role="alert">{formErrors.subject}</div>}
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Type your message here..."
                required
                rows="4"
                value={formData.message}
                onChange={handleChange}
                aria-describedby="messageError"
                aria-invalid={!!formErrors.message}
              ></textarea>
              {formErrors.message && <div id="messageError" className={styles.errorText} role="alert">{formErrors.message}</div>}
            </div>
            <button type="submit">Send Request</button>
            {formStatus && (
              <div
                className={styles.formSuccess}
                style={{ color: formStatus.success ? "green" : "red", marginTop: '10px' }}
                role="alert"
              >
                {formStatus.message}
              </div>
            )}
          </form>
        </section>
      </div>

      {/* Optional: FAQ */}
      <section className={styles["contact-faq"]}>
        <h2>Frequently Asked Questions</h2>
        <details>
          <summary>How do I reset my password?</summary>
          <p>Go to the login page and click ‘Forgot Password’ to reset your password.</p>
        </details>
        <details>
          <summary>What are your business hours?</summary>
          <p>Our team is available Monday to Friday, 10 AM to 6 PM IST.</p>
        </details>
        <details>
          <summary>How long does support take to respond?</summary>
          <p>We aim to respond within 24 hours.</p>
        </details>
      </section>

      {/* Optional: Map */}
      <section className={styles["contact-map-section"]}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.4942225273826!2d77.21919617549426!3d28.58462988537424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3a2396f5571%3A0xfb0b0ef648163f3d!2s123%2C%20Fifth%20Ave%20Rd%2C%20Lodhi%20Road%20Quarters%2C%20Lodi%20Colony%2C%20New%20Delhi%2C%20Delhi%20110003!5e0!3m2!1sen!2sin!4v1680698940247!5m2!1sen!2sin"
          width="600"
          height="320"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Our Location"
        ></iframe>
      </section>
    </>
  );
};

export default Contact;

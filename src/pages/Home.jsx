import { useEffect, useState } from 'react';
import { autoSlideStories } from '../utils/animations';
import SuccessStories from './SuccessStories';
import styles from './Home.module.css';

const Home = () => {
  // Form data and validation error state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [formStatus, setFormStatus] = useState(null); // For success/error messages

  // Validation function for individual fields
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        // Simple email regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Enter a valid email';
        return '';
      case 'phone':
        if (value.trim()) {
          // Basic phone number validation (allows digits, spaces, +, -)
          const phoneRegex = /^[0-9+\-\s]*$/;
          if (!phoneRegex.test(value)) return 'Enter a valid phone number';
        }
        return '';
      case 'subject':
        if (!value.trim()) return 'Subject is required';
        return '';
      default:
        return '';
    }
  };

  // Validate the whole form, returns true if valid
  const validateForm = () => {
    const errors = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) errors[key] = error;
    });
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle input changes and validate on change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Re-validate single field on change
    const error = validateField(name, value);
    setFormErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus(null);

    if (!validateForm()) {
      setFormStatus({ success: false, message: 'Please fix the errors above.' });
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

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit form');
      }

      setFormStatus({ success: true, message: data.message });
      // Reset form and errors after successful submit
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setFormErrors({});
    } catch (error) {
      setFormStatus({ success: false, message: error.message });
    }
  };

  useEffect(() => {
    autoSlideStories();
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className={styles.heroForex}>
        <div className={styles.heroContent}>
          <h6 className={styles.heroTagline}>Your Business, Our Expertise</h6>
          <h1>
            <span>Nest Your Ideas. Build Boldly</span>
          </h1>
          <p className={styles.heroSubtext}>
            A platform where dreamers become doers. Get ready-to-launch niche businesses,
            custom strategies for your existing venture, and expert-built execution — all under one roof.
          </p>
          <div className={styles.heroButtons}>
            <a href="#start" className={`${styles.btn} ${styles.btnOutlineRed}`}>
              Start Your Business
            </a>
          </div>
        </div>
      </section>

      {/* LOGIN SECTION */}
      <div className={styles.container}>
        <section className={styles.hero}>
          <p className={styles.subheading}>From first-time founders to scaling side hustlers.</p>
          <h1 className={styles.title}>
            We’re Your Business
            <br />
            Growth Partner.
          </h1>
          <ul className={styles.checklist}>
            <li>✅ <strong>Custom growth strategies</strong> for your goals</li>
            <li>✅ <strong>Execution services</strong> for website, funnels, ads, automation</li>
            <li>✅ <strong>Mentorship & tools</strong> to build smarter, faster</li>
          </ul>
          <div className={styles.ctaBlock}>
            <a href="tel:+917387392708" className={styles.phoneLink}>
              📞 +91 738 739 2708
            </a>
            <div className={styles.ctaText}>Book Free Discovery Call</div>
          </div>
        </section>

        {/* CONTACT FORM */}
        <section className={styles.contactForm}>
          <form id={styles.estimateForm} onSubmit={handleSubmit} noValidate>
            <h2>Request A Free Estimate</h2>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-describedby="nameError"
              aria-invalid={!!formErrors.name}
            />
            {formErrors.name && (
              <div id="nameError" className={styles.errorText} role="alert">
                {formErrors.name}
              </div>
            )}

            <input
              type="email"
              name="email"
              placeholder="Active Email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-describedby="emailError"
              aria-invalid={!!formErrors.email}
            />
            {formErrors.email && (
              <div id="emailError" className={styles.errorText} role="alert">
                {formErrors.email}
              </div>
            )}

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              aria-describedby="phoneError"
              aria-invalid={!!formErrors.phone}
            />
            {formErrors.phone && (
              <div id="phoneError" className={styles.errorText} role="alert">
                {formErrors.phone}
              </div>
            )}

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              aria-describedby="subjectError"
              aria-invalid={!!formErrors.subject}
            />
            {formErrors.subject && (
              <div id="subjectError" className={styles.errorText} role="alert">
                {formErrors.subject}
              </div>
            )}

            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit">Send Request</button>

            {formStatus && (
              <div
                className={styles.formSuccess}
                style={{ color: formStatus.success ? 'green' : 'red', marginTop: '10px' }}
                id="formSuccess"
                role="alert"
              >
                {formStatus.message}
              </div>
            )}
          </form>
        </section>
      </div>

      {/* SERVICES OVERVIEW */}
      <section id="services" className={styles.servicesSection}>
        <h2>SERVICES</h2>
        <div className={styles.servicesIcons}>
          <div className={styles.serviceItem}>
            <span className={styles.serviceIcon}>🚀</span>
            <a href="./Services">
              <h3>Ready-to-Launch Kits</h3>
            </a>
            <p>
              <small>
                Everything you need to start instantly—market research, branding, website,
                monetization, tools.
              </small>
            </p>
          </div>
          <div className={styles.serviceItem}>
            <span className={styles.serviceIcon}>📊</span>
            <a href="./Services">
              <h3>Strategy Lab</h3>
            </a>
            <p>
              <small>Custom audit, competitor analysis, growth roadmap, and automation for growth.</small>
            </p>
          </div>
          <div className={styles.serviceItem}>
            <span className={styles.serviceIcon}>🧠</span>
            <a href="./Services">
              <h3>Pro Build</h3>
            </a>
            <p>
              <small>
                End-to-end execution—website, branding, digital marketing, CRM, automation, ongoing
                support.
              </small>
            </p>
          </div>
        </div>
      </section>

      {/* PAID RESOURCES OVERVIEW */}
      <section id="resources" className={styles.paidResourcesSection}>
        <h2>Top-Selling Resources & Blueprints</h2>
        <div className={styles.resourcesList}>
          <div className={styles.resourceCard}>
            <h4>Business Startup & Growth Blueprint</h4>
            <p>
              Course + templates for launch and scaling—business plan builder, checklists, growth
              roadmap.
            </p>
            <a href="#" className={`${styles.btn} ${styles.btnOutlineRed}`}>
              Learn More
            </a>
          </div>
          <div className={styles.resourceCard}>
            <h4>Service Blueprint Templates</h4>
            <p>Editable, AI-powered process maps with CRM flows. Save hours mapping business systems.</p>
            <a href="#" className={`${styles.btn} ${styles.btnOutlineRed}`}>
              Learn More
            </a>
          </div>
          <div className={styles.resourceCard}>
            <h4>Business Plan Masterclass + Templates</h4>
            <p>9-hour course plus 50 plug-and-play templates for marketing, financials, pitch decks.</p>
            <a href="#" className={`${styles.btn} ${styles.btnOutlineRed}`}>
              Learn More
            </a>
          </div>
        </div>
        <p className={styles.resourcesNote}>
          Instant download, editable resources with lifetime updates.
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section className={styles.howItWorksSection}>
        <h2>How SideNest Works</h2>
        <div className={styles.howSteps}>
          <div className={styles.howStep}>
            <span className={styles.stepNum}>1</span>
            <h4>Pick Your Path</h4>
            <p>Choose a kit or request a customized strategy.</p>
          </div>
          <div className={styles.howStep}>
            <span className={styles.stepNum}>2</span>
            <h4>Meet Your Expert</h4>
            <p>1:1 consultation with SideNest strategists.</p>
          </div>
          <div className={styles.howStep}>
            <span className={styles.stepNum}>3</span>
            <h4>Build or Launch</h4>
            <p>We execute your plan, set up tools, hand you the keys.</p>
          </div>
          <div className={styles.howStep}>
            <span className={styles.stepNum}>4</span>
            <h4>Grow & Scale</h4>
            <p>Ongoing support, marketing, and automation help you scale.</p>
          </div>
        </div>
      </section>

      {/* PRICING SNAPSHOT */}
      <section id="pricing" className={styles.pricingSection}>
        <h2>Pricing—Launch Smarter, Grow Faster</h2>
        <div className={styles.pricingCards}>
          <div className={styles.pricingCard}>
            <h3>🚀 Starter Kit</h3>
            <p className={styles.price}>₹8,999 / $132</p>
            <ul>
              <li>Business blueprint</li>
              <li>Brand assets & checklist</li>
              <li>30-min strategy call</li>
            </ul>
            <a href="#" className={`${styles.btn} ${styles.btnOutlineRed}`}>
              Get Started
            </a>
          </div>
          <div className={styles.pricingCard}>
            <h3>📊 Strategy Lab</h3>
            <p className={styles.price}>₹15,999 / $199</p>
            <ul>
              <li>Business audit + roadmap</li>
              <li>Competition analysis</li>
              <li>60-min session</li>
            </ul>
            <a href="#" className={`${styles.btn} ${styles.btnOutlineRed}`}>
              Book a Strategy Session
            </a>
          </div>
          <div className={styles.pricingCard}>
            <h3>🧠 Pro Build</h3>
            <p className={styles.price}>₹48,000+ / $525+</p>
            <ul>
              <li>Full execution & branding</li>
              <li>Digital setup + marketing</li>
              <li>1 mo. support</li>
            </ul>
            <a href="#" className={`${styles.btn} ${styles.btnOutlineRed}`}>
              Schedule Discovery Call
            </a>
          </div>
        </div>
        <p className={styles.pricingNote}>
          International payments accepted. Invoices provided. <a href="#book">Talk to an Expert</a>
        </p>
      </section>

      {/* ADD-ONS */}
      <section className={styles.addOnsSection}>
        <h2 className={styles.addOnsTitle}>Add-Ons (Pick with Any Plan)</h2>
        <div className={styles.addOnsList}>
          <div className={styles.addOnItem}>
            <span>Strategy Call </span>
            <span>₹3,599 / $42</span>
          </div>
          <div className={styles.addOnItem}>
            <span>Logo & Brand Kit</span>
            <span>₹7,899 / $92</span>
          </div>
          <div className={styles.addOnItem}>
            <span>Social Media Pack (15 posts)</span>
            <span>₹3,999 / $46</span>
          </div>
          <div className={styles.addOnItem}>
            <span>Business Pitch Deck</span>
            <span>₹11,599 / $135</span>
          </div>
        </div>
        <div className={`${styles.addOnsList} ${styles.singleRow}`}>
          <div className={styles.addOnItem}>
            <span>Lifetime Resource Bundle</span>
            <span>₹5,999 / $69</span>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <SuccessStories />

      {/* WORK SHOWCASE (Portfolio) */}
      <section className={styles.workShowcase}>
        <h2 className={styles.workHeading}>Our Work</h2>
        <p className={styles.workSubheading}>Results that speak for themselves!</p>
        <p className={styles.workDesc}>
          Get top-tier results, proven growth strategies, and unmatched execution.
          <br />
          <strong>What others promise, we deliver—consistently! 🚀</strong>
        </p>
        <div className={styles.workImages}>
          <img src="/img/work1.jpg" alt="Client Work 1" />
          <img src="/img/work2.jpg" alt="Client Work 2" />
          <img src="/img/work3.jpg" alt="Client Work 3" />
          <img src="/img/work4.jpg" alt="Client Work 4" />
          <img src="/img/work5.jpg" alt="Client Work 5" />
          <img src="/img/work6.jpg" alt="Client Work 6" />
          <img src="/img/work7.jpg" alt="Client Work 7" />
          <img src="/img/work8.jpg" alt="Client Work 8" />
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className={styles.ctaSection} id="book">
        <h2 className={styles.ctaHeading}>Ready to take action?</h2>
        <p className={styles.ctaSubtext}>
          Whether you need a business idea or full execution support, we’ll help you launch, grow, and scale.
        </p>
        <div className={styles.ctaButtons}>
          <a href="#" className={`${styles.ctaBtn} ${styles.ctaPrimary}`}>
            📞 Book Free Strategy Call
          </a>
          <a href="#" className={`${styles.ctaBtn} ${styles.ctaSecondary}`}>
            🚀 Explore Ready Kits
          </a>
        </div>
      </section>
      {/* FOOTER */}
    </>
  );
};

export default Home;

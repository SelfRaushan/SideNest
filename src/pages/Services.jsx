import { useEffect, useState } from "react";

import styles from './Services.module.css';

const Services = () => {
  useEffect(() => {
    document.title = "Our Services";
  }, []);

  // State for active tab
  const [activeTab, setActiveTab] = useState("ready-to-launch");

  const handleTabClick = (id, e) => {
    e.preventDefault();
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Services Hero */}
      <header className={styles.servicesHero}>
        <div className={styles.heroContent}>
          <h1>Our Services</h1>
          <p className="subtitle">Build, optimize, and scale your business with us.</p>
        </div>
      </header>

      {/* Services Intro */}
      <section className={styles.servicesIntro}>
        <div className={styles.container}>
          <h2>What We Offer</h2>
          <p>
            From starter kits to full-service partnerships, find the right solution for
            your business needs.
          </p>
        </div>
      </section>

      {/* Services Tabs Navigation */}
      <nav className={styles.servicesTabs}>
        <div className={styles.container}>
          <ul>
            <li>
              <a
                href="#ready-to-launch"
                className={`tab ${activeTab === "ready-to-launch" ? "active" : ""}`}
                onClick={(e) => handleTabClick("ready-to-launch", e)}
              >
                Ready-to-Launch Kits
              </a>
            </li>
            <li>
              <a
                href="#strategy-lab"
                className={`tab ${activeTab === "strategy-lab" ? "active" : ""}`}
                onClick={(e) => handleTabClick("strategy-lab", e)}
              >
                Strategy Lab
              </a>
            </li>
            <li>
              <a
                href="#pro-build"
                className={`tab ${activeTab === "pro-build" ? "active" : ""}`}
                onClick={(e) => handleTabClick("pro-build", e)}
              >
                Pro Build
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Ready-to-Launch Kits Section */}
      <section id="ready-to-launch" className={styles.serviceSection}>
        <div className={styles.container}>
          <h2>Ready-to-Launch Kits</h2>
          <p>
            Jumpstart your venture with turnkey solutions—priced transparently, with a
            clear path to purchase.
          </p>
          <div className={styles.kitGrid}>
            {/* Example Kit Card 1 */}
            <div className={styles.kitCard}>
              <div className={styles.kitIcon}>🛒</div>
              <h3>E-Commerce Starter</h3>
              <ul className={styles.kitFeatures}>
                <li>Shopify/WooCommerce Setup</li>
                <li>Branded Design</li>
                <li>Basic SEO & Marketing</li>
                <li>1 Month Support</li>
              </ul>
              <div className={styles.kitPrice}>$1,499</div>
              <a href="#buy-now" className={`${styles.btn} ${styles.btnOutlineGreen}`}>Buy Now</a>
            </div>
            {/* Example Kit Card 2 */}
            <div className={styles.kitCard}>
              <div className={styles.kitIcon}>📱</div>
              <h3>Mobile App MVP</h3>
              <ul className={styles.kitFeatures}>
                <li>iOS/Android App</li>
                <li>User Authentication</li>
                <li>Push Notifications</li>
                <li>Basic Analytics</li>
              </ul>
              <div className={styles.kitPrice}>$2,999</div>
              <a href="#buy-now" className={`${styles.btn} ${styles.btnOutlineGreen}`}>Buy Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Lab Section */}
      <section id="strategy-lab" className={styles.serviceSection}>
        <div className={styles.container}>
          <h2>Strategy Lab</h2>
          <p>For established businesses: audit, roadmap, and execute smarter growth.</p>
          <h4>What’s Included</h4>
          <ul className={styles.kitFeatures}>
            <li>Comprehensive Business Audit</li>
            <li>Custom Growth Roadmap</li>
            <li>Competitor & Market Analysis</li>
            <li>Ongoing Strategy Sessions</li>
          </ul>
          <h4>Ideal For</h4>
          <p>
            Businesses scaling operations, entering new markets, or looking to break
            through plateaus.
          </p>
          <h4>Client Success</h4>
          <div className={styles.insightBlock}>
            <div className={styles.before}>
              <h5>Before</h5>
              <p>Flat revenue, unclear priorities, disjointed teams.</p>
            </div>
            <div className={styles.after}>
              <h5>After</h5>
              <p>20% revenue growth, aligned leadership, focused execution.</p>
            </div>
          </div>
          <a href="#apply" className={`${styles.btn} ${styles.btnOutlineBlue}`}>Apply Now</a>
        </div>
      </section>

      {/* Pro Build Section */}
      <section id="pro-build" className={styles.serviceSection}>
        <div className={styles.container}>
          <h2>Pro Build</h2>
          <p>Full-service execution: from concept to launch, managed by our team.</p>
          <h4>Our Process</h4>
          <ol>
            <li><strong>Discovery:</strong> Deep dive into your vision and goals.</li>
            <li><strong>Planning:</strong> Tailored roadmap and milestones.</li>
            <li><strong>Execution:</strong> Dedicated team handles design, development, and launch.</li>
            <li><strong>Handover:</strong> Full training and support.</li>
          </ol>
          <h4>Timelines</h4>
          <p>From 8 weeks for MVPs to 6+ months for comprehensive platforms.</p>
          <h4>Portfolio</h4>
          <p>Explore our recent Pro Build projects:</p>
          <a href="/portfolio" className={`${styles.btn} ${styles.btnOutlineRed}`}>View Portfolio</a>
        </div>
      </section>

      {/* Services CTA */}
      <section className={`${styles.servicesCta}`}>
        <div className={styles.container}>
          <h2>Not Sure Which Service Fits Best?</h2>
          <p>Book a free consultation and let’s find the right path for your business.</p>
          <a href="/contact" className={`${styles.btn} ${styles.btnCta}`}>Book a Free Call</a>
        </div>
      </section>


    </>
  );
};

export default Services;

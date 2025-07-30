import { useState, useEffect } from "react";
import styles from './Pricing.module.css'; // Adjust path as necessary
import plansData from '../data/plans.json';
import addonsData from '../data/addons.json';

const currencyLabels = [
  { key: "usd", label: "USD" },
  { key: "inr", label: "INR" },
];

export default function Pricing() {
  const [plans, setPlans] = useState([]);
  const [addons, setAddons] = useState([]);
  const [currency, setCurrency] = useState("usd");

  useEffect(() => {
    document.title = "Pricing - SideNest";
  }, []);

  // Initialize data from imported JSON
  useEffect(() => {
    setPlans(plansData);
    setAddons(addonsData);
  }, []);

  const currencySymbols = {
    usd: "$",
    inr: "₹",
  };

  const getPrice = (item) => {
    if (!item?.prices) return "N/A";
    let price = item.prices[currency];
    if (!price) {
      // fallback to USD if selected currency missing
      price = item.prices["usd"] || "N/A";
    }
    return price;
  };

  const onCurrencyChange = (e) => {
    setCurrency(e.target.value.toLowerCase());
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Choose Your Plan</h1>
        <p>Flexible pricing for every stage of your business. Start small, scale fast.</p>
        <div className={styles["toggle-currency"]}>
          {currencyLabels.map(({ key, label }) => (
            <label key={key} className={`${styles["currency-label"]} ${currency === key ? styles.active : ""}`}>
              <input
                type="radio"
                name="currency"
                value={key}
                checked={currency === key}
                onChange={onCurrencyChange}
              />
              {" "}{label}
              {currency === key && (
                <span className={styles["active-indicator"]}>   </span>
              )}
            </label>
          ))}
        </div>
      </div>

      <div className={styles["pricing-tables"]}>
        {plans.length === 0 && <p>No plans available.</p>}
        {plans.map((plan) => (
          <div
            key={plan.id || plan.name}
            className={`${styles.plan} ${plan.mostPopular ? styles.pro : ""}`}
          >
            {plan.mostPopular && <div className={styles.ribbon}>MOST POPULAR</div>}
            <h3 className={styles["plan-title"]}>{plan.name}</h3>
            <div className={styles["plan-price"]}>
              {currencySymbols[currency]}
              {getPrice(plan)}
              <span>/month</span>
            </div>
            <ul className={styles["plan-features"]}>
              {plan.features?.map((feature, i) => (
                <li key={i}>{feature}</li>
              )) || null}
            </ul>
            <a href={plan.link || "#"} className={plan.mostPopular ? styles.btn : styles["btn-outline"]}>
              Get Started
            </a>
          </div>
        ))}
      </div>

      <div className={styles.international}>
        <h2>International Pricing</h2>
        <p>All prices are listed in USD by default. Use the currency selector above to view prices in INR.</p>
        <p>For localized, custom pricing in your country, please contact our sales team.</p>
      </div>

      <div className={styles.addons}>
        <h2>Platform Add-ons</h2>
        <div className={styles["addon-table"]}>
          <div className={styles["addon-header"]}>
            <div className={styles["addon-header-title"]}>Add-On</div>
            {currencyLabels.map(({ key, label }) => (
              <div
                key={key}
                className={`${styles["addon-header-price"]} ${
                  key === currency ? styles["addon-price-selected"] : ""
                }`}
              >
                {label}
              </div>
            ))}
            <div className={styles["addon-header-cart"]}></div>
          </div>
          {addons.length === 0 && <p>No add-ons available.</p>}
          {addons.map((addon) => (
            <div key={addon.id || addon.name} className={styles["addon-row"]}>
              <div className={styles["addon-title"]}>{addon.name}</div>
              {currencyLabels.map(({ key }) => {
                const price = addon.prices?.[key] || "Custom";
                return (
                  <div
                    key={key}
                    className={`${styles["addon-price"]} ${
                      key === currency ? styles["addon-price-selected"] : ""
                    }`}
                  >
                    {price === "Custom"
                      ? "Custom"
                      : `${currencySymbols[key]}${price}${addon.billingCycle || ""}`}
                  </div>
                );
              })}
              <div className={styles["addon-cart"]}>
                {addon.link ? (
                  <a
                    href={addon.link}
                    className={addon.customContact ? styles["btn-secondary"] : styles["btn-cta"]}
                  >
                    {addon.customContact ? "Contact Sales" : "Buy Now"}
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.faq}>
        <h2>Frequently Asked Questions</h2>
        <div className={styles["faq-item"]}>
          <div className={styles["faq-question"]}>
            What payment methods do you accept? <span className={styles["faq-toggle"]}>+</span>
          </div>
          <div className={styles["faq-answer"]}>
            We accept all major credit cards (Visa, Mastercard, Amex, Discover), bank transfers,
            and PayPal. For custom arrangements, please contact sales.
          </div>
        </div>
        <div className={styles["faq-item"]}>
          <div className={styles["faq-question"]}>
            What is your refund policy? <span className={styles["faq-toggle"]}>+</span>
          </div>
          <div className={styles["faq-answer"]}>
            You can request a full refund within 30 days of purchase if you’re not satisfied. For enterprise and custom plans,
            refunds are handled case-by-case.
          </div>
        </div>
        <div className={styles["faq-item"]}>
          <div className={styles["faq-question"]}>
            How do I get started? <span className={styles["faq-toggle"]}>+</span>
          </div>
          <div className={styles["faq-answer"]}>
            Pick a plan, sign up, and you’ll have instant access. No credit card required for the free trial.
            For custom deployments, “Talk to an Expert” for a tailored onboarding.
          </div>
        </div>
      </div>

      <div className={styles.cta}>
        <h2>Not sure which plan is right for you?</h2>
        <p>Our experts are ready to help you choose the best solution for your needs.</p>
        <div className={styles["cta-buttons"]}>
          <a href="#" className={styles.btn}>Buy Now</a>
          <a href="#" className={`${styles.btn} ${styles["btn-outline"]}`}>Talk to an Expert</a>
        </div>
      </div>
    </div>
  );
}

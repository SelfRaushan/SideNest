import React, { useState, useEffect } from 'react';
import styles from './Home.module.css'; // or adjust to correct styles path

const stories = [
  {
    name: "Anjali S., Delhi",
    text: `“I always wanted to start a handmade gifting business but had no idea where to begin. SideNest gave me a full blueprint, logo, website, and marketing strategy — I got my first 20 orders within the first month!"`,
  },
  {
    name: "Rahul M., Bangalore",
    text: `“As a freelance web designer, I needed better systems to grow. The Strategy Lab plan helped me build funnels, automate leads, and double my client retention. Now I’m booked out for 3 months!”`,
  },
  {
    name: "Neha P., Mumbai",
    text: `“We had a great product but no direction. SideNest built our brand, set up a professional website, automated sales with CRM, and handled ads. In 90 days, our sales tripled.”`,
  },
];

export default function SuccessStories() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === stories.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 seconds per slide

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section id="stories" className={styles.successStories}>
      <h2 className={styles.sectionTitle}>Success Stories</h2>
      <p className={styles.sectionSubtitle}>
        From students launching side hustles to small business owners scaling to six figures—SideNest helped people just like you.
      </p>
      <div className={styles.storiesCarousel}>
        {stories.map((story, index) => (
          <div
            key={index}
            className={`${styles.storyCard} ${index === activeIndex ? styles.active : ''}`}
          >
            <h3 className={styles.storyName}>{story.name}</h3>
            <p className={styles.storyText}>{story.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

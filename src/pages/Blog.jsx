import { useEffect } from "react";
import styles from './Blog.module.css';

const Blog = () => {
  useEffect(() => {
    document.title = "Blog - SideNest";
  }, []);

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles["blog-title"]}>Featured Articles</h2>

        <article className={styles.post} tabIndex={0}>
          <img
            src="/img/blog/business-ideas-2025.jpg"
            alt="Lightbulb representing business ideas"
            className={styles["post-thumb"]}
          />
          <h3 className={styles["post-title"]}>Top Business Ideas to Start in 2025</h3>
          <time dateTime="2025-07-25" className={styles["post-date"]}>July 25, 2025</time>
          <p className={styles["post-excerpt"]}>
            Discover the most promising business opportunities for the coming year—with actionable insights and real-world examples to help you jumpstart your journey.
          </p>
          <a href="#" className={styles["read-more"]} aria-label="Read more about Top Business Ideas to Start in 2025">Read more</a>
        </article>

        <article className={styles.post} tabIndex={0}>
          <img
            src="/img/blog/validate-startup-idea.jpg"
            alt="Person writing on a notebook"
            className={styles["post-thumb"]}
          />
          <h3 className={styles["post-title"]}>How to Validate Your Startup Idea</h3>
          <time dateTime="2025-07-18" className={styles["post-date"]}>July 18, 2025</time>
          <p className={styles["post-excerpt"]}>
            Learn proven methods to test your business concept before launch, avoid costly mistakes, and build a product people actually want.
          </p>
          <a href="#" className={styles["read-more"]} aria-label="Read more about How to Validate Your Startup Idea">Read more</a>
        </article>

        <article className={styles.post} tabIndex={0}>
          <img
            src="/img/blog/marketing-blueprints.jpg"
            alt="Marketing plan on a whiteboard"
            className={styles["post-thumb"]}
          />
          <h3 className={styles["post-title"]}>Marketing Blueprints for Coaches & Creators</h3>
          <time dateTime="2025-07-11" className={styles["post-date"]}>July 11, 2025</time>
          <p className={styles["post-excerpt"]}>
            Get step-by-step marketing frameworks, tools, and strategies to grow your coaching or content business—fast and efficiently.
          </p>
          <a href="#" className={styles["read-more"]} aria-label="Read more about Marketing Blueprints for Coaches & Creators">Read more</a>
        </article>

        <article className={styles.post} tabIndex={0}>
          <img
            src="/img/blog/case-studies.jpg"
            alt="Success story illustration"
            className={styles["post-thumb"]}
          />
          <h3 className={styles["post-title"]}>Zero to ₹1L/Month—Real Case Studies</h3>
          <time dateTime="2025-07-04" className={styles["post-date"]}>July 4, 2025</time>
          <p className={styles["post-excerpt"]}>
            Follow the journeys of SideNest clients who started from scratch and built profitable businesses. Learn from their wins, mistakes, and growth tactics.
          </p>
          <a href="#" className={styles["read-more"]} aria-label="Read more about Zero to ₹1L/Month—Real Case Studies">Read more</a>
        </article>
      </div>
    </>
  );
};

export default Blog;

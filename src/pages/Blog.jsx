import { useEffect } from "react";
import styles from './Blog.module.css';

// Example blog post data. Replace with your actual data!
const posts = [
  {
    id: 1,
    title: "Top Business Ideas to Start in 2025",
    date: "July 29, 2025",
    image: "/images/blog/business-ideas-2025.jpg",
    excerpt:
      "Discover the most promising business opportunities for the coming year—with actionable insights and real-world examples to help you jumpstart your journey.",
    link: "#"
  },
  {
    id: 2,
    title: "How to Validate Your Business Idea Before Investing",
    date: "July 26, 2025",
    image: "/images/blog/validate-idea.jpg",
    excerpt:
      "Learn proven methods to test your business concept before launch, avoid costly mistakes, and build a product people actually want.",
    link: "#"
  },
  {
    id: 3,
    title: "Marketing Tactics for Coaches & Content Creators",
    date: "July 21, 2025",
    image: "/images/blog/marketing-tactics.jpg",
    excerpt:
      "Get step-by-step marketing frameworks, tools, and strategies to grow your coaching or content business—fast and efficiently.",
    link: "#"
  },
  {
    id: 4,
    title: "Real Success Stories: Entrepreneurs Who Made It",
    date: "July 20, 2025",
    image: "/images/blog/success-stories.jpg",
    excerpt:
      "Follow the journeys of SideNest clients who started from scratch and built profitable businesses. Learn from their wins, mistakes, and growth tactics.",
    link: "#"
  }
];

const Blog = () => {
  useEffect(() => {
    document.title = "Blog - SideNest";
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles["blog-title"]}>Business & Startup Blog</h1>
      {posts.map((post) => (
        <article className={styles.post} key={post.id}>
          <img
            src={post.image}
            alt={post.title}
            className={styles["post-thumb"]}
            loading="lazy"
          />
          <h2 className={styles["post-title"]}>{post.title}</h2>
          <span className={styles["post-date"]}>{post.date}</span>
          <p className={styles["post-excerpt"]}>{post.excerpt}</p>
          <a href={post.link} className={styles["read-more"]} tabIndex={0}>
            Read more
          </a>
        </article>
      ))}
    </div>
  );
};

export default Blog;

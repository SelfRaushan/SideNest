import { useEffect, useState } from "react";
import styles from './Resources.module.css';

const Resources = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = "Resources - SideNest";

    async function fetchProducts() {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
        const res = await fetch(`${apiUrl}/products`);
        if (!res.ok) throw new Error('Failed to fetch products');
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  // Loading, error and empty state UI
  if (loading) return <p style={{textAlign: 'center', padding: '2rem'}}>Loading resources...</p>;
if (error) return <p style={{textAlign: 'center', padding: '2rem', color: 'red'}}>
  Error loading resources: {error}
</p>;

  if (!products.length) return <p style={{textAlign: 'center', padding: '2rem'}}>No resources available.</p>;

  return (
    <>
      {/* Resources Intro */}
      <section className={styles.resourcesIntro}>
        <div className={styles.container}>
          <h1>🚀 SideNest Digital Resources</h1>
          <p>
            Explore our curated collection of digital resources designed to help you
            launch and grow your business.
          </p>
        </div>
      </section>

      {/* Product Grid and Categories */}
      <main>
        <div className={styles.paidResourcesSection}>
          <div className={styles.container}>
            <div className={styles.resourcesHeading}>
              <h2>Explore</h2>
              <p>Curated resources to elevate your business.</p>
            </div>
            <ul className={styles.resourcesCategories}>
              {products.map(productCategory => (
                <li key={productCategory.category}>
                  <a
                    href={`#${productCategory.category.replace(/\s/g, '')}`}
                    className={productCategory.category === "Blueprints" ? styles.active : styles.link}
                  >
                    {productCategory.category}
                  </a>
                </li>
              ))}
            </ul>

            {/* Products List */}
            <section id="products-list">
              {products.map(({ category, items }) => (
                <section
                  className={styles.resourceCategory}
                  id={category.replace(/\s/g, '')}
                  key={category}
                >
                  <h3 className={styles.categoryTitle}>{category}</h3>
                  <div className={styles.resourceList}>
                    {items.map(({ title, description, price, image, link }) => (
                      <article className={styles.resourceCard} key={title}>
                        <img src={image} alt={title} />
                        <div className={styles.resourceTitle}>{title}</div>
                        <div className={styles.resourcePrice}>{price}</div>
                        <div className={styles.resourceDescription}>{description}</div>
                        <div className={styles.resourceActions}>
                          <a href={link} className={styles.addCartBtn}>Add to Cart</a>
                          <a href={link} className={styles.downloadBtn}>View Details</a>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Resources;

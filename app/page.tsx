"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
// import CategoryCard from '@/components/CategoryCard';
import { Button } from '@/components/ui/Button';
import styles from '@/styles/Home.module.css';
import { useRouter } from 'next/navigation';

const FEATURED_PRODUCTS = [
  { id: '1', name: 'Premium Banana Chips', price: 250, category: 'Namkeen', image: '/products/banana-chips.png' },
  { id: '2', name: 'Premium Bhakarwadi', price: 250, category: 'Namkeen', image: '/products/bhakarwadi.png' },
  { id: '3', name: 'Royal Kesar Peda', price: 400, category: 'Sweets', image: '/products/peda.png' },
  { id: '4', name: 'Spicy Chakli', price: 180, category: 'Namkeen', image: '/products/chakli.png' },
  { id: '5', name: 'Ghee Mysore Pak', price: 350, category: 'Sweets', image: '/products/mysore-pak.png' },
];

const CATEGORIES = [
  { id: 'namkeen', name: 'Namkeen', image: '/products/namkeen-cat.png' },
  { id: 'sweets', name: 'Sweets', image: '/products/peda.png' },
  { id: 'gifting', name: 'Gifting', image: '/products/bhakarwadi.png' },
];

export default function Home() {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.label}>Est. 1995</span>
            <h1 className={styles.heroTitle}>
              Taste the <span className={styles.textGradient}>Tradition</span>
            </h1>
            <p className={styles.heroDesc}>
              Handcrafted Indian snacks made with authentic recipes and premium ingredients.
              Experience the crunch of joy in every bite.
            </p>
            <div className={styles.heroActions}>
              <Button size="lg" onClick={() => router.push('/shop')}>Shop Now</Button>
              <Button size="lg" variant="outline">Our Story</Button>
            </div>
          </div>
        </div>
        <div className={styles.heroBackground} />
      </section>

      {/* Categories */}
      {/* <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Explore Collections</h2>
          <div className={styles.categoryGrid}>
            {CATEGORIES.map(cat => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section> */}

      {/* Featured */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Trending Delights</h2>
            <Button variant="ghost">View All Products →</Button>
          </div>
          <div className={styles.productGrid}>
            {FEATURED_PRODUCTS.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaCard}>
            <h2>Join the Family</h2>
            <p>Subscribe for exclusive offers and new flavor drops.</p>
            <div className={styles.ctaForm}>
              <input type="email" placeholder="Enter your email" className={styles.input} />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

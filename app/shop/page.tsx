import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import styles from '@/styles/Shop.module.css';

const PRODUCTS: any[] = [
    { id: '1', name: 'Premium Bhakarwadi', price: 250, category: 'Namkeen', image: '/products/bhakarwadi.png' },
    { id: '2', name: 'Royal Kesar Peda', price: 400, category: 'Sweets', image: '/products/peda.png' },
    { id: '3', name: 'Spicy Chakli', price: 180, category: 'Namkeen', image: '/products/chakli.png' },
    { id: '4', name: 'Ghee Mysore Pak', price: 350, category: 'Sweets', image: '/products/mysore-pak.png' },
    { id: '5', name: 'Banana Chips', price: 120, category: 'Namkeen', image: '/products/banana-chips.png' },
];

export default function Shop() {
    return (
        <main>
            <Navbar />
            <div className="container">
                <header className={styles.header}>
                    <h1 className={styles.title}>All Snacks</h1>
                    <p className={styles.subtitle}>Curated collection of our finest delicacies.</p>
                </header>

                <div className={styles.layout}>
                    <aside className={styles.filters}>
                        <h3>Filters</h3>
                        <div className={styles.filterGroup}>
                            <label><input type="checkbox" /> Namkeen</label>
                            <label><input type="checkbox" /> Sweets</label>
                            <label><input type="checkbox" /> Gifting</label>
                        </div>
                    </aside>

                    <div className={styles.grid}>
                        {PRODUCTS.length > 0 ? (
                            PRODUCTS.map(p => (
                                <ProductCard key={p.id} product={p} />
                            ))
                        ) : (
                            <div className={styles.emptyState}>
                                <h2 className={styles.comingSoonTitle}>
                                    Deliciousness Coming Soon!
                                </h2>
                                <p className={styles.comingSoonText}>
                                    We're busy preparing our handcrafted snacks. Check back shortly to treat your taste buds to the finest Ruchi Snacks.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}

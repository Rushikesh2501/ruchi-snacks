import Link from 'next/link';
import styles from '@/styles/Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.col}>
                        <Link href="/" className={styles.logo}>
                            Ruchi<span className={styles.accent}>Snacks</span>
                        </Link>
                        <p className={styles.desc}>
                            Authentic Indian flavors, handcrafted with love and tradition.
                            Delivering happiness one snack at a time.
                        </p>
                    </div>

                    <div className={styles.col}>
                        <h4>Shop</h4>
                        <Link href="/shop">All Snacks</Link>
                        <Link href="/shop?cat=namkeen">Namkeen</Link>
                        <Link href="/shop?cat=sweets">Sweets</Link>
                    </div>

                    <div className={styles.col}>
                        <h4>Company</h4>
                        <Link href="/about">Our Story</Link>
                        <Link href="/contact">Contact</Link>
                        <Link href="/admin">Admin Login</Link>
                    </div>

                    <div className={styles.col}>
                        <h4>Legal</h4>
                        <Link href="/terms">Terms</Link>
                        <Link href="/privacy">Privacy</Link>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© {new Date().getFullYear()} Ruchi Snacks. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

"use client";
import Link from 'next/link';
import { ShoppingBag, Menu, Search, User } from 'lucide-react';
import { useState } from 'react';
import styles from '@/styles/Navbar.module.css';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className="container">
                <div className={styles.inner}>
                    <Link href="/" className={styles.logo}>
                        Ruchi<span className={styles.logoAccent}>Snacks</span>
                    </Link>

                    <div className={`${styles.links} ${isMenuOpen ? styles.show : ''}`}>
                        <Link href="/" className={styles.link}>Home</Link>
                        <Link href="/shop" className={styles.link}>Shop</Link>
                        <Link href="/cart" className={styles.link}>Cart</Link>
                        <Link href="/checkout" className={styles.link}>Checkout</Link>
                    </div>

                    <div className={styles.actions}>
                        <button className={styles.iconBtn} aria-label="Search">
                            <Search size={20} />
                        </button>
                        <Link href="/cart" className={styles.iconBtn} aria-label="Cart">
                            <ShoppingBag size={20} />
                            <span className={styles.badge}>2</span>
                        </Link>
                        <button className={styles.mobileToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

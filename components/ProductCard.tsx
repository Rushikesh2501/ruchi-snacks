"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/Button';
import { QuantitySelector } from './QuantitySelector';
import styles from '@/styles/ProductCard.module.css';

interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
}

export default function ProductCard({ product }: { product: Product }) {
    const [quantity, setQuantity] = useState(0);

    return (
        <div className={styles.card}>
            <Link href={`/product/${product.id}`} className={styles.imageWrapper}>
                {product.image ? (
                    <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${product.image}`} alt={product.name} className={styles.productImage} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                    <div className={styles.imagePlaceholder} />
                )}
            </Link>
            <div className={styles.content}>
                <div className={styles.info}>
                    <span className={styles.category}>{product.category}</span>
                    <Link href={`/product/${product.id}`}>
                        <h3 className={styles.title}>{product.name}</h3>
                    </Link>
                    <p className={styles.price}>₹{product.price}</p>
                </div>
                <div className={styles.actions}>
                    <QuantitySelector
                        quantity={quantity}
                        onIncrement={() => setQuantity(q => q + 1)}
                        onDecrement={() => setQuantity(q => Math.max(0, q - 1))}
                    />
                    <Button size="sm" className={styles.addBtn}>Add</Button>
                </div>
            </div>
        </div>
    );
}

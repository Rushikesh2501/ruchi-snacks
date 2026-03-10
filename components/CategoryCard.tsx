import Link from 'next/link';
import styles from '@/styles/CategoryCard.module.css';

interface Category {
    id: string;
    name: string;
    image: string;
}

export default function CategoryCard({ category }: { category: Category }) {
    return (
        <Link href={`/shop?cat=${category.id}`} className={styles.card}>
            <div className={styles.imagePlaceholder} />
            <div className={styles.overlay}>
                <h3>{category.name}</h3>
            </div>
        </Link>
    );
}

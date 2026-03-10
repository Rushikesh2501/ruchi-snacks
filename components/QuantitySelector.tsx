import React from 'react';
import styles from '@/styles/QuantitySelector.module.css';

interface QuantitySelectorProps {
    quantity: number;
    onIncrement: () => void;
    onDecrement: () => void;
    showLabel?: boolean;
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
    quantity,
    onIncrement,
    onDecrement,
    showLabel = false
}) => {
    return (
        <div className={styles.container}>
            {showLabel && <label className={styles.label}>Quantity<span className={styles.required}>*</span></label>}
            <div className={styles.selector}>
                <button
                    type="button"
                    className={styles.btn}
                    onClick={onDecrement}
                    disabled={quantity <= 0}
                >
                    -
                </button>
                <span className={styles.quantity}>{quantity}</span>
                <button
                    type="button"
                    className={styles.btn}
                    onClick={onIncrement}
                >
                    +
                </button>
            </div>
        </div>
    );
};

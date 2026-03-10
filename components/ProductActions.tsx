"use client";

import React, { useState } from 'react';
import { Button } from './ui/Button';
import { QuantitySelector } from './QuantitySelector';

export const ProductActions: React.FC = () => {
    const [quantity, setQuantity] = useState(1);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
            <QuantitySelector
                showLabel
                quantity={quantity}
                onIncrement={() => setQuantity(q => q + 1)}
                onDecrement={() => setQuantity(q => Math.max(1, q - 1))}
            />
            <div style={{ display: 'flex', gap: '1rem' }}>
                <Button size="lg">Add to Cart</Button>
                <Button size="lg" variant="outline">Buy Now</Button>
            </div>
        </div>
    );
};

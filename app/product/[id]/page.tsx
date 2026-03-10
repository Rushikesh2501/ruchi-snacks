import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { ProductActions } from '@/components/ProductActions';

export function generateStaticParams() {
    return [
        { id: '1' },
        { id: '2' },
        { id: '3' },
        { id: '4' },
        { id: '5' },
    ];
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    // Mock product data mapping
    const productData: Record<string, any> = {
        '1': { name: 'Premium Bhakarwadi', price: 250, weight: '500g', image: '/products/bhakarwadi.png', description: 'Our signature Bhakarwadi is a perfect blend of sweet and spicy flavors, rolled into a crispy delight.' },
        '2': { name: 'Royal Kesar Peda', price: 400, weight: '250g', image: '/products/peda.png', description: 'Authentic Kesar Peda made with pure milk solids and saffron.' },
        '3': { name: 'Spicy Chakli', price: 180, weight: '200g', image: '/products/chakli.png', description: 'Crunchy and spicy spiral snacks for the perfect tea time.' },
        '4': { name: 'Ghee Mysore Pak', price: 350, weight: '250g', image: '/products/mysore-pak.png', description: 'Traditional South Indian sweet made with pure ghee and gram flour.' },
        '5': { name: 'Banana Chips', price: 120, weight: '200g', image: '/products/banana-chips.png', description: 'Crispy and salty banana chips made from premium quality bananas.' },
    };

    const product = productData[id] || {
        id,
        name: 'Premium Bhakarwadi',
        price: 250,
        description: 'Our signature Bhakarwadi is a perfect blend of sweet and spicy flavors, rolled into a crispy delight. Made with bespoke spices and fresh ingredients using traditional techniques passed down through generations.',
        ingredients: ['Gram Flour', 'Spices', 'Edible Oil', 'Sugar', 'Tamarind'],
        weight: '500g',
        image: '/products/bhakarwadi.png'
    };

    if (!product.ingredients) {
        product.ingredients = ['Premium Ingredients', 'Traditional Spices', 'Pure Love'];
    }

    return (
        <main>
            <Navbar />
            <div className="container" style={{ padding: '6rem 1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1fr', gap: '4rem', alignItems: 'start' }}>
                    {/* Product Image */}
                    <div style={{
                        aspectRatio: '1',
                        background: '#1a1a1a',
                        borderRadius: '16px',
                        border: '1px solid rgba(255,255,255,0.05)',
                        overflow: 'hidden'
                    }}>
                        {product.image ? (
                            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${product.image}`} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        ) : (
                            <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #2a2a2a, #1a1a1a)' }}></div>
                        )}
                    </div>

                    <div>
                        <span style={{ color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem', fontWeight: 600 }}>Create Memories</span>
                        <h1 style={{ fontSize: '3.5rem', margin: '0.5rem 0 1rem', lineHeight: 1.1 }}>{product.name}</h1>
                        <p style={{ fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '2rem', fontWeight: 'bold' }}>₹{product.price} <span style={{ fontSize: '1rem', color: '#666', fontWeight: 400 }}>/ {product.weight}</span></p>

                        <p style={{ lineHeight: '1.7', color: 'var(--color-text-secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>{product.description}</p>

                        <ProductActions />

                        <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
                            <h3 style={{ marginBottom: '1rem' }}>Ingredients</h3>
                            <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '1.2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                                {product.ingredients.map((i: string) => <li key={i}>{i}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}

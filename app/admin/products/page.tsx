import Link from 'next/link';

const products: any[] = [
    { id: '1', name: 'Premium Bhakarwadi', price: 250, category: 'Namkeen', image: '/products/bhakarwadi.png' },
    { id: '2', name: 'Royal Kesar Peda', price: 400, category: 'Sweets', image: '/products/peda.png' },
    { id: '3', name: 'Spicy Chakli', price: 180, category: 'Namkeen', image: '/products/chakli.png' },
    { id: '4', name: 'Ghee Mysore Pak', price: 350, category: 'Sweets', image: '/products/mysore-pak.png' },
    { id: '5', name: 'Banana Chips', price: 120, category: 'Namkeen', image: '/products/banana-chips.png' },
];

export default function AdminProducts() {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem' }}>Products</h1>
                <Link href="/admin/products/add" style={{ background: 'var(--color-primary)', color: '#000', padding: '0.5rem 1rem', borderRadius: '6px', fontWeight: '600' }}>+ Add Product</Link>
            </div>

            <div style={{ background: '#1e1e1e', borderRadius: '12px', border: '1px solid #333', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ background: '#252525', textAlign: 'left' }}>
                            <th style={{ padding: '1rem', color: '#888' }}>Image</th>
                            <th style={{ padding: '1rem', color: '#888' }}>Name</th>
                            <th style={{ padding: '1rem', color: '#888' }}>Category</th>
                            <th style={{ padding: '1rem', color: '#888' }}>Price</th>
                            <th style={{ padding: '1rem', color: '#888' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length === 0 ? (
                            <tr>
                                <td colSpan={5} style={{ padding: '3rem', textAlign: 'center', color: '#666' }}>
                                    No products found. Start by adding one!
                                </td>
                            </tr>
                        ) : (
                            products.map(product => (
                                <tr key={product.id} style={{ borderBottom: '1px solid #333' }}>
                                    <td style={{ padding: '1rem' }}>
                                        <div style={{ width: '40px', height: '40px', background: '#333', borderRadius: '4px', overflow: 'hidden' }}>
                                            {product.image ? (
                                                <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            ) : (
                                                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#666' }}>No img</div>
                                            )}
                                        </div>
                                    </td>
                                    <td style={{ padding: '1rem' }}>{product.name}</td>
                                    <td style={{ padding: '1rem' }}>{product.category}</td>
                                    <td style={{ padding: '1rem' }}>₹{product.price}</td>
                                    <td style={{ padding: '1rem' }}><Link href={`/admin/products/edit/${product.id}`} style={{ color: 'var(--color-primary)' }}>Edit</Link></td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#0a0a0a' }}>
            <aside style={{ width: '260px', borderRight: '1px solid #222', padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                <h2 style={{ marginBottom: '3rem', color: 'var(--color-primary)', fontSize: '1.5rem' }}>RS Admin</h2>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <Link href="/admin" style={{ padding: '0.75rem 1rem', borderRadius: '8px', color: '#fff' }}>Dashboard</Link>
                    <Link href="/admin/products" style={{ padding: '0.75rem 1rem', borderRadius: '8px', color: '#888', transition: 'color 0.2s' }}>Products</Link>
                    <Link href="/admin/orders" style={{ padding: '0.75rem 1rem', borderRadius: '8px', color: '#888' }}>Orders</Link>
                </nav>
                <div style={{ marginTop: 'auto' }}>
                    <Link href="/" style={{ color: '#666', fontSize: '0.9rem' }}>← Back to Store</Link>
                </div>
            </aside>
            <main style={{ flex: 1, padding: '3rem', overflowY: 'auto' }}>
                {children}
            </main>
        </div>
    );
}

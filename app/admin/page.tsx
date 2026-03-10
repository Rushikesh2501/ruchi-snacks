export default function AdminDashboard() {
    return (
        <div>
            <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Overview</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                <div style={{ padding: '2rem', background: '#1e1e1e', borderRadius: '12px', border: '1px solid #333' }}>
                    <h3 style={{ color: '#888', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Total Sales</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>₹1,24,500</p>
                </div>
                <div style={{ padding: '2rem', background: '#1e1e1e', borderRadius: '12px', border: '1px solid #333' }}>
                    <h3 style={{ color: '#888', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Active Orders</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>12</p>
                </div>
                <div style={{ padding: '2rem', background: '#1e1e1e', borderRadius: '12px', border: '1px solid #333' }}>
                    <h3 style={{ color: '#888', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Product Views</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>3.2k</p>
                </div>
            </div>
        </div>
    );
}

export default function AddProduct() {
    return (
        <div style={{ maxWidth: '600px' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Add New Product</h1>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc' }}>Product Name</label>
                    <input type="text" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #333', background: '#1e1e1e', color: '#fff' }} placeholder="e.g. Sev Puri" />
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc' }}>Price (₹)</label>
                    <input type="number" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #333', background: '#1e1e1e', color: '#fff' }} placeholder="0.00" />
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc' }}>Category</label>
                    <select style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #333', background: '#1e1e1e', color: '#fff' }}>
                        <option>Namkeen</option>
                        <option>Sweets</option>
                    </select>
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc' }}>Image URL</label>
                    <input type="text" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #333', background: '#1e1e1e', color: '#fff' }} placeholder="https://example.com/image.jpg" />
                </div>
                <button style={{ padding: '0.75rem', background: 'var(--color-primary)', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', marginTop: '1rem' }}>Create Product</button>
            </form>
        </div>
    );
}

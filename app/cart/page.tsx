import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function Cart() {
    return (
        <main>
            <Navbar />
            <div className="container" style={{ padding: '6rem 1rem', minHeight: '60vh', textAlign: 'center' }}>
                <h1 style={{ marginBottom: '1rem' }}>Your Cart</h1>
                <p style={{ color: '#888', marginBottom: '2rem' }}>Your cart looks a bit empty. Fill it with joy!</p>
                <Link href="/shop">
                    <Button>Continue Shopping</Button>
                </Link>
            </div>
            <Footer />
        </main>
    );
}

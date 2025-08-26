import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Kattali Textile Ltd',
  description: 'Kattali Textile Ltd — Manufacturer since 2004',
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="container mx-auto px-4">
          {/* small content block placeholder */}
          <section className="py-8">
            <h3 className="text-lg font-semibold">Our products</h3>
            <p className="mt-2 text-gray-600">High-quality fabrics and garments for global markets.</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
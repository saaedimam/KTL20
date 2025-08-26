import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Kattali Textile Ltd
          </h1>
          <p className="mt-4 text-gray-700 text-lg max-w-md">
            Leading manufacturer of high-quality textiles since 2004 — sustainable practices, modern
            manufacturing and global distribution.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="inline-block bg-primary hover:bg-primary/90 transition text-white px-6 py-3 rounded-md font-medium"
              aria-label="Browse our product catalog"
            >
              Explore Products
            </Link>
            <Link
              href="/contact"
              className="inline-block border-2 border-primary text-primary hover:bg-primary/5 transition px-6 py-3 rounded-md font-medium"
              aria-label="Get in touch with our team"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/ktl/hero.png"
            alt="High quality textile products from Kattali Textile"
            width={560}
            height={420}
            className="w-full max-w-lg rounded-lg shadow-md"
            priority
            sizes="(max-width: 768px) 100vw, 560px"
          />
        </div>
      </div>
    </section>
  );
}
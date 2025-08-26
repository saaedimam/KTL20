'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Shirt } from 'lucide-react';
import { BrandLogo } from './brand-logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname() || '/';

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Manufacturing', href: '/manufacturing' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3" aria-label="Kattali Textile home">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Shirt className="w-6 h-6 text-white" />
            </div>
            <div>
              {/* prefer BrandLogo for actual pages; small text fallback kept for accessibility */}
              <div className="hidden sm:block">
                <BrandLogo size="sm" />
              </div>
              <h1 className="font-heading font-bold text-xl text-gray-900 block sm:hidden">Kattali Textile</h1>
              <p className="text-xs text-gray-600">Since 2004</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8" aria-label="Primary navigation">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden lg:block bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-accent transition-colors duration-200"
          >
            Get Quote
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <nav className="flex flex-col space-y-3" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-colors duration-200 py-2 ${
                    isActive(item.href)
                      ? 'text-primary border-l-4 border-primary pl-4'
                      : 'text-gray-700 hover:text-primary pl-4'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-accent transition-colors duration-200 ml-4 mr-4 text-center"
              >
                Get Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
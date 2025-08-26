import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Facebook, Instagram, Shirt } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="border-t mt-12 py-6 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <div>© {new Date().getFullYear()} Kattali Textile Ltd</div>
        <div className="flex gap-4 mt-3 md:mt-0">
          <a href="/privacy" className="hover:underline">
            Privacy
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
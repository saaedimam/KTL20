
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">KTL</span>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold">Kattali Textile Ltd</h3>
                <p className="text-sm text-gray-400">Quality Since 1995</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Leading textile manufacturer in Bangladesh, committed to quality, 
              sustainability, and innovation in textile production.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-primary transition-colors">Products</Link></li>
              <li><Link to="/manufacturing" className="text-gray-300 hover:text-primary transition-colors">Manufacturing</Link></li>
              <li><Link to="/sustainability" className="text-gray-300 hover:text-primary transition-colors">Sustainability</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><span className="text-gray-300">Fabric Manufacturing</span></li>
              <li><span className="text-gray-300">Garment Production</span></li>
              <li><span className="text-gray-300">Quality Control</span></li>
              <li><span className="text-gray-300">Custom Orders</span></li>
              <li><span className="text-gray-300">Export Services</span></li>
              <li><span className="text-gray-300">Consultation</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">House 123, Road 45</p>
                  <p className="text-gray-300">Gulshan-2, Dhaka-1212</p>
                  <p className="text-gray-300">Bangladesh</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-300">+880-2-9876543</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-300">info@kattali.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Kattali Textile Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

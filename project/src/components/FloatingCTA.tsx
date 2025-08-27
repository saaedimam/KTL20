
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, X, Phone, Mail } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show after scrolling down 100vh
      setIsVisible(scrollPosition > windowHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded menu */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-2xl p-4 w-64 border border-gray-200">
          <div className="space-y-3">
            <Link
              to="/contact"
              className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              <Mail className="w-5 h-5 text-primary mr-3" />
              <div>
                <div className="font-semibold text-gray-900 text-sm">Send Message</div>
                <div className="text-gray-500 text-xs">Get in touch with us</div>
              </div>
            </Link>
            
            <a
              href="tel:+8803125231790"
              className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <Phone className="w-5 h-5 text-primary mr-3" />
              <div>
                <div className="font-semibold text-gray-900 text-sm">Call Now</div>
                <div className="text-gray-500 text-xs">+880-31-2523179</div>
              </div>
            </a>
            
            <Link
              to="/contact"
              className="block bg-primary text-white text-center py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Request Quote
            </Link>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
          isOpen 
            ? 'bg-gray-800 text-white rotate-180' 
            : 'bg-primary text-white hover:bg-primary-light'
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Pulse animation when closed */}
      {!isOpen && (
        <div className="absolute inset-0 w-14 h-14 bg-primary rounded-full animate-ping opacity-30"></div>
      )}
    </div>
  );
};

export default FloatingCTA;

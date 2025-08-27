
import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded ? (
        <div className="bg-white rounded-lg shadow-xl p-6 max-w-sm">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-semibold text-gray-900">Need Help?</h3>
            <button 
              onClick={() => setIsExpanded(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-gray-600 mb-4 text-sm">
            Get in touch with our team for custom textile solutions and quotes.
          </p>
          <div className="space-y-2">
            <a 
              href="mailto:info@kattali.com"
              className="block w-full text-center bg-primary text-white px-4 py-2 rounded text-sm font-medium hover:bg-accent transition-colors"
            >
              Send Email
            </a>
            <a 
              href="tel:+8802123456789"
              className="block w-full text-center border border-primary text-primary px-4 py-2 rounded text-sm font-medium hover:bg-primary hover:text-white transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsExpanded(true)}
          className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-accent transition-colors duration-200 flex items-center justify-center"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default FloatingCTA;

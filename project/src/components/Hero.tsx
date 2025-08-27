
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center bg-gradient-to-r from-black/70 to-black/50"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/7148457/pexels-photo-7148457.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Premium <span className="text-primary">Textiles</span> for Global Markets
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
            Leading textile manufacturer in Bangladesh with 25+ years of excellence, 
            serving 50+ countries worldwide with quality fabrics and garments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent transition-colors duration-200 group"
            >
              Get Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/about" 
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

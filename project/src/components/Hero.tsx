
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
            <Award className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-white text-sm font-semibold">20+ Years of Excellence</span>
          </div>

          {/* Main heading */}
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Premium <span className="text-primary bg-white px-4 py-2 rounded-lg">Textiles</span>
            <br />
            for Global Markets
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
            Leading textile manufacturer in Bangladesh with cutting-edge technology, 
            sustainable practices, and world-class quality standards.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mb-10">
            <div className="flex items-center text-white">
              <Globe className="w-6 h-6 text-primary mr-3" />
              <div>
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm opacity-80">Countries</div>
              </div>
            </div>
            <div className="flex items-center text-white">
              <Users className="w-6 h-6 text-primary mr-3" />
              <div>
                <div className="text-2xl font-bold">2000+</div>
                <div className="text-sm opacity-80">Employees</div>
              </div>
            </div>
            <div className="flex items-center text-white">
              <Award className="w-6 h-6 text-primary mr-3" />
              <div>
                <div className="text-2xl font-bold">ISO</div>
                <div className="text-sm opacity-80">Certified</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-light transition-all duration-200 transform hover:scale-105 hover:shadow-xl"
            >
              Get Quote Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/about" 
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-200 transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center">
          <div className="w-1 h-8 bg-white rounded-full opacity-50"></div>
          <div className="text-sm mt-2 opacity-70">Scroll</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

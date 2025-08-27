
import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Truck, Shield, Globe, Users, Factory, Leaf } from 'lucide-react';

const Home: React.FC = () => {
  const services = [
    {
      icon: Factory,
      title: 'Textile Manufacturing',
      description: 'State-of-the-art textile production with cutting-edge technology and quality control.',
    },
    {
      icon: Truck,
      title: 'Global Export',
      description: 'Reliable supply chain management and export services to over 50 countries worldwide.',
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'ISO certified quality management systems ensuring premium product standards.',
    },
    {
      icon: Leaf,
      title: 'Sustainable Practices',
      description: 'Eco-friendly manufacturing processes with minimal environmental impact.',
    },
  ];

  const stats = [
    { number: '20+', label: 'Years Experience' },
    { number: '50+', label: 'Countries Served' },
    { number: '2000+', label: 'Employees' },
    { number: '1M+', label: 'Products Exported' },
  ];

  return (
    <div>
      <Hero />
      
      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Award className="w-4 h-4 mr-2" />
                Industry Leader
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Crafting Excellence in <span className="text-primary">Textiles</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Since 2004, Kattali Textile Ltd has been at the forefront of Bangladesh's textile industry, 
                combining traditional craftsmanship with modern technology to deliver premium quality 
                textiles to global markets.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <Globe className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Global Reach</h4>
                    <p className="text-gray-600 text-sm">Exporting to 50+ countries worldwide</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Expert Team</h4>
                    <p className="text-gray-600 text-sm">2000+ skilled professionals</p>
                  </div>
                </div>
              </div>
              <Link 
                to="/about" 
                className="inline-flex items-center text-primary font-semibold hover:text-primary-light transition-colors duration-200"
              >
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Textile Manufacturing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-3xl font-bold text-primary mb-1">20+</div>
                <div className="text-gray-600 text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive textile solutions from manufacturing to global distribution
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-heading text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss your textile requirements and receive a customized quote.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-light transition-all duration-200 transform hover:scale-105"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

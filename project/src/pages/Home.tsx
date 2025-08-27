
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Globe, Zap, Shield, Heart } from 'lucide-react';
import Hero from '../components/Hero';

const Home: React.FC = () => {
  const features = [
    {
      icon: Award,
      title: "Quality Assured",
      description: "ISO certified manufacturing with rigorous quality control at every step."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Exporting to 50+ countries worldwide with reliable supply chain."
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Efficient production processes ensuring timely delivery of orders."
    },
    {
      icon: Shield,
      title: "Compliance",
      description: "Full compliance with international standards and certifications."
    }
  ];

  const stats = [
    { number: "25+", label: "Years Experience" },
    { number: "500+", label: "Skilled Workers" },
    { number: "50+", label: "Countries Served" },
    { number: "99%", label: "Quality Rating" }
  ];

  return (
    <div>
      <Hero />
      
      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-6 text-gray-900">
              Why Choose <span className="text-primary">Kattali Textile</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With over 25 years of experience, we deliver premium textile solutions 
              with unmatched quality and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-heading text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-6 text-gray-900">
              Our <span className="text-primary">Products</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From premium fabrics to finished garments, we offer a comprehensive 
              range of textile products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src="https://images.pexels.com/photos/7148457/pexels-photo-7148457.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Cotton Fabrics" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 text-gray-900">Cotton Fabrics</h3>
              <p className="text-gray-600 mb-4">Premium cotton fabrics for various applications.</p>
              <Link to="/products" className="text-primary font-semibold hover:text-accent transition-colors inline-flex items-center">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src="https://images.pexels.com/photos/7148457/pexels-photo-7148457.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Synthetic Fabrics" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 text-gray-900">Synthetic Fabrics</h3>
              <p className="text-gray-600 mb-4">High-performance synthetic materials for modern needs.</p>
              <Link to="/products" className="text-primary font-semibold hover:text-accent transition-colors inline-flex items-center">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src="https://images.pexels.com/photos/7148457/pexels-photo-7148457.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Finished Garments" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 text-gray-900">Finished Garments</h3>
              <p className="text-gray-600 mb-4">Ready-to-wear garments with superior quality.</p>
              <Link to="/products" className="text-primary font-semibold hover:text-accent transition-colors inline-flex items-center">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/products" 
              className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent transition-colors duration-200 group"
            >
              View All Products
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get in touch today to discuss your textile needs and discover 
            how we can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Quote
            </Link>
            <Link 
              to="/about" 
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

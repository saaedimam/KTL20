import React from 'react';
import { Settings, Users, Package, MapPin, Clock, Award, Shield, Zap } from 'lucide-react';

const Manufacturing = () => {
  const capabilities = [
    {
      icon: Settings,
      title: '680 Machines',
      description: 'State-of-the-art manufacturing equipment including cutting-edge sewing machines, cutting tables, and finishing equipment.',
    },
    {
      icon: Users,
      title: '1,200+ Employees',
      description: 'Skilled workforce including 750+ experienced operators, quality controllers, and technical specialists.',
    },
    {
      icon: Package,
      title: '360,000 Dozen/Year',
      description: 'Annual production capacity ensuring reliable supply for large-scale international orders.',
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Efficient production planning and logistics management for on-time delivery to global destinations.',
    },
  ];

  const processes = [
    {
      step: '01',
      title: 'Design & Development',
      description: 'Collaborative design process with technical specifications and sample development.',
    },
    {
      step: '02',
      title: 'Raw Material Sourcing',
      description: 'Quality fabric procurement from certified suppliers with strict quality standards.',
    },
    {
      step: '03',
      title: 'Cutting & Preparation',
      description: 'Precision cutting using computer-aided cutting systems for optimal fabric utilization.',
    },
    {
      step: '04',
      title: 'Manufacturing',
      description: 'Skilled operators using advanced machinery for high-quality garment production.',
    },
    {
      step: '05',
      title: 'Quality Control',
      description: 'Multi-stage quality inspection ensuring products meet international standards.',
    },
    {
      step: '06',
      title: 'Finishing & Packaging',
      description: 'Professional finishing, pressing, and packaging for global shipment.',
    },
  ];

  const qualityFeatures = [
    { icon: Shield, title: 'Quality Assurance', description: 'Comprehensive QC at every production stage' },
    { icon: Award, title: 'International Standards', description: 'Compliance with global quality certifications' },
    { icon: Zap, title: 'Efficiency', description: 'Optimized production processes for maximum efficiency' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-gradient-to-r from-black/70 to-black/50 flex items-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/7148457/pexels-photo-7148457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
              Manufacturing <span className="text-primary">Excellence</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Advanced facilities, skilled workforce, and proven processes for premium textile production
            </p>
          </div>
        </div>
      </section>

      {/* Factory Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-6 text-gray-900">
              Our Manufacturing <span className="text-primary">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With decades of experience and continuous investment in technology, 
              we deliver world-class manufacturing services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <capability.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-4 text-gray-900">{capability.title}</h3>
                <p className="text-gray-600 leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-6 text-gray-900">
              Our Manufacturing <span className="text-primary">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to delivery, our streamlined process ensures quality, 
              efficiency, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processes.map((process, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {process.step}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-gray-900">{process.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-4xl font-bold mb-8 text-gray-900">
                Strategic <span className="text-primary">Location</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Factory Address</h3>
                    <p className="text-gray-700 leading-relaxed">
                      BM Heights, 8th Floor<br />
                      318 Sk. Mujib Road, Agrabad<br />
                      Chittagong, Bangladesh
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Location Advantages</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Direct access to Chittagong Port - Bangladesh's largest seaport
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Close proximity to fabric suppliers and raw material sources
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Excellent transportation connectivity for efficient logistics
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Access to skilled textile workforce in the region
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7148448/pexels-photo-7148448.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Manufacturing facility"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-6 text-gray-900">
              Quality <span className="text-primary">Commitment</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality is reflected in every aspect of our manufacturing process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {qualityFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
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

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold text-white mb-6">
            Ready to Experience Our Manufacturing Excellence?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your manufacturing requirements and visit our facilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Factory Visit
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
              Request Manufacturing Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manufacturing;
import React from 'react';
import { Factory, Cog, Shield, Leaf, Users, BarChart3 } from 'lucide-react';

const Manufacturing: React.FC = () => {
  const processes = [
    {
      step: '01',
      title: 'Raw Material Selection',
      description: 'Carefully sourced premium quality raw materials from trusted suppliers worldwide.',
      icon: Leaf
    },
    {
      step: '02',
      title: 'Design & Planning',
      description: 'Advanced CAD systems and experienced designers create detailed production plans.',
      icon: Cog
    },
    {
      step: '03',
      title: 'Production',
      description: 'State-of-the-art machinery and skilled technicians ensure precision manufacturing.',
      icon: Factory
    },
    {
      step: '04',
      title: 'Quality Control',
      description: 'Rigorous testing and inspection at every stage to maintain highest standards.',
      icon: Shield
    },
    {
      step: '05',
      title: 'Packaging & Dispatch',
      description: 'Careful packaging and efficient logistics for timely global delivery.',
      icon: BarChart3
    }
  ];

  const capabilities = [
    { name: 'Daily Production Capacity', value: '50,000 units' },
    { name: 'Manufacturing Units', value: '5 facilities' },
    { name: 'Quality Control Stages', value: '15 checkpoints' },
    { name: 'Skilled Workforce', value: '2000+ employees' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-black/70 to-black/50" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container mx-auto px-4">
          <div className="text-center text-white max-w-4xl mx-auto">
            <Factory className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Manufacturing Excellence
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Advanced manufacturing processes combining traditional craftsmanship 
              with cutting-edge technology to deliver world-class textiles.
            </p>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Manufacturing <span className="text-primary">Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach ensuring quality, efficiency, and sustainability at every step
            </p>
          </div>

          <div className="space-y-12">
            {processes.map((process, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className="bg-primary text-white w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold mr-6">
                      {process.step}
                    </div>
                    <process.icon className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="font-heading text-3xl font-bold text-gray-900 mb-4">
                    {process.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {process.description}
                  </p>
                </div>
                
                <div className="flex-1">
                  <div className="aspect-[4/3] rounded-2xl bg-gray-100 flex items-center justify-center">
                    <process.icon className="w-24 h-24 text-primary/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Manufacturing Capabilities
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              State-of-the-art facilities equipped with modern technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {capability.value}
                </div>
                <div className="text-white/80 font-medium">
                  {capability.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Innovation */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">
                Technology & <span className="text-primary">Innovation</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our manufacturing facilities are equipped with the latest technology, 
                including automated production lines, computerized quality control systems, 
                and eco-friendly processing equipment.
              </p>
              
              <div className="space-y-4">
                {[
                  'Automated cutting and sewing systems',
                  'Computer-aided design (CAD) software',
                  'Real-time quality monitoring',
                  'Sustainable dyeing processes',
                  'Energy-efficient machinery',
                  'Waste reduction technologies'
                ].map((tech, index) => (
                  <div key={index} className="flex items-center">
                    <Cog className="w-5 h-5 text-primary mr-3" />
                    <span className="text-gray-700">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Manufacturing Technology"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manufacturing;

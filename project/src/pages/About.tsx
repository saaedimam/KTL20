import React from 'react';
import { Target, Eye, Users2, MapPin, Calendar, Award } from 'lucide-react';

const About = () => {
  const leadership = [
    {
      name: 'Nasreen Haque',
      position: 'Chairman',
      description: 'Visionary leader with extensive experience in textile industry development and strategic planning.',
    },
    {
      name: 'Md. Emdadul Hoque Chowdhury',
      position: 'Managing Director',
      description: 'Operations expert focused on sustainable manufacturing and international market expansion.',
    },
  ];

  const milestones = [
    { year: '2004', event: 'Company established in Chittagong' },
    { year: '2008', event: 'First international export shipment' },
    { year: '2012', event: 'Sedex certification achieved' },
    { year: '2016', event: 'Green factory initiatives launched' },
    { year: '2020', event: 'Production capacity reached 360,000 dozen/year' },
    { year: '2024', event: 'Celebrating 20 years of excellence' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-gradient-to-r from-black/70 to-black/50 flex items-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3962294/pexels-photo-3962294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-primary">Kattali Textile</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Two decades of excellence in textile manufacturing and global export operations
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-4xl font-bold mb-8 text-gray-900">
                Our <span className="text-primary">Story</span>
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Established in 2004, Kattali Textile Ltd is a Chittagong-based garment manufacturer 
                  specializing in woven and knitwear exports. Over the past two decades, we have built 
                  a reputation for delivering premium quality textiles to global markets.
                </p>
                <p>
                  Our commitment to excellence, sustainable practices, and ethical manufacturing has 
                  made us a trusted partner for international brands seeking reliable textile sourcing 
                  from Bangladesh.
                </p>
                <p>
                  With state-of-the-art manufacturing facilities, skilled workforce, and comprehensive 
                  quality control systems, we ensure every product meets the highest international standards.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="font-heading text-2xl font-bold text-gray-900">20+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="font-heading text-2xl font-bold text-gray-900">3+</div>
                  <div className="text-sm text-gray-600">Certifications</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7148457/pexels-photo-7148457.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Textile manufacturing"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To deliver excellence through sustainable and ethical garment manufacturing, 
                providing our global partners with premium quality textiles while maintaining 
                the highest standards of environmental and social responsibility.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4 text-gray-900">Our Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To become a globally respected textile brand from Bangladesh, recognized for 
                innovation, quality, and sustainable practices, while contributing to the 
                economic development of our community and country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold text-center mb-16 text-gray-900">
            Our <span className="text-primary">Leadership</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {leadership.map((leader, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users2 className="w-24 h-24 text-gray-400" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-2 text-gray-900">{leader.name}</h3>
                <h4 className="text-primary font-semibold text-lg mb-4">{leader.position}</h4>
                <p className="text-gray-700 leading-relaxed">{leader.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold text-center mb-16 text-gray-900">
            Our <span className="text-primary">Journey</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center space-x-6">
                  <div className="flex-shrink-0 w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                    <span className="font-heading font-bold text-white text-lg">{milestone.year}</span>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg flex-grow">
                    <p className="text-gray-700 text-lg">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-4xl font-bold mb-8 text-gray-900">
                Our <span className="text-primary">Location</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Head Office & Factory</h3>
                    <p className="text-gray-700 leading-relaxed">
                      BM Heights, 8th Floor<br />
                      318 Sk. Mujib Road, Agrabad<br />
                      Chittagong, Bangladesh
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Strategically located in Chittagong, Bangladesh's commercial capital and largest port city, 
                  our facilities provide excellent access to international shipping routes and supply chains.
                </p>
              </div>
            </div>
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg">Interactive Map</p>
                <p className="text-sm">Chittagong, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
import React from 'react';
import { Award, Users, Globe, Factory, Shield, Leaf, Target, Eye } from 'lucide-react';

const About: React.FC = () => {
  const milestones = [
    { year: '2004', title: 'Company Founded', description: 'Kattali Textile Ltd established in Chittagong' },
    { year: '2008', title: 'First Export', description: 'Started exporting to European markets' },
    { year: '2012', title: 'ISO Certification', description: 'Achieved ISO 9001:2008 certification' },
    { year: '2016', title: 'Capacity Expansion', description: 'Doubled production capacity with new facility' },
    { year: '2020', title: 'Sustainability Initiative', description: 'Launched eco-friendly manufacturing processes' },
    { year: '2024', title: 'Global Leadership', description: 'Serving 50+ countries worldwide' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Quality Excellence',
      description: 'Uncompromising commitment to delivering premium quality textiles that exceed international standards.'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Environmental responsibility through eco-friendly processes and sustainable manufacturing practices.'
    },
    {
      icon: Users,
      title: 'People First',
      description: 'Investing in our workforce and creating a positive impact in the communities we serve.'
    },
    {
      icon: Globe,
      title: 'Global Partnership',
      description: 'Building lasting relationships with clients worldwide through trust, reliability, and excellence.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-black/80 via-black/60 to-black/40" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="container mx-auto px-4">
          <div className="text-center text-white max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
              <Award className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-sm font-semibold">About Kattali Textile</span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Crafting Excellence Since <span className="text-primary">2004</span>
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Two decades of innovation, quality, and sustainable textile manufacturing 
              serving global markets with premium products.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-primary">Story</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Established in 2004, Kattali Textile Ltd began as a small textile manufacturing 
                unit in the industrial heartland of Chittagong, Bangladesh. With a vision to 
                create world-class textiles, we've grown into one of the region's most trusted 
                textile manufacturers.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Today, we serve over 50 countries worldwide, employing more than 2000 skilled 
                professionals and maintaining the highest standards of quality, sustainability, 
                and customer satisfaction.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <Factory className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">5</div>
                  <div className="text-sm text-gray-600">Manufacturing Units</div>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">2000+</div>
                  <div className="text-sm text-gray-600">Employees</div>
                </div>
                <div className="text-center">
                  <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Countries Served</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Manufacturing Facility"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-white rounded-2xl p-6 shadow-xl">
                <div className="text-3xl font-bold mb-1">20+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <Target className="w-12 h-12 text-primary mb-6" />
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading textile manufacturer that delivers exceptional quality products 
                while maintaining sustainable practices, fostering innovation, and creating value 
                for all stakeholders including employees, customers, and communities.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <Eye className="w-12 h-12 text-primary mb-6" />
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the most trusted global textile manufacturing partner, recognized for 
                our commitment to quality, sustainability, and innovation while contributing 
                to the economic development of Bangladesh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core <span className="text-primary">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our operations and define our company culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-primary">Journey</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones in our journey toward becoming a global textile leader
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 hidden lg:block"></div>
            
            <div className="space-y-12 lg:space-y-16">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}>
                  <div className={`flex-1 ${
                    index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'
                  }`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                      <div className="text-primary font-bold text-2xl mb-2">{milestone.year}</div>
                      <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg z-10 my-4 lg:my-0"></div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Leadership <span className="text-primary">Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals driving our company's success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Mohammad Rahman', position: 'Chief Executive Officer', experience: '25+ years in textile industry' },
              { name: 'Sarah Ahmed', position: 'Chief Operations Officer', experience: '20+ years in manufacturing' },
              { name: 'Dr. Karim Hassan', position: 'Head of Quality Assurance', experience: '15+ years in quality management' }
            ].map((leader, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-12 h-12 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                  {leader.name}
                </h3>
                <p className="text-primary font-semibold mb-3">{leader.position}</p>
                <p className="text-gray-600 text-sm">{leader.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

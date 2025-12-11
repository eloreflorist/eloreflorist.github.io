const Services = () => {
  const services = [
    {
      title: 'Consulting',
      description: 'Expert business consulting services to help you make informed decisions.',
      features: ['Strategy Development', 'Market Analysis', 'Risk Assessment'],
    },
    {
      title: 'Development',
      description: 'Custom software and web development solutions.',
      features: ['Web Applications', 'Mobile Apps', 'E-commerce Solutions'],
    },
    {
      title: 'Marketing',
      description: 'Digital marketing services to boost your online presence.',
      features: ['SEO Optimization', 'Social Media Marketing', 'Content Strategy'],
    },
    {
      title: 'Support',
      description: 'Ongoing technical support and maintenance.',
      features: ['24/7 Monitoring', 'Regular Updates', 'Technical Assistance'],
    },
    {
      title: 'Training',
      description: 'Comprehensive training programs for your team.',
      features: ['Workshops', 'Online Courses', 'Certification Programs'],
    },
    {
      title: 'Analytics',
      description: 'Data analysis and business intelligence services.',
      features: ['Data Visualization', 'Performance Metrics', 'Growth Insights'],
    },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-primary text-center mb-4">Our Services</h1>
        <p className="text-xl text-primary text-center mb-12 max-w-3xl mx-auto">
          We offer a comprehensive range of services designed to help your business thrive in the digital age.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg border border-accent hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-primary mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-primary">
                    <span className="text-accent mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition-colors w-full">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
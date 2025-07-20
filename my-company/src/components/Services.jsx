function Services() {
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
    minHeight: 'calc(100vh - 200px)'
  };

  const headingStyle = {
    color: '#2c3e50',
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '2.5rem',
    paddingBottom: '1rem',
    borderBottom: '2px solid #3498db',
    display: 'inline-block',
    marginLeft: '50%',
    transform: 'translateX(-50%)'
  };

  const servicesGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '2rem',
    marginTop: '2rem'
  };

  const serviceCard = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 25px rgba(0,0,0,0.15)'
    }
  };

  const serviceHeader = {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '1.5rem',
    textAlign: 'center'
  };

  const serviceBody = {
    padding: '1.5rem'
  };

  const serviceTitle = {
    fontSize: '1.5rem',
    margin: '0 0 1rem 0',
    color: '#2c3e50'
  };

  const serviceDescription = {
    color: '#7f8c8d',
    lineHeight: '1.6',
    marginBottom: '1.5rem'
  };

  const serviceFeatures = {
    listStyle: 'none',
    padding: 0,
    margin: '1.5rem 0 0 0'
  };

  const featureItem = {
    padding: '0.5rem 0',
    borderBottom: '1px solid #eee',
    display: 'flex',
    alignItems: 'center'
  };

  const checkIcon = {
    color: '#2ecc71',
    marginRight: '0.75rem',
    fontSize: '1.2rem'
  };

  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Custom websites and web applications built with the latest technologies to help your business grow online.',
      features: [
        'Responsive Design',
        'E-commerce Solutions',
        'CMS Integration',
        'Web Application Development',
        'API Integration'
      ]
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android to reach your customers on the go.',
      features: [
        'iOS & Android Apps',
        'Cross-Platform Solutions',
        'UI/UX Design',
        'App Store Optimization',
        'Maintenance & Support'
      ]
    },
    {
      id: 3,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to increase your online presence and drive conversions.',
      features: [
        'SEO & Content Strategy',
        'Social Media Marketing',
        'PPC Advertising',
        'Email Marketing',
        'Analytics & Reporting'
      ]
    },
    {
      id: 4,
      title: 'Cloud Solutions',
      description: 'Scalable and secure cloud infrastructure to power your business applications and data.',
      features: [
        'Cloud Migration',
        'Serverless Architecture',
        'DevOps Services',
        'Cloud Security',
        '24/7 Monitoring'
      ]
    },
    {
      id: 5,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces designed to enhance user experience and engagement.',
      features: [
        'User Research',
        'Wireframing & Prototyping',
        'Interaction Design',
        'Usability Testing',
        'Design Systems'
      ]
    },
    {
      id: 6,
      title: 'IT Consulting',
      description: 'Expert technology consulting to help you make informed decisions for your business growth.',
      features: [
        'Technology Strategy',
        'Digital Transformation',
        'IT Infrastructure',
        'Cybersecurity',
        'Compliance & Governance'
      ]
    }
  ];

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Our Services</h1>
      <div style={servicesGrid}>
        {services.map(service => (
          <div key={service.id} style={serviceCard}>
            <div style={serviceHeader}>
              <h2 style={{ margin: 0, fontSize: '1.5rem' }}>{service.title}</h2>
            </div>
            <div style={serviceBody}>
              <p style={serviceDescription}>{service.description}</p>
              <h3 style={{ margin: '1.5rem 0 1rem 0', color: '#2c3e50' }}>What We Offer:</h3>
              <ul style={serviceFeatures}>
                {service.features.map((feature, index) => (
                  <li key={index} style={featureItem}>
                    <span style={checkIcon}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;


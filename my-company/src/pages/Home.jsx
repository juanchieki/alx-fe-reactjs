function Home() {
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
    textAlign: 'center',
    minHeight: 'calc(100vh - 200px)'
  };

  const headingStyle = {
    color: '#2c3e50',
    fontSize: '2.5rem',
    marginBottom: '1rem'
  };

  const paragraphStyle = {
    color: '#34495e',
    fontSize: '1.2rem',
    lineHeight: '1.6',
    maxWidth: '800px',
    margin: '0 auto 2rem'
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to Our Company</h1>
      <p style={paragraphStyle}>
        We are dedicated to delivering excellence in all our services. Our team of professionals 
        is committed to providing innovative solutions tailored to your business needs.
      </p>
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '2rem', 
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ color: '#2c3e50', marginBottom: '1rem' }}>Why Choose Us?</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', minWidth: '200px' }}>
            <h3 style={{ color: '#3498db' }}>Expert Team</h3>
            <p>Our professionals have years of industry experience.</p>
          </div>
          <div style={{ flex: '1', minWidth: '200px' }}>
            <h3 style={{ color: '#3498db' }}>Quality Service</h3>
            <p>We're committed to delivering top-notch solutions.</p>
          </div>
          <div style={{ flex: '1', minWidth: '200px' }}>
            <h3 style={{ color: '#3498db' }}>24/7 Support</h3>
            <p>We're here for you around the clock.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

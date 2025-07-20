function About() {
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
    minHeight: 'calc(100vh - 200px)'
  };

  const sectionStyle = {
    marginBottom: '3rem',
    padding: '1.5rem',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  };

  const headingStyle = {
    color: '#2c3e50',
    fontSize: '2rem',
    marginBottom: '1.5rem',
    paddingBottom: '0.5rem',
    borderBottom: '2px solid #3498db'
  };

  const paragraphStyle = {
    color: '#34495e',
    fontSize: '1.1rem',
    lineHeight: '1.7',
    marginBottom: '1.5rem'
  };

  const teamGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '2rem',
    marginTop: '2rem'
  };

  const teamMember = {
    backgroundColor: '#f8f9fa',
    padding: '1.5rem',
    borderRadius: '8px',
    textAlign: 'center',
    transition: 'transform 0.3s, box-shadow 0.3s'
  };

  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <h1 style={headingStyle}>Our Story</h1>
        <p style={paragraphStyle}>
          Founded in 1990, our company has been at the forefront of delivering exceptional 
          services to clients worldwide. What started as a small team of passionate professionals 
          has grown into a global organization with a reputation for excellence and innovation.
        </p>
        <p style={paragraphStyle}>
          Our journey has been marked by numerous milestones, from serving our first client to 
          expanding our operations across multiple continents. Throughout these years, our commitment 
          to quality and customer satisfaction has remained unwavering.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>Our Mission</h2>
        <p style={paragraphStyle}>
          To empower businesses through innovative solutions, cutting-edge technology, and 
          unparalleled expertise. We believe in building lasting relationships with our clients 
          by delivering value that exceeds their expectations.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>Our Team</h2>
        <p style={paragraphStyle}>
          Meet the talented individuals who make our success possible. Our diverse team of experts 
          brings together a wealth of knowledge and experience across various industries.
        </p>
        
        <div style={teamGrid}>
          <div style={teamMember}>
            <h3 style={{ color: '#2c3e50' }}>Sarah Johnson</h3>
            <p style={{ color: '#7f8c8d', fontStyle: 'italic' }}>CEO & Founder</p>
            <p>20+ years of industry experience</p>
          </div>
          <div style={teamMember}>
            <h3 style={{ color: '#2c3e50' }}>Michael Chen</h3>
            <p style={{ color: '#7f8c8d', fontStyle: 'italic' }}>CTO</p>
            <p>Technology innovation leader</p>
          </div>
          <div style={teamMember}>
            <h3 style={{ color: '#2c3e50' }}>Emily Rodriguez</h3>
            <p style={{ color: '#7f8c8d', fontStyle: 'italic' }}>Head of Operations</p>
            <p>Process optimization expert</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;


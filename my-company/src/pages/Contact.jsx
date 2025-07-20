import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem',
    minHeight: 'calc(100vh - 200px)'
  };

  const headingStyle = {
    color: '#2c3e50',
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '2rem',
    paddingBottom: '1rem',
    borderBottom: '2px solid #3498db',
    display: 'inline-block',
    marginLeft: '50%',
    transform: 'translateX(-50%)'
  };

  const formStyle = {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  };

  const formGroup = {
    marginBottom: '1.5rem'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    color: '#2c3e50',
    fontWeight: '500'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem',
    transition: 'border-color 0.3s, box-shadow 0.3s',
    ':focus': {
      outline: 'none',
      borderColor: '#3498db',
      boxShadow: '0 0 0 2px rgba(52, 152, 219, 0.2)'
    }
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '150px',
    resize: 'vertical'
  };

  const buttonStyle = {
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    ':hover': {
      backgroundColor: '#2980b9'
    },
    ':disabled': {
      backgroundColor: '#bdc3c7',
      cursor: 'not-allowed'
    }
  };

  const contactInfo = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginTop: '3rem'
  };

  const infoCard = {
    backgroundColor: '#f8f9fa',
    padding: '1.5rem',
    borderRadius: '8px',
    textAlign: 'center'
  };

  const iconStyle = {
    fontSize: '2rem',
    color: '#3498db',
    marginBottom: '1rem'
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please fill in all required fields.'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please enter a valid email address.'
      });
      return;
    }

    // Simulate form submission
    setFormStatus({ submitted: true, success: true, message: 'Your message has been sent successfully!' });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setFormStatus(prev => ({ ...prev, submitted: false }));
    }, 5000);
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Contact Us</h1>
      
      <div style={formStyle}>
        {formStatus.submitted && (
          <div style={{
            padding: '1rem',
            marginBottom: '1.5rem',
            backgroundColor: formStatus.success ? '#d4edda' : '#f8d7da',
            color: formStatus.success ? '#155724' : '#721c24',
            borderRadius: '4px',
            border: `1px solid ${formStatus.success ? '#c3e6cb' : '#f5c6cb'}`,
            textAlign: 'center'
          }}>
            {formStatus.message}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div style={formGroup}>
            <label htmlFor="name" style={labelStyle}>
              Name <span style={{ color: '#e74c3c' }}>*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>
          
          <div style={formGroup}>
            <label htmlFor="email" style={labelStyle}>
              Email <span style={{ color: '#e74c3c' }}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>
          
          <div style={formGroup}>
            <label htmlFor="subject" style={labelStyle}>
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
          
          <div style={formGroup}>
            <label htmlFor="message" style={labelStyle}>
              Message <span style={{ color: '#e74c3c' }}>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={textareaStyle}
              required
            />
          </div>
          
          <button 
            type="submit" 
            style={buttonStyle}
            disabled={formStatus.submitted && formStatus.success}
          >
            {formStatus.submitted && formStatus.success ? 'Message Sent!' : 'Send Message'}
          </button>
        </form>
      </div>
      
      <div style={contactInfo}>
        <div style={infoCard}>
          <div style={iconStyle}>📍</div>
          <h3 style={{ color: '#2c3e50' }}>Our Office</h3>
          <p>123 Business Street<br />New York, NY 10001<br />United States</p>
        </div>
        
        <div style={infoCard}>
          <div style={iconStyle}>📞</div>
          <h3 style={{ color: '#2c3e50' }}>Phone</h3>
          <p>+1 (555) 123-4567<br />Mon - Fri, 9:00 AM - 6:00 PM EST</p>
        </div>
        
        <div style={infoCard}>
          <div style={iconStyle}>✉️</div>
          <h3 style={{ color: '#2c3e50' }}>Email</h3>
          <p>info@company.com<br />support@company.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;

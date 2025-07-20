import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    backgroundColor: '#333',
    padding: '1rem',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: '20px'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    transition: 'background-color 0.3s'
  };

  const hoverStyle = {
    backgroundColor: '#555'
  };

  return (
    <nav style={navStyle}>
      <h1>Company Name</h1>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/" style={linkStyle} onMouseOver={e => e.target.style.backgroundColor = '#555'} onMouseOut={e => e.target.style.backgroundColor = 'transparent'}>Home</Link>
        <Link to="/about" style={linkStyle} onMouseOver={e => e.target.style.backgroundColor = '#555'} onMouseOut={e => e.target.style.backgroundColor = 'transparent'}>About</Link>
        <Link to="/services" style={linkStyle} onMouseOver={e => e.target.style.backgroundColor = '#555'} onMouseOut={e => e.target.style.backgroundColor = 'transparent'}>Services</Link>
        <Link to="/contact" style={linkStyle} onMouseOver={e => e.target.style.backgroundColor = '#555'} onMouseOut={e => e.target.style.backgroundColor = 'transparent'}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  const appStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f5f7fa',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    lineHeight: '1.6',
    color: '#333'
  };

  const mainStyle = {
    flex: '1',
    padding: '20px 0'
  };

  const footerStyle = {
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    textAlign: 'center',
    padding: '1.5rem',
    marginTop: 'auto'
  };

  return (
    <Router>
      <div style={appStyle}>
        <Navbar />
        <main style={mainStyle}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer style={footerStyle}>
          <p>© {new Date().getFullYear()} Company Name. All rights reserved.</p>
          <p>
            <a href="/privacy" style={{ color: '#ecf0f1', margin: '0 10px' }}>Privacy Policy</a> | 
            <a href="/terms" style={{ color: '#ecf0f1', margin: '0 10px' }}>Terms of Service</a> | 
            <a href="/contact" style={{ color: '#ecf0f1', margin: '0 10px' }}>Contact Us</a>
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;


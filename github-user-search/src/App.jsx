// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import your pages
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <div>
        {/* Simple Navbar */}
        <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
          <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
          <Link to="/about" style={{ marginRight: '1rem' }}>About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Page Content */}
        <div style={{ padding: '2rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

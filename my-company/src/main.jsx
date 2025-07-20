import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Add some global styles
const globalStyles = document.createElement('style');
globalStyles.textContent = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  button, input, textarea, select {
    font-family: inherit;
  }
  
  /* Add smooth scrolling to all pages */
  html {
    scroll-behavior: smooth;
  }
`;
document.head.appendChild(globalStyles);

// Render the app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


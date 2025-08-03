import { useState } from 'react';

const SearchBar = ({ onSearch, disabled = false }) => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (!query.trim()) {
      setError('Please enter a search term');
      return;
    }
    
    onSearch(query);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    // Clear error when user starts typing
    if (error) {
      setError('');
    }
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit} aria-label="Search GitHub users">
        <div className="search-input-container">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search GitHub users..."
            className="search-input"
            aria-label="Search GitHub users"
            aria-invalid={error ? 'true' : undefined}
            aria-describedby={error ? 'search-error' : undefined}
            disabled={disabled}
          />
          <button 
            type="submit" 
            className="search-button"
            disabled={disabled || !query.trim()}
            aria-label="Search"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>
        {error && (
          <p id="search-error" className="error-message">
            {error}
          </p>
        )}
      </form>
    </div>
  );
};

export default SearchBar;

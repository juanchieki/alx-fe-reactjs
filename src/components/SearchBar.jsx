import { useState, useEffect } from 'react';

const SearchBar = ({ onSearch, onAdvancedSearch, disabled = false, loading = false, error = '' }) => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [localError, setLocalError] = useState('');

  // Clear local error when error prop changes
  useEffect(() => {
    if (error) {
      setLocalError(error);
    }
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalError('');
    
    if (!username.trim()) {
      setLocalError('Please enter a GitHub username');
      return;
    }
    
    if (showAdvanced && (location || minRepos)) {
      onAdvancedSearch({ username, location, minRepos });
    } else {
      onSearch(username);
    }
  };

  const toggleAdvanced = () => {
    setShowAdvanced(!showAdvanced);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1 relative">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter GitHub username..."
              className={`w-full px-4 py-2 rounded-lg border ${
                localError ? 'border-red-500' : 'border-gray-600'
              } bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              aria-label="GitHub username"
              aria-invalid={!!localError}
              aria-describedby={localError ? 'search-error' : undefined}
              disabled={disabled || loading}
            />
            <button 
              type="button"
              onClick={toggleAdvanced}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white focus:outline-none"
              aria-label={showAdvanced ? 'Hide advanced search' : 'Show advanced search'}
              disabled={disabled || loading}
            >
              {showAdvanced ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          </div>
          <button
            type="submit"
            disabled={disabled || loading}
            className={`px-6 py-2 rounded-lg ${
              disabled || loading
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            } text-white font-medium transition-colors`}
          >
            {loading ? 'Loading...' : 'Search'}
          </button>
        </div>

        {showAdvanced && (
          <div className="bg-gray-800 p-4 rounded-lg space-y-3 animate-fade-in">
            <h3 className="text-lg font-medium text-white mb-2">Advanced Search</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g., San Francisco"
                  className="w-full px-3 py-2 rounded-md border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={disabled || loading}
                />
              </div>
              <div>
                <label htmlFor="min-repos" className="block text-sm font-medium text-gray-300 mb-1">
                  Minimum Repositories
                </label>
                <input
                  type="number"
                  id="min-repos"
                  min="0"
                  value={minRepos}
                  onChange={(e) => setMinRepos(e.target.value)}
                  placeholder="e.g., 10"
                  className="w-full px-3 py-2 rounded-md border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={disabled || loading}
                />
              </div>
            </div>
          </div>
        )}

        {localError && (
          <div id="search-error" className="text-red-400 text-sm mt-2">
            {localError}
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;

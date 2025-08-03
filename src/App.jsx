import { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import { fetchUserData, advancedSearch } from './services/githubService';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (username) => {
    if (!username.trim()) {
      setError('Please enter a GitHub username');
      return;
    }

    try {
      setLoading(true);
      setError('');
      setUser(null);
      
      const userData = await fetchUserData(username);
      setUser(userData);
    } catch (err) {
      setError(err.message || 'Failed to fetch user data');
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const handleAdvancedSearch = async (searchParams) => {
    const { username, location, minRepos } = searchParams;
    
    if (!username.trim()) {
      setError('Please enter a GitHub username');
      return;
    }

    try {
      setLoading(true);
      setError('');
      setUser(null);
      
      const userData = await advancedSearch({
        username,
        location: location || undefined,
        minRepos: minRepos ? parseInt(minRepos, 10) : undefined
      });
      
      setUser(userData);
    } catch (err) {
      setError(err.message || 'Failed to perform advanced search');
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <header>
        <h1>GitHub User Search</h1>
        <p className="subtitle">Search for GitHub users and explore their profiles</p>
      </header>
      
      <SearchBar 
        onSearch={handleSearch}
        onAdvancedSearch={handleAdvancedSearch}
        disabled={loading} 
        loading={loading}
        error={error}
      />
      
      <main className="main-content">
        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading user data...</p>
          </div>
        )}
        
        {error && !loading && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}
        
        {user && !loading && <UserCard user={user} />}
      </main>
      
      {error && <div className="error">{error}</div>}
      
      {!loading && users.length > 0 && (
        <div className="results-summary">
          Found {users.length} {users.length === 1 ? 'user' : 'users'}
        </div>
      )}
      
      <div className="users-grid">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      
      {!loading && users.length === 0 && !error && (
        <div className="no-results">
          <p>Search for GitHub users by their username</p>
          <p>Example: Try searching for "octocat"</p>
        </div>
      )}
    </div>
  );
}

export default App;

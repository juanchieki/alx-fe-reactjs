import { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import { searchUsers } from './services/githubService';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    if (!query.trim()) {
      setError('Please enter a search term');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      const results = await searchUsers(query);
      setUsers(results);
      
      if (results.length === 0) {
        setError('No users found. Try a different search term.');
      }
    } catch (err) {
      setError(err.message || 'An error occurred while searching for users.');
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
      
      <SearchBar onSearch={handleSearch} disabled={loading} />
      
      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          <p>Searching for users...</p>
        </div>
      )}
      
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

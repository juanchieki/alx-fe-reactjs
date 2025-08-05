import { useState } from 'react';
import { fetchUserData } from './services/githubService';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
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

  console.log('App component rendering');
  
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">GitHub User Search</h1>
        
        <form onSubmit={handleSearch} className="mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter GitHub username"
              className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={loading}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </form>
        
        {loading && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            <p className="mt-2 text-gray-600">Loading...</p>
          </div>
        )}
        
        {error && !loading && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded" role="alert">
            <p>{error}</p>
          </div>
        )}
        
        {user && !loading && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-6">
              <img 
                src={user.avatar_url} 
                alt={`${user.login}'s avatar`} 
                className="w-24 h-24 rounded-full"
              />
              <div>
                <h2 className="text-2xl font-bold">{user.name || user.login}</h2>
                {user.bio && <p className="text-gray-600 mt-1">{user.bio}</p>}
                <div className="flex gap-4 mt-3 text-sm text-gray-500">
                  <span>Followers: {user.followers}</span>
                  <span>Following: {user.following}</span>
                  <span>Repos: {user.public_repos}</span>
                </div>
                {user.blog && (
                  <a 
                    href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline mt-2 inline-block"
                  >
                    {user.blog}
                  </a>
                )}
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 mt-4 inline-block"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

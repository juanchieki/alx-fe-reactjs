import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import { fetchUserData, advancedSearch } from './services/githubService';
import './App.css';

// Test component to verify React rendering
function TestComponent() {
  return (
    <div className="p-4 bg-blue-100 text-blue-800 rounded-lg">
      <h1 className="text-2xl font-bold">Test Component</h1>
      <p>If you can see this, React is working!</p>
    </div>
  );
}

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
      setError("Looks like we can't find the user");
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

  // Debug log to confirm component is rendering
  console.log('App component rendering');
  
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Test component to verify React and Tailwind are working */}
        <TestComponent />
        
        <h1 className="text-3xl font-bold text-center my-8">GitHub User Search</h1>
        
        <SearchBar 
          onSearch={handleSearch}
          onAdvancedSearch={handleAdvancedSearch}
        />
        
        {loading && (
          <div className="flex justify-center my-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        
        {user && <UserCard user={user} />}
        
        {!loading && !user && !error && (
          <div className="text-center text-gray-500 mt-8">
            <p>Search for GitHub users by their username</p>
            <p className="mt-2">Example: Try searching for "octocat"</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

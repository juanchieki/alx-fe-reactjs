import React, { useState } from 'react';
import githubService from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUser(null);

    try {
      const userData = await githubService.fetchUserData(username);
      setUser(userData);
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow-md rounded-xl">
        <h2 className="text-xl font-semibold text-gray-700">GitHub User Search</h2>
        <input
          type="text"
          placeholder="GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-center text-blue-500">Loading...</p>}
      {error && <p className="mt-4 text-center text-red-500">{error}</p>}

      {user && !loading && !error && (
        <div className="mt-6 p-4 border rounded-md shadow">
          <div className="flex items-center space-x-4">
            <img src={user.avatar_url} alt="Avatar" className="w-16 h-16 rounded-full" />
            <div>
              <h3 className="text-lg font-semibold">{user.name || user.login}</h3>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mt-1 block"
              >
                Visit GitHub Profile
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
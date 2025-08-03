import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

// Create an axios instance with default config
const githubApi = axios.create({
  baseURL: GITHUB_API_URL,
  headers: {
    'Accept': 'application/vnd.github.v3+json',
  },
});

/**
 * Search for GitHub users
 * @param {string} query - Search query string
 * @returns {Promise<Array>} Array of GitHub users
 */
export const searchUsers = async (query) => {
  try {
    const response = await githubApi.get('/search/users', {
      params: { 
        q: `${query} in:login`,
        per_page: 10 // Limit to 10 results per page
      }
    });
    
    // Get detailed information for each user
    const users = await Promise.all(
      response.data.items.map(user => getUserProfile(user.login))
    );
    
    return users;
  } catch (error) {
    if (error.response?.status === 403) {
      throw new Error('API rate limit exceeded. Please try again later.');
    }
    
    console.error('Error searching users:', error);
    throw new Error('Failed to search users. Please try again.');
  }
};

/**
 * Get detailed profile for a specific GitHub user
 * @param {string} username - GitHub username
 * @returns {Promise<Object>} Detailed GitHub user information
 */
export const getUserProfile = async (username) => {
  try {
    const response = await githubApi.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error('User not found');
    }
    
    console.error(`Error fetching user profile for ${username}:`, error);
    throw new Error('Failed to fetch user profile. Please try again.');
  }
};

/**
 * Get rate limit information from GitHub API
 * @returns {Promise<Object>} Rate limit information
 */
export const getRateLimit = async () => {
  try {
    const response = await githubApi.get('/rate_limit');
    return response.data.resources.core;
  } catch (error) {
    console.error('Error fetching rate limit:', error);
    return null;
  }
};

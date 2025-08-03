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
 * Fetch user data from GitHub API
 * @param {string} username - GitHub username to search for
 * @returns {Promise<Object>} User data object
 */
export const fetchUserData = async (username) => {
  try {
    const response = await githubApi.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error('User not found');
    }
    if (error.response?.status === 403) {
      throw new Error('API rate limit exceeded. Please try again later.');
    }
    throw new Error('Failed to fetch user data. Please try again.');
  }
};

/**
 * Search for GitHub users with advanced filters
 * @param {Object} params - Search parameters
 * @param {string} params.username - GitHub username to search for
 * @param {string} [params.location] - Filter by user location
 * @param {number} [params.minRepos] - Minimum number of repositories
 * @returns {Promise<Object>} User data object with additional search results if applicable
 */
export const advancedSearch = async ({ username, location, minRepos }) => {
  try {
    // First, get the user profile
    const user = await fetchUserData(username);
    
    // If location or minRepos are provided, we need to verify them
    if (location || minRepos) {
      let query = `user:${username}`;
      
      if (location) {
        // For location, we'll search users with the same location and username
        query += ` location:${location}`;
      }
      
      // Search for users matching the criteria
      const searchResponse = await githubApi.get('/search/users', {
        params: {
          q: query,
          sort: 'repositories',
          order: 'desc',
          per_page: 1
        }
      });
      
      // If no users found with the location filter, throw an error
      if (searchResponse.data.total_count === 0) {
        throw new Error('No users found matching the specified criteria.');
      }
      
      // If minRepos is specified, check if the user meets the criteria
      if (minRepos && user.public_repos < minRepos) {
        throw new Error(`User has ${user.public_repos} public repositories, but minimum required is ${minRepos}.`);
      }
      
      // If we get here, the user meets all criteria
      return {
        ...user,
        meetsCriteria: true,
        searchCriteria: {
          location,
          minRepos
        }
      };
    }
    
    // If no additional filters, just return the user data
    return user;
    
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error('User not found');
    }
    if (error.response?.status === 403) {
      throw new Error('API rate limit exceeded. Please try again later.');
    }
    // Re-throw any custom errors we created
    if (error.message.includes('No users found') || error.message.includes('minimum required')) {
      throw error;
    }
    console.error('Advanced search error:', error);
    throw new Error('Failed to perform advanced search. Please try again.');
  }
};

/**
 * Search for GitHub users
 * @param {string} query - Search query string
 * @returns {Promise<Array>} Array of GitHub users
 * @deprecated Use fetchUserData or advancedSearch instead
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

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
        throw new Error("Looks like we can't find the user");
    }
    if (error.response?.status === 403) {
      throw new Error('API rate limit exceeded. Please try again later.');
    }
    throw new Error('Failed to fetch user data. Please try again.');
  }
};


// Rest of the file remains the same...

import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

/**
 * Fetches user data from GitHub API
 * @param {string} username - GitHub username to search for
 * @returns {Promise<Object>} User data object
 */
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error("Looks like we can't find the user");
    }
    throw new Error('Failed to fetch user data');
  }
};


// Rest of the file remains the same...

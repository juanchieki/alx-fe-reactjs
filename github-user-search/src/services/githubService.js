import axios from 'axios';

const BASE_URL = 'https://api.github.com';

/**
 * Fetches a GitHub user's data by username.
 * @param {string} username - GitHub username to fetch.
 * @returns {Promise<object>} - The user data from GitHub API.
 */
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch user');
  }
};

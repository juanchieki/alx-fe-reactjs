import axios from 'axios';

const BASE_URL = 'https://api.github.com';

/**
 * Fetches a GitHub user's data by username.
 * @param {string} username - GitHub username to fetch.
 * @returns {Promise<object>} - The user data from GitHub API.
 */
/** 
* Fetches GitHub user data based on username.
 * @param {string} username - GitHub username to search for.
 * @returns {Promise<object>} - The user data from GitHub API.
 */
const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch user');
  }
};

const fetchFullUserDetails = async (username) => {
  try {
    const res = await axios.get(`${BASE_URL}/users/${username}`);
    return res.data;
  } catch (err) {
    throw new Error('Failed to fetch full profile');
  }
};

export default {
  fetchUserData,
  fetchFullUserDetails,
};

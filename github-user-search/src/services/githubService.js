// services/githubService.js
import axios from "axios";

// Base URL for the GitHub Users API
const BASE_URL = "https://api.github.com/users/";

/**
 * Fetch GitHub user profile data
 * @param {string} username - The GitHub username to search
 * @returns {Promise<Object>} - The user's GitHub profile data
 */
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}${username}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error("GitHub user not found.");
    }
    throw new Error("Error fetching GitHub user data.");
  }
};

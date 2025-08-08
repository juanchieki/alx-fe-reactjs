import axios from 'axios';

const BASE_URL = 'https://api.github.com';

/** 
* Fetches GitHub user data based on username.
 * @param {string} username - GitHub username to search for.
 * @returns {Promise<object>} - The user data from GitHub API.
 */

const fetchUserData = async (username, location = '', minRepos = '', page = 1) => {
  try {
    let query = username ? `${username}` : '';
    if (location) query += `+location:${location}`;
        if (minRepos) query += `+repos:>=${minRepos}`;
        // You may want to complete the API call here, for example:
        const response = await axios.get(`${BASE_URL}/search/users?q=${query}&page=${page}`);
        return response.data;
      } catch (error) {
        throw error;
      }
    };

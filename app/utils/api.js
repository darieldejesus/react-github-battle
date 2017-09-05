/* Github API Keys */
const {GITHUB_API_CLIENT_ID, GITHUB_API_CLIENT_SECRET} = process.env;
const params = `?client_id=${GITHUB_API_CLIENT_ID}&client_secret=${GITHUB_API_CLIENT_SECRET}`;

/**
 * Sort an array of players. Order DESC.
 * First item in the array will be the winner.
 */
const sortPlayers = players => players.sort((a, b) => b.score - a.score);

/**
 * Fetches the user profile through github api.
 */
const getProfile = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}${params}`)
    .catch(handleError);;

  return response.json();
}

/**
 * Fetches the user's repositories through github api.
 */
const getRepositories = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}/repos${params}&per_page=100`)
    .catch(handleError);

  return response.json();
}

/**
 * Given an array of repositories,
 * reduces it and calculates how many stars are there.
 */
const getStarCount = (repositories) => (
  repositories.reduce(
    (count, { stargazers_count }) => count + stargazers_count,
    0
  )
)

/**
 * Given a count of followers and a list of repositories,
 * calculates the score.
 */
const calculateScore = ({ followers }, repositories) => (
  (followers * 3) + getStarCount(repositories)
)

/**
 * Handle error if fetch fails.
 */
const handleError = error => {
  console.warn(error);
  return null;
}

/**
 * Fetches user's profile and its repositories and 
 * returns it merged into an object.
 */
const getUserData = async (player) => {
  const [ profile, repositories ] = await Promise.all([
    getProfile(player),
    getRepositories(player)
  ]);

  return {
    profile,
    score: calculateScore(profile, repositories)
  };
}

/**
 * Give an array of two players,
 * fetch their data and compare the result.
 */
export const battlePlayers = async (players) => {
  const results = await Promise.all(players.map(getUserData))
    .catch(handleError);

  return results === null
    ? results
    : sortPlayers(results);
}

/**
 * Fetches the most popular repositories
 * by language or in general if language is not provided.
 */
export const fetchPopularRepositories = async (lang) => {
  const encodedURI = window.encodeURI(`https://api.github.com/search/repositories`
    + `?q=stars:>1+language:${lang}&sort=stars&order=desc&type=Repositories`);

  const response = await fetch(encodedURI)
    .catch(handleError);

  const repositories = await response.json();

  return repositories.items;
}

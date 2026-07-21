const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const request = async (endpoint, params = {}) => {
  const url = new URL(`${BASE_URL}${endpoint}`);
  url.searchParams.set("api_key", API_KEY);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`TMDB request failed: ${response.status}`);
  }
  return response.json();
};

export const fetchTrendingMovies = () => request("/trending/movie/day");

export const searchMovies = (query) => request("/search/movie", { query });

export const fetchMovieDetails = (movieId) => request(`/movie/${movieId}`);

export const fetchMovieCast = (movieId) =>
  request(`/movie/${movieId}/credits`);

export const fetchMovieReviews = (movieId) =>
  request(`/movie/${movieId}/reviews`);

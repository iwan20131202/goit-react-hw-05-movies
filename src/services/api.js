import axios from "axios";

const API_KEY = "0b880bae4f8b04204b15359ae4ce093d";
const BASE_URL = "https://api.themoviedb.org/3";

const api = axios.create({
  baseURL: BASE_URL,
});

export async function getTrendingMovies() {
  const { data } = await api.get("/trending/movie/day", {
    params: {
      api_key: API_KEY,
    },
  });

  return data.results;
}

export async function searchMovies(query) {
  const { data } = await api.get("/search/movie", {
    params: {
      api_key: API_KEY,
      query,
    },
  });

  return data.results;
}

export async function getMovieDetails(id) {
  const { data } = await api.get(`/movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });

  return data;
}

export async function getMovieCast(id) {
  const { data } = await api.get(`/movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });

  return data.cast;
}

export async function getMovieReviews(id) {
  const { data } = await api.get(`/movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });

  return data.results;
}

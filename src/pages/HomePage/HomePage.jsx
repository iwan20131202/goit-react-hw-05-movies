import { useEffect, useState } from "react";

import { getTrendingMovies } from "../../services/api.js";

import MovieList from "../../components/MovieList/MovieList.jsx";

import { Title } from "./HomePage.styled.js";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      <MovieList movies={movies} />
    </>
  );
}

export default Home;

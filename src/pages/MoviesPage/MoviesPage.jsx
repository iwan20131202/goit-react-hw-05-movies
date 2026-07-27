import { useState } from "react";

import { searchMovies } from "../../services/api.js";

import MovieList from "../../components/MovieList/MovieList.jsx";

import { Form, Input, Button } from "./MoviesPage.styled.js";

export default function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    try {
      const data = await searchMovies(query);
      setMovies(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <Button type="submit">Search</Button>
      </Form>

      <MovieList movies={movies} />
    </>
  );
}

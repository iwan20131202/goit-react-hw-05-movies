import { Link } from "react-router-dom";

import { List, Item } from "./MovieList.styled.js";

export default function MovieList({ movies }) {
  return (
    <List>
      {movies.map((movie) => (
        <Item key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </Item>
      ))}
    </List>
  );
}

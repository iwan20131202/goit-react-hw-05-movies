import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { searchMovies } from "../../services/tmdb-api";
import css from "./Movies.module.css";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!query) {
      setMovies([]);
      return;
    }
    searchMovies(query).then((data) => setMovies(data.results));
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.query.value.trim();
    if (!value) return;
    setSearchParams({ query: value });
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="query"
          defaultValue={query}
          placeholder="Пошук фільму..."
        />
        <button className={css.button} type="submit">
          Знайти
        </button>
      </form>

      <ul className={css.list}>
        {movies.map(({ id, title, poster_path }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} className={css.card}>
              {poster_path && (
                <img
                  className={css.poster}
                  src={`https://image.tmdb.org/t/p/w342${poster_path}`}
                  alt={title}
                />
              )}
              <p className={css.cardTitle}>{title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;

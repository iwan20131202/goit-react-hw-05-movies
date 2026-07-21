import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchTrendingMovies } from "../../services/tmdb-api";
import css from "./Home.module.css";

const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then((data) => setTrending(data.results));
  }, []);

  return (
    <div>
      <h1 className={css.title}>Популярні сьогодні</h1>
      <ul className={css.list}>
        {trending.map(({ id, title, poster_path }) => (
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

export default Home;

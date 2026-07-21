import { useEffect, useState } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { fetchMovieDetails } from "../../services/tmdb-api";
import css from "./MovieDetails.module.css";

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  const backLinkHref = location.state?.from ?? "/";

  return (
    <div>
      <Link className={css.backLink} to={backLinkHref}>
        ← Назад
      </Link>

      <div className={css.card}>
        {movie?.poster_path && (
          <img
            className={css.poster}
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt={movie.title}
          />
        )}
        <div>
          <h1 className={css.title}>{movie ? movie.title : `Фільм #${movieId}`}</h1>
          {movie?.overview && <p className={css.overview}>{movie.overview}</p>}
        </div>
      </div>

      <div className={css.additionalInfo}>
        <p className={css.additionalTitle}>Додаткова інформація</p>
        <ul className={css.additionalList}>
          <li>
            <Link className={css.additionalLink} to="cast">
              Актори
            </Link>
          </li>
          <li>
            <Link className={css.additionalLink} to="reviews">
              Огляди
            </Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </div>
  );
};

export default MovieDetails;

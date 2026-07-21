import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/tmdb-api";

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId).then((data) => setCast(data.cast));
  }, [movieId]);

  if (cast.length === 0) return <p>Інформація про акторський склад відсутня.</p>;

  return (
    <ul>
      {cast.map(({ id, name, character }) => (
        <li key={id}>
          {name} — {character}
        </li>
      ))}
    </ul>
  );
};

export default Cast;

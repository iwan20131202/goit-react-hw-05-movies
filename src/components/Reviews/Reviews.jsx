import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/tmdb-api";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then((data) => setReviews(data.results));
  }, [movieId]);

  if (reviews.length === 0) return <p>Огляди відсутні.</p>;

  return (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <p>
            <b>{author}</b>
          </p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;

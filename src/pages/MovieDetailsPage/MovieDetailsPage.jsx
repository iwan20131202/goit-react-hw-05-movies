import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";

import { getMovieDetails } from "../../services/api.js";

import { BsArrowLeft } from "react-icons/bs";

import {
  BackLink,
  Wrapper,
  Poster,
  Info,
  Title,
  Subtitle,
  Additional,
  StyledLink,
} from "./MovieDetailsPage.styled.js";

export default function MovieDetailsPage() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovie();
  }, [movieId]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <BackLink to="/">
        <BsArrowLeft /> Go back
      </BackLink>

      <Wrapper>
        <Poster
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
        />

        <Info>
          <Title>{movie.title}</Title>

          <p>
            <strong>User Score:</strong> {Math.round(movie.vote_average * 10)}%
          </p>

          <Subtitle>Overview</Subtitle>
          <p>{movie.overview}</p>

          <Subtitle>Genres</Subtitle>
          <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
        </Info>
      </Wrapper>

      <Additional>
        <h3>Additional information</h3>

        <ul>
          <li>
            <StyledLink to="cast">Cast</StyledLink>
          </li>

          <li>
            <StyledLink to="reviews">Reviews</StyledLink>
          </li>
        </ul>
      </Additional>

      <Outlet />
    </>
  );
}

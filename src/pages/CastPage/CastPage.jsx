import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getMovieCast } from "../../services/api.js";

import noPhoto from "../../images/plug.jpg";

import { List, Item, Image, Name, Character } from "./CastPage.styled.js";

export default function CastPage() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchCast() {
      try {
        const data = await getMovieCast(movieId);
        setCast(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCast();
  }, [movieId]);

  if (cast.length === 0) {
    return <p>We don't have any cast information</p>;
  }

  return (
    <List>
      {cast.map((actor) => (
        <Item key={actor.id}>
          <Image
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                : noPhoto
            }
            alt={actor.name}
          />

          <Name>{actor.name}</Name>
          <Character>Character: {actor.character}</Character>
        </Item>
      ))}
    </List>
  );
}

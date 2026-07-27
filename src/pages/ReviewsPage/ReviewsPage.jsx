import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getMovieReviews } from "../../services/api.js";

import { List, Item, Author, Text } from "./ReviewsPage.styled.js";

export default function ReviewsPage() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const data = await getMovieReviews(movieId);
        setReviews(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchReviews();
  }, [movieId]);

  if (reviews.length === 0) {
    return <p>We don't have any reviews for this movie</p>;
  }

  return (
    <List>
      {reviews.map((review) => (
        <Item key={review.id}>
          <Author>Author: {review.author}</Author>
          <Text>{review.content}</Text>
        </Item>
      ))}
    </List>
  );
}

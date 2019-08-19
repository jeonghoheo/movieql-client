import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { MOVIE_DETAILS } from "./queries";

const Detail = props => {
  const {
    match: {
      params: { movieId }
    }
  } = props;

  const { loading, error, data } = useQuery(MOVIE_DETAILS, {
    variables: { movieId: parseInt(movieId) }
  });
  if (loading) return "loading";
  if (error) return "error";
  return (
    <>
      {data.movie.title}
      {data.movie.medium_cover_image}
      {data.movie.rating}
      {data.movie.description_intro}
    </>
  );
};

export default Detail;

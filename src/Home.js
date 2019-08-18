import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { HOME_PAGE } from "./queries";

const Home = () => {
  const { loading, error, data } = useQuery(HOME_PAGE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: </p>;
  return data.movies.map(movie => (
    <h2 key={movie.id}>
      {movie.title} / {movie.rating}
    </h2>
  ));
};

export default Home;

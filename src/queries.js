import { gql } from "apollo-boost";

export const HOME_PAGE = gql`
  {
    movies(limit: 50, rating: 7.5) {
      id
      title
      genres
      rating
      medium_cover_image
    }
  }
`;

export const MOVIE_DETAILS = gql`
  query getMovieDetails($movieId: Int!) {
    movie(id: $movieId) {
      id
      title
      rating
      description_intro
      language
      genres
      medium_cover_image
    }
    suggestions(id: $movieId) {
      id
      medium_cover_image
      title
      rating
    }
  }
`;

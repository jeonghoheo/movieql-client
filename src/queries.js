import { gql } from "apollo-boost";

export const HOME_PAGE = gql`
  {
    movies(limit: 50, rating: 7.5) {
      id
      title
      genres
      rating
    }
  }
`;

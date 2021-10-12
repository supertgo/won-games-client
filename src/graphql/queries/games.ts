import { gql } from '@apollo/client';

export const QUERY_GAMES = gql`
  query QueryGames($limit: Int!) {
    games(limit: $limit) {
      name
      slug
      price
      developers {
        name
      }
      cover {
        url
      }
    }
  }
`;

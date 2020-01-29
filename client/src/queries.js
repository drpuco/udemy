import { gql } from "apollo-boost";

/* Post Querys */

export const GET_POSTS = gql`
  query {
    getPosts {
      _id
      title
      imageUrl
    }
  }
`;

/* User Queries */

/* Post Mutations */

/* User Mutations */

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client/core";

// get all posts
export const ALL_POSTS = gql`
  query AllPosts {
    posts {
      edges {
        node {
          title
          uri
          excerpt
          content
          slug
        }
      }
    }
  }
`;

// get all posts with for slugs
export const ALL_POSTS_SLUGS = gql`
  query PostSlugs {
    posts {
      nodes {
        slug
      }
    }
  }
`;

export const POST_BY_SLUG = gql`
  query PostBySlug($id: ID = "", $idType: PostIdType = SLUG) {
    post(id: $id, idType: $idType) {
      content
      date
      slug
      title
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`;

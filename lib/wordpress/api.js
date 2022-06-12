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

export const TEST_QUERY_1 = gql`
  query testQuery1 {
    posts {
      pageInfo {
        endCursor
        hasNextPage
      }
      nodes {
        comments(first: 10) {
          edges {
            node {
              id
            }
          }
        }
        date
        status
        title
        uri
        excerpt
        content
        slug
      }
    }
  }
`

export const PRODUCT_QUERY = gql`
  query productQuery {
    products(first: 10) {
      nodes {
        id
        description
        averageRating
        date
        dateOnSaleFrom
        dateOnSaleTo
        image {
          sourceUrl
          date
        }
        name
        slug
        type
        status
        ... on SimpleProduct {
          id
          name
          price(format: FORMATTED)
          salePrice
          onSale
        }
      }
    }
  }
`
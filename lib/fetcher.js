import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client/core";

const WP_API = process.env.WP_URL;

export const fetcher = async (query, { variables } = {}) => {
  const client = new ApolloClient({
    uri: WP_API,
    cache: new InMemoryCache(),
  });

  const response = await client.query({
    query: query,
    variables: variables,
  });

  return response;
};

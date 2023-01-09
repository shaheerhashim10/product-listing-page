import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3000/api/graphql",
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

export default client;
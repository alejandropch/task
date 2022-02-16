import { ApolloClient, InMemoryCache } from "@apollo/client"
export const client = new ApolloClient({
  uri: "https://task-alejandro.herokuapp.com/graphql",
  cache: new InMemoryCache(),
})

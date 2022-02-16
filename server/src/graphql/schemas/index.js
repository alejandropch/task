const { gql } = require("apollo-server-express")
const typeDefs = gql`
  type User {
    first_name: String
    last_name: String
    email: String
    note: String
  }

  type Mutation {
    addUser(
      first_name: String!
      last_name: String!
      email: String!
      note: String!
    ): User

    deleteUser(id: ID!): User!
  }

  type Query {
    users: [User]!
  }
`
module.exports = typeDefs

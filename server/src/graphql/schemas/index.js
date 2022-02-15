const { gql } = require("apollo-server-express")
const typeDefs = gql`
  type User {
    first_name: String
    last_name: String
    email: String
    note: String
  }

  type Query {
    users: [User]!
  }
`
module.exports = typeDefs

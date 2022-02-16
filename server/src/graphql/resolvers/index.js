const { UserInputError } = require("apollo-server-express")
const { ApolloError } = require("apollo-server-errors")

const User = require("../../models/User.model")
const resolvers = {
  Query: {
    users: async () => {
      const users = await User.find({})
      return users
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const newUser = await User.create(args).catch((error) => {
        if (error.code == 11000) {
          throw new ApolloError("Email already exists")
        }
      })
      return newUser
    },
  },
}
module.exports = resolvers

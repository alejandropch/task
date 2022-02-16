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
    deleteUser: async (parent, { id }) => {
      const isDeleted = await User.findByIdAndDelete(id).catch((error) => {
        throw new UserInputError(error.messaje, { invalidArgs: id })
      })
      if (!isDeleted) {
        throw new ApolloError("User with the id provided does not exist")
      }
      return isDeleted
    },
  },
}
module.exports = resolvers

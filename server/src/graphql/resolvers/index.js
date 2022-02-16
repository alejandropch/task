const { UserInputError } = require("apollo-server-express")
const { ApolloError } = require("apollo-server-errors")

const resolvers = {
  Query: {
    users: async () => {
      const users = await User.find({})
      return users
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const newUser = await User.create(args)
      return newUser
    },
  },
}
module.exports = resolvers

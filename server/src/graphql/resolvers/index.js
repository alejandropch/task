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
      const newUser = await User.create(args)
      return newUser
    },
  },
}
module.exports = resolvers

const user = [
  {
    first_name: "aaa",
    last_name: "aaa",
    email: "aaa",
    note: "aaa",
  },
  {
    first_name: "bbb",
    last_name: "bbb",
    email: "bbb",
    note: "bbb",
  },
  {
    first_name: "ccc",
    last_name: "ccc",
    email: "ccc",
    note: "ccc",
  },
]
const resolvers = {
  Query: {
    users: (parent, args, context) => {
      return user
    },
  },
}
module.exports = resolvers

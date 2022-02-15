const express = require("express")
const { ApolloServer, gql } = require("apollo-server-express")
const resolvers = require("./resolvers")
const typeDefs = require("./schemas")

const app = express()
const PORT = process.env.PORT || 3000

app.get("/", (req, res) => res.send("hello!"))

async function start() {
  try {
    const server = new ApolloServer({ typeDefs, resolvers })
    await server.start()
    server.applyMiddleware({ app })
    app.listen(PORT, () => console.log("listening on port", PORT))
  } catch (e) {
    console.log(e)
  }
}
start()

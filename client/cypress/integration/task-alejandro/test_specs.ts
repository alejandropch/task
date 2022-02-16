import { aliasQuery, aliasMutation } from "../../utils/index"
import { gql } from "@apollo/client"
import { client } from "../../../src/graphql/client.graphql"
import { createYield } from "typescript"
describe("Task Alejandro", () => {
  it("it this works?", () => {
    cy.visit("/")
  })
  it("Can i fetch some data?", () => {
    cy.request({
      method: "POST",
      url: "https://task-alejandro.herokuapp.com/graphql",
      body: {
        operationName: "users",
        query: `
          query users {
            users {
              _id,
              email
            }
          }
        `,
      },
    })
      .its("body.data.users")
      .should("have.length.gte", 0)
  })

  it("Creating an user", () => {
    const random = Cypress._.random(1e5)

    const first_name = `test name ${random}`
    const last_name = `last${random}`
    const email = `testemail${random}@mail.com`
    const note = `note ${random}`

    cy.log(`Adding item user`)
      .then(() => {
        const query = gql`
          mutation (
            $first_name: String!
            $last_name: String!
            $email: String!
            $note: String!
          ) {
            addUser(
              first_name: $first_name
              last_name: $last_name
              email: $email
              note: $note
            ) {
              _id
            }
          }
        `
        return client.query({
          query,
          variables: {
            first_name,
            last_name,
            email,
            note,
          },
          fetchPolicy: "no-cache",
        })
      })

      .its("data.addUser", { timeout: 0 })
      .should("have.property", "_id")
  })

  it("Deleting the user created", () => {
    cy.request({
      method: "POST",
      url: "https://task-alejandro.herokuapp.com/graphql",
      body: {
        operationName: "users",
        query: `
              query users {
                users {
                  _id,
                  email
                }
              }
            `,
      },
    }).then((res) => {
      const allUsers = res.body.data.users
      const { _id: userID } = allUsers.pop()

      cy.log("Deleting", userID)
        .then(() => {
          const query = gql`
            mutation ($id: ID!) {
              deleteUser(id: $id) {
                _id
              }
            }
          `
          return client.query({
            query,
            variables: {
              id: userID,
            },
            fetchPolicy: "no-cache",
          })
        })

        .its("data.deleteUser", { timeout: 0 })
        .should("have.property", "_id")
    })
  })
})

// Queries
//     aliasQuery(req, "users")

//     // Mutations
//     aliasMutation(req, "addUser")
//     aliasMutation(req, "deleteUser")
//   }

// })
//     cy.createUser({
//       first_name: "Jane",
//       last_name: "Lane",
//       email: "jalelane@gmail.com",
//       note: "testing",
//     })
//   })
// })

import { useMutation, gql } from "@apollo/client"
const DELETE_USER_MUTATION = gql`
  mutation ($id: ID!) {
    deleteUser(id: $id) {
      email
    }
  }
`

const ADD_USER_MUTATION = gql`
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
      first_name
    }
  }
`
export const useDeleteMutation = (setMessage: Function) => {
  const [deleteUser] = useMutation(DELETE_USER_MUTATION, {
    onError: (error) => setMessage(error),
  })
  return deleteUser
}
export const useAddMutation = (setMessage: Function) => {
  const [addUser] = useMutation(ADD_USER_MUTATION, {
    onError: (error) => {
      const { message } = error
      if (message.startsWith("user validation failed")) {
        const firstError = message.split(":")[2]
        return setMessage(firstError)
      }
      return setMessage(message)
    },
  })
  return addUser
}

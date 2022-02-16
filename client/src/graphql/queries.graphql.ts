import { useQuery, gql } from "@apollo/client"
const USERS_QUERY = gql`
  query {
    users {
      _id
      first_name
      last_name
      email
      note
    }
  }
`
export const useUserQuery = () => {
  const { loading, error, data, refetch } = useQuery(USERS_QUERY)

  return { loading, error, data, refetch }
}

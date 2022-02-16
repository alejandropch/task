import React, { useEffect, useState } from "react"
import Form from "./Form"
import Users from "./Users"
import Spin from "../components/Spin"
import { useUserQuery } from "../graphql/queries.graphql"

export default function MainPage() {
  const [users, setUsers] = useState([])
  const { loading, error, data, refetch } = useUserQuery()

  useEffect(() => {
    if (!loading) {
      const userData = data.users
      setUsers(userData)
    }
  }, [loading, data])

  if (error) {
    return <h2>Something terrible happen!</h2>
  }
  return (
    <div className="container-md">
      <h2 className="text-center">Add Users</h2>
      <div className="container-md">
        <Form refetch={refetch} />
        {loading ? <Spin /> : <Users users={users} refetch={refetch} />}
      </div>
    </div>
  )
}

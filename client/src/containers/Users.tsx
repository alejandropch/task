import React, { useEffect, useState } from "react"

import { useDeleteMutation } from "../graphql/mutations.graphql"
import UserList from "../components/UserList"
export default function Users({ users, refetch }: any) {
  const [message, setMessage] = useState("")
  const deleteUser = useDeleteMutation(setMessage)

  const handleClick = async (id: string) => {
    const userDeleted = await deleteUser({ variables: { id } })
    const {
      data: {
        deleteUser: { email },
      },
    } = userDeleted
    setMessage(`user with the email: ${email} was removed`)
    refetch()
  }
  return (
    <div className="container-md">
      <UserList handleClick={handleClick} users={users} />
      <p className="fw-bolder my-3">{message}</p>
    </div>
  )
}

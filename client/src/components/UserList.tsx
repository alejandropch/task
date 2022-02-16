import React from "react"

interface User {
  first_name: String
  last_name: String
  note: String
  email: String
  _id: String
}

export default function UserList({ handleClick, users }: any) {
  const isEmpty = users.length === 0

  if (isEmpty) {
    return <p>There is no users...</p>
  }

  return (
    <div>
      {users.map((user: User, key: number) => {
        const { first_name, last_name, note, email, _id: id } = user

        return (
          <div
            className="d-flex flex-row my-4 justify-content-center "
            key={key}
          >
            <p className="fw-bolder mx-3">
              {first_name} {last_name} | {note} | {email}
            </p>
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => handleClick(id)}
            >
              Remove
            </button>
          </div>
        )
      })}
    </div>
  )
}

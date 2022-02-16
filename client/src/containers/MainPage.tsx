import React from "react"
import UserForm from "../components/UserForm"
import UserList from "../components/UserList"
export default function MainPage() {
  return (
    <div className="container-md">
      <h2 className="text-center">Add Users</h2>
      <div className="container-md">
        <UserForm />
        <UserList />
      </div>
      {/* <p className="form-text">{message}</p>
      <p className="form-text fs-6 text-center">
        Don't you have an account yet? <Link to="/register">Sign up</Link>
      </p> */}
    </div>
  )
}

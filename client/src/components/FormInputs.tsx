import React, { useState } from "react"

export default function FormInputs() {
  const [message, setMessage] = useState(["", ""])

  function validateInput(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    const inputName = e.target.name

    switch (inputName) {
      case "first_name":
        const nameSize: number = value.length
        nameSize > 2 && nameSize < 40
          ? setMessage(["", ""])
          : setMessage([
              "firstName",
              "First name must be between 2 and 40 characters",
            ])
        break
      case "last_name":
        const lastNameSize = value.length
        lastNameSize > 2 && lastNameSize < 40
          ? setMessage(["", ""])
          : setMessage([
              "lastName",
              "Last name must be between 2 and 40 characters",
            ])
        break
      case "email":
        const isValid = value.match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
        isValid
          ? setMessage(["", ""])
          : setMessage(["email", "Provide a valid email"])
        break
      case "note":
        const noteSize: number = value.length

        noteSize > 2 && noteSize < 200
          ? setMessage(["", ""])
          : setMessage([
              "note",
              "Your note must be between 2 and 200 characters",
            ])
        break
      default:
        break
    }
  }
  const [input, errorMessage] = message

  return (
    <div>
      <div className="mb-3">
        <label className="form-label">First Name</label>

        <input
          type="text"
          className="form-control form-control-md"
          name="first_name"
          placeholder="First Name"
          aria-describedby="first_name"
          onBlur={validateInput}
        />
        <i>{input == "firstName" ? errorMessage : ""}</i>
      </div>
      <div className="mb-3">
        <label className="form-label">Last Name</label>

        <input
          type="text"
          className="form-control form-control-md"
          name="last_name"
          placeholder="Last Name"
          aria-describedby="last_name"
          onBlur={validateInput}
        />
        <i>{input == "lastName" ? errorMessage : ""}</i>
      </div>

      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          type="email"
          className="form-control form-control-md"
          name="email"
          placeholder="Email"
          aria-describedby="email"
          onBlur={validateInput}
        />
        <i>{input == "email" ? errorMessage : ""}</i>
      </div>
      <div className="mb-3">
        <label className="form-label">Note</label>

        <input
          type="text"
          className="form-control form-control-md"
          name="note"
          placeholder="Note"
          aria-describedby="note"
          onBlur={validateInput}
        />
        <i>{input == "note" ? errorMessage : ""}</i>
      </div>
    </div>
  )
}

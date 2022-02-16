import React, { useRef, useState } from "react"
import { useAddMutation } from "../graphql/mutations.graphql"
import FormInputs from "../components/FormInputs"
export default function Form({ refetch }: any) {
  const form = useRef<HTMLFormElement>(null)
  const [message, setMessage] = useState("")
  const addUser = useAddMutation(setMessage)

  const handleClick = async () => {
    const formData = new FormData(form.current!)
    const User = Object.fromEntries(formData)

    const { first_name, last_name, email, note } = User

    const newUser = await addUser({
      variables: { first_name, last_name, email, note },
    })

    if (!newUser.errors) {
      setMessage("User created!")
      refetch()
    }
  }

  return (
    <>
      <form className="form-group" ref={form}>
        <FormInputs />
        <button type="button" className="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
      </form>
      <p className="justify-content-center ">{message}</p>
    </>
  )
}

const { Schema, model } = require("mongoose")

const UserSchema = new Schema({
  first_name: {
    type: String,
    required: [true, "First name must be provided"],
    minlength: [2, "Your first name must be longer than 2 characters"],
    maxlength: [40, "Your first name have more than 40 characters"],
  },

  last_name: {
    type: String,
    required: [true, "Last name must be provided"],
    minlength: [2, "Your last name must be longer than 2 characters"],
    maxlength: [40, "Your last name have more than 40 characters"],
  },
  email: {
    type: String,
    required: [true, "Email must be provided"],
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Provide a valid email",
    ],
  },

  note: {
    type: String,
    required: [true, "Note must be provided"],
    minlength: [2, "Provide a longer note"],
    maxlength: [200, "Your note have more than 200 characters"],
  },
})
module.exports = model("user", UserSchema)

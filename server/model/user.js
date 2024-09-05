const mongoose = require("mongoose");
const UserSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      default: "",
    },
    phoneNumber: {
      type: Number,
      default: null,
    },
    email: {
      type: String,
      default: "",
    },
    tokens: {
      type: String,
      default: null,
    },
    password: {
      type: String,
      default: "",
    },
  },
  { collection: "users", timestamps: true }
);

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;

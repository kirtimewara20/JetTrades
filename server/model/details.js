const mongoose = require("mongoose");
const DetailsSchema = mongoose.Schema(
  {
    name: {
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
    message: {
      type: String,
      default: null,
    },
    city : {
      type : String,
      default : ""
    },
    company : {
      type : String,
      default : ""
    }
  },
  { collection: "details", timestamps: true }
);

const DetailsModel = mongoose.model("details", DetailsSchema);
module.exports = DetailsModel;

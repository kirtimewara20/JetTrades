const mongoose = require("mongoose");
const InquirySchema = mongoose.Schema(
  {
    name: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      default: "",
    },
    phonenumber: {
      type: Number,
      default: null,
    },
  },
  { collection: "inquiry", timestamps: true }
);

const InquiryModel = mongoose.model("inquiry", InquirySchema);
module.exports = InquiryModel;

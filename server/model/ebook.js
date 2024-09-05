const mongoose = require("mongoose");
const EbookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    pdf: {
      type: String,
      default: "",
      require: true,
    },
  },
  { collection: "ebook", timestamps: true }
);

const EbookModel = mongoose.model("ebook", EbookSchema);
module.exports = EbookModel;

const mongoose = require("mongoose");
const BlogSchema = mongoose.Schema(
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
  },
  { collection: "blog", timestamps: true }
);

const BlogModel = mongoose.model("blogs", BlogSchema);
module.exports = BlogModel;

const mongoose = require("mongoose");
const CaseStudySchema = mongoose.Schema(
  {
    title: {
      type: String,
      default: "",
      require: true,
    },
    content: {
      type: String,
      default: "",
      require: true,
    },
    image: {
      type: String,
      default: "",
      require: true,
    },
  },
  { collection: "caseStudy", timestamps: true }
);

const CaseStudyModel = mongoose.model("caseStudy", CaseStudySchema);
module.exports = CaseStudyModel;

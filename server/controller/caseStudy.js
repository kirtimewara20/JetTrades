const CaseStudyModel = require("../model/caseStudy");
require("dotenv").config("../.env");

const addCaseStudy = async (req, res, next) => {
  try {
    const { title, content, image } = req.body;
    if (!title || !content || !image) {
      throw new Error("500::404::Need to Feel All Feild");
    }
    const newCaseStudy = new CaseStudyModel({ title, content, image });

    await newCaseStudy.save();

    res.status(200).json({
      status: true,
      response_code: 200,
      message: "Case Study added in successfully.",
    });
  } catch (error) {
    res.status(400).json({
      status: true,
      response_code: 400,
      message: error.message,
    });
  }
};

const getAllCaseStudy = async (req, res, next) => {
  try {
    const CaseStudy = await CaseStudyModel.find().sort({ updatedAt: -1 });
    if (!CaseStudy) {
      throw new Error("500::404::INTERNAL ERROR");
    }
    res.status(200).json({
      status: true,
      response_code: 200,
      data: CaseStudy,
      message: "CaseStudy Get successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      response_code: 400,
      message: error.message,
    });
  }
};

const getCaseStudyById = async (req, res, next) => {
  try {
    const CaseStudyId = req.params.id;
    const CaseStudy = await CaseStudyModel.findById(CaseStudyId);
    if (!CaseStudy) {
      throw new Error("500::500::Internal Server Error");
    }
    res.status(200).json({
      status: true,
      response_code: 200,
      data: CaseStudy,
      message: "CaseStudy get successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      response_code: 400,
      message: error.message,
    });
  }
};

const deleteCaseStudy = async (req, res, next) => {
  try {
    const CaseStudyId = req.params.id;
    await CaseStudyModel.findByIdAndDelete(CaseStudyId);
    res.status(200).json({
      status: true,
      response_code: 200,
      message: "CaseStudy deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: true,
      response_code: 400,
      message: error.message,
    });
  }
};

module.exports = {
  addCaseStudy,
  getAllCaseStudy,
  getCaseStudyById,
  deleteCaseStudy,
};

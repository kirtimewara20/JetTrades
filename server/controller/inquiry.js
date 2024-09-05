const InquiryModel = require("../model/inquiry");

const addinquiry = async (req, res, next) => {
  try {
    const { name, email, phonenumber } = req.body;

    console.log({ name, email, phonenumber });
    if (!name || !email || !phonenumber) {
      throw new Error("400::404::Fill Form");
    }
    const newCaseStudy = new InquiryModel({ name, email, phonenumber });

    await newCaseStudy.save();

    res.status(200).json({
      status: true,
      response_code: 200,
      message: "Inquiry added in successfully.",
    });
  } catch (error) {
    res.status(400).json({
      status: true,
      response_code: 400,
      message: error.message,
    });
  }
};

const getAllInquiry = async (req, res, next) => {
  try {
    const allMessages = await InquiryModel.find({}).sort({ updatedAt: -1 });

    res.status(200).json({
      status: true,
      data: allMessages,
      response_code: 200,
      message: "Inquiry retrieved successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      response_code: 400,
      message: error.message,
    });
  }
};

module.exports = {
  addinquiry,
  getAllInquiry,
};

const EbookModel = require("../model/ebook");
require("dotenv").config("../.env");

const addEbook = async (req, res, next) => {
  try {
    const { title, content, image, pdf } = req.body;
    if (!title || !content || !image || !pdf) {
      throw new Error("500::404::Need to Feel All Feild");
    }
    const newEbook = new EbookModel({ title, content, image, pdf });

    await newEbook.save();

    res.status(200).json({
      status: true,
      response_code: 200,
      message: "Ebook added in successfully.",
    });
  } catch (error) {
    res.status(400).json({
      status: true,
      response_code: 400,
      message: error.message,
    });
  }
};

const getAllEbook = async (req, res, next) => {
  try {
    const Ebook = await EbookModel.find().sort({ updatedAt: -1 });

    console.log(Ebook);
    if (!Ebook) {
      throw new Error("500::404::INTERNAL ERROR");
    }
    res.status(200).json({
      status: true,
      response_code: 200,
      data: Ebook,
      message: "Ebook Get successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      response_code: 400,
      message: error.message,
    });
  }
};

const getEbookById = async (req, res, next) => {
  try {
    const EbookId = req.params.id;
    const Ebook = await EbookModel.findById(EbookId);
    if (!Ebook) {
      throw new Error("500::500::Internal Server Error");
    }
    res.status(200).json({
      status: true,
      response_code: 200,
      data: Ebook,
      message: "Ebook get successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      response_code: 400,
      message: error.message,
    });
  }
};

const deleteEbook = async (req, res, next) => {
  try {
    const EbookId = req.params.id;

    console.log("->>>.", EbookId);
    await EbookModel.findByIdAndDelete(EbookId);
    res.status(200).json({
      status: true,
      response_code: 200,
      message: "Ebook deleted successfully",
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
  addEbook,
  getAllEbook,
  getEbookById,
  deleteEbook,
};

const BlogModel = require("../model/blog");
require("dotenv").config("../.env");

const addBlog = async (req, res, next) => {
  try {
    const { title, content, image } = req.body;
    if (!title || !content || !image) {
      throw new Error("500::404::Need to Feel All Feild");
    }
    const newBlog = new BlogModel({ title, content, image });

    await newBlog.save();

    res.status(200).json({
      status: true,
      response_code: 200,
      message: "Blog added in successfully.",
    });
  } catch (error) {
    res.status(400).json({
      status: true,
      response_code: 400,
      message: error.message,
    });
  }
};

const getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await BlogModel.find().sort({ updatedAt: -1 });
    console.log("->>>>>", blogs);
    if (!blogs) {
      throw new Error("500::404::INTERNAL ERROR");
    }
    res.status(200).json({
      status: true,
      response_code: 200,
      data: blogs,
      message: "Blog Get successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      response_code: 400,
      message: error.message,
    });
  }
};

const getBlogById = async (req, res, next) => {
  try {
    const blogId = req.params.id;
    const blog = await BlogModel.findById(blogId);
    if (!blog) {
      throw new Error("500::500::Internal Server Error");
    }
    res.status(200).json({
      status: true,
      response_code: 200,
      data: blog,
      message: "Blog get successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      response_code: 400,
      message: error.message,
    });
  }
};

const deleteBlog = async (req, res, next) => {
  try {
    const blogId = req.params.id;
    console.log(blogId);
    await BlogModel.findByIdAndDelete(blogId);
    res.status(200).json({
      status: true,
      response_code: 200,
      message: "Blog deleted successfully",
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
  addBlog,
  getAllBlogs,
  getBlogById,
  deleteBlog,
};

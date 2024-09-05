require("dotenv").config("../.env");
var express = require("express");
const router = express.Router();
const multer = require("multer");
const AWS = require("aws-sdk");

const { SignIn, logOut } = require("../controller/user");
const {
  MessageDetaisAdd,
  getMessage,
  deleteMessage,
} = require("../controller/message");
const {
  addBlog,
  getAllBlogs,
  getBlogById,
  deleteBlog,
} = require("../controller/blog");
const {
  addEbook,
  getAllEbook,
  getEbookById,
  deleteEbook,
} = require("../controller/ebook");
const {
  addCaseStudy,
  getAllCaseStudy,
  getCaseStudyById,
  deleteCaseStudy,
} = require("../controller/caseStudy");
const { addinquiry, getAllInquiry } = require("../controller/inquiry");

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const S3_BUCKET_NAME = "jet-logistics";
const storage = multer.memoryStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post("/blogImage", upload.single("image"), async (req, res, next) => {
  const params = {
    Bucket: S3_BUCKET_NAME,
    Key: `blogs/${req.file.originalname}`,
    Body: req.file.buffer,
    ContentType: "image/jpeg",
  };

  s3.upload(params, (error, data) => {
    if (error) {
    } else {
      res.json({
        success: true,
        message: "Image Uploaded Successfully",
        url: data.Location,
      });
    }
  });
});

router.post("/pdfFile", upload.single("pdf"), async (req, res, next) => {
  const params = {
    Bucket: S3_BUCKET_NAME,
    Key: `pdfs/${req.file.originalname}`,
    Body: req.file.buffer,
    ContentType: "application/pdf", // Set the content type to 'application/pdf' for PDF files
  };

  s3.upload(params, (error, data) => {
    if (error) {
      console.error("Error uploading PDF:", error);
      res.status(500).json({ success: false, message: "Failed to upload PDF" });
    } else {
      res.json({
        success: true,
        message: "PDF Uploaded Successfully",
        url: data.Location,
      });
    }
  });
});

router.post("/SignIn", SignIn);
router.post("/logOut", logOut);

router.post("/addUserMessage", MessageDetaisAdd);
router.get("/getMessage", getMessage);
router.delete("/deleteMessage/:id", deleteMessage);

router.post("/addBlog", addBlog);
router.get("/getAllBlogs", getAllBlogs);
router.get("/getBlogById/:id", getBlogById);
router.delete("/deleteBlog/:id", deleteBlog);

router.post("/addEbook", addEbook);
router.get("/getAllEbook", getAllEbook);
router.get("/getEbookById/:id", getEbookById);
router.delete("/deleteEbook/:id", deleteEbook);

router.post("/addCaseStudy", addCaseStudy);
router.get("/getAllCaseStudy", getAllCaseStudy);
router.get("/getCaseStudyById/:id", getCaseStudyById);
router.delete("/deleteCaseStudy/:id", deleteCaseStudy);

router.post("/addCaseStudyInc", addinquiry);
router.get("/getAllInquiry", getAllInquiry);

module.exports = router;

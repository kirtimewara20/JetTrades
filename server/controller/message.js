const DetailsModel = require("../model/details");

const MessageDetaisAdd = async (req, res, next) => {
  try {
    const { name, phoneNumber, email, message, city ,company  } = req.body;

    if (!name || !phoneNumber || !email || !message || !city || !company) {
      throw new Error("400::500::Data Not Found");
    }

    console.log(name)
    const userMessage = new DetailsModel({
      name: name,
      phoneNumber: phoneNumber,
      email: email,
      message: message,
      city : city,
      company : company,
    });

    // Save the new user to the database
    userMessage.save();

    res.status(200).json({
      status: true,
      response_code: 200,
      message: "User logged in successfully.",
    });
  } catch (error) {
    // console.log(">>>>>>>>", error);
    res.status(400).json({
      status: false,
      response_code: 400,
      message: error.message,
    });
  }
};

const getMessage = async (req, res, next) => {
  try {
    const allMessages = await DetailsModel.find({}).sort({ updatedAt: -1 });
    res.status(200).json({
      status: true,
      data: allMessages,
      response_code: 200,
      message: "All messages retrieved successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      response_code: 400,
      message: error.message,
    });
  }
};

const deleteMessage = async (req, res, next) => {
  const messageId = req.params.id; // Assuming the ID is passed in the URL params

  try {
    const deletedMessage = await DetailsModel.findByIdAndDelete(messageId);

    if (!deletedMessage) {
      throw new Error("500::404::Message not found");
    }

    res.status(200).json({
      status: true,
      response_code: 400,
      message: "Message deleted successfully",
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
  MessageDetaisAdd,
  getMessage,
  deleteMessage,
};

const UserModel = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config("../.env");

const SignIn = async (req, res, next) => {
  try {
    const { phoneNumber, password } = req.body;
    console.log(req.body);
    if (!phoneNumber || !password) {
      throw new Error("200::404:: Data not Found.");
    }

    const userData = await UserModel.find({
      phoneNumber: phoneNumber,
    });

    if (!userData) {
      throw new Error("200::422:: PhoneNumber and Password Invaild!");
    }

    if (userData?.length === 0)
      throw new Error("200::422:: Email and Password Invalid!");

    const isPassword = await bcrypt.compare(password, userData[0]?.password);

    console.log("userData: ", userData);

    if (isPassword) {
      let userToken;

      userToken = jwt.sign(
        { _id: userData[0]._id },
        process.env.JWT_USER_TOKEN_SECRET,
        {
          expiresIn: process.env.TOKEN_EXPIRATION_TIME,
        }
      );

      await UserModel.findOneAndUpdate(
        { phoneNumber },
        {
          tokens: userToken,
          expirationTime: process.env.TOKEN_EXPIRATION_TIME,
        }
      );

      // change it for new schema

      res.status(200).json({
        status: true,
        response_code: 200,
        token: userToken,
        message: "User logged in successfully.",
        data: {
          name: userData[0].firstName,
          phoneNumber: userData[0].phoneNumber,
          tokens: userToken,
        },
      });
    } else {
      throw new Error("200::422:: PhoneNumber and Password Invalid!");
    }
  } catch (error) {
    next(error);
  }
};

const logOut = async (req, res, next) => {
  try {
    const { token } = req.body;
    const getUserData = await UserModel.find({ tokens: token });

    if (getUserData.error != null) throw new Error("400::500::INTERNAL ERROR");

    if (!getUserData.length > 0) {
      throw new Error("400::404::Data Not Found");
    }

    const userModelDagta = await UserModel.findOneAndUpdate(
      { _id: getUserData[0]._id },
      { tokens: null }
    );
    console.log(userModelDagta);

    res.status(200).json({
      status: true,
      response_code: 200,
      message: "logout successfully.",
    });
  } catch (e) {
    return next(e);
  }
};

module.exports = {
  SignIn,
  logOut,
};

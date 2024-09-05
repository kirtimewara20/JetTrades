const jwt = require("jsonwebtoken");
require("dotenv").config("../.env");

const UserModel = require("./model/user");

const authorizationError = {
  status: 0,
  response_code: 401,
  message: "Authorization Access",
};

const middleware = async (req, res, next) => {
  try {
    const path = req.path;
    if (
      path.indexOf("SignIn") == -1 &&
      path.indexOf("addUserMessage") == -1 &&
      path.indexOf("getCaseStudyById") == -1 &&
      path.indexOf("getEbookById") == -1 &&
      path.indexOf("getBlogById") == -1 &&
      path.indexOf("getAllEbook") == -1 &&
      path.indexOf("getAllBlogs") == -1 &&
      path.indexOf("getAllCaseStudy") == -1 &&
      path.indexOf("addCaseStudyInc") == -1
    ) {
      console.log(path);
      const authorizationToken = req.headers.authorization;
      if (authorizationToken) {
        console.log("->>>>>>>>", authorizationToken);
        var token = jwt.verify(
          authorizationToken,
          process.env.JWT_USER_TOKEN_SECRET,
          async (err, user_deatils) => {
            // console.log(err);
            if (err)
              return res
                .status(401)
                .json({
                  status: 0,
                  response_code: 401,
                  message: "Token Expired",
                })
                .end();

            const userData = await UserModel.find({
              _id: user_deatils._id,
              tokens: authorizationToken,
            });

            console.log(userData);

            if (userData?.length > 0) {
              req.user = user_deatils;
              next();
            } else {
              res.status(401).json(authorizationError);
            }
          }
        );
      } else {
        res.status(401).json(authorizationError);
      }
    } else {
      next();
    }
  } catch (e) {
    res.status(401).json(authorizationError);
  }
};

module.exports = {
  middleware,
};

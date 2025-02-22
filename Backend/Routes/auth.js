const express = require("express");
const User = require("../Models/User");
const router = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const hashedPass = async (password) => {
  try {
    const saltRounds = 5;
    const salt = await bcrypt.genSalt(saltRounds); // Awaiting salt generation
    const hash = await bcrypt.hash(password, salt); // Awaiting hash generation
    return hash; // Returning the hashed password
  } catch (e) {
    console.error("Error in HashedPass Function: ", e);
    throw new Error("Not Hashed");
  }
};
router.post(
  "/signUp",
  [
    body(
      "Username",
      "Please Enter Another Username(Only Number Not Allowed)"
    ).isString(),
    body("email", "Please Enter Valid Email Address").isEmail(),
  ],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      console.log("data entered is not Correct\n Data: ", req.body);
      return res.status(500).json({ success: false, Error: error.array() });
    }
    try {
      User.create({
        Username: req.body.Username,
        firstName: req.body.fName,
        lastName: req.body.lName,
        email: req.body.email,
        phone: parseInt(req.body.phone, 10),
        dob: new Date(req.body.dob),
        joined: new Date(),
        password: await hashedPass(req.body.password),
      })
        .then(() => {
          const data = {
            user: {
              id: User.id,
            },
          };
          const token = jwt.sign(data, process.env.JWT_SECRET_KEY);
          res.json({
            success: true,
            token,
          });
        })
        .catch((err) => {
          if (err.code === 11000) {
            //because in UserSchema we have pass to the Email Unique:true thats why on entering the already existed email will cause a error and catch function will caught the error and for duplicate entries error code is 11000
            const errors = {
              phone:
                "The Provided Phone is already registered with a Account try to login",
              Username:
                "Please Select another Username as selected Username is not Available",
            };

            let errorMessage = "";
            Object.keys(err.keyPattern).forEach((errorKey) => {
              errorMessage += errors[errorKey] + "\n";
            });
            res.status(400).json({
              error: errorMessage,
            });
            console.error("Duplicate key error:", err);
            // Handle duplicate key error (E11000) here
          } else {
            console.error("Error creating user:", err);
            // Handle other errors otherthan error 11000 or duplicate value error
          }
        });
    } catch (e) {
      console.log("Error in Router Post signUp First Catch: ", e);
      res
        .status(400)
        .json({ success: false, msg: "Internal Server Error in file auth.js" });
    }
  }
);

module.exports = router;

import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import asyncErrorHandler from "./../utils/asyncErrorHandler.js";
import CustomError from "../utils/CustomError.js";

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.LOGIN_EXPIRES,
  });
};

// Route for user login
const loginUser = asyncErrorHandler(async (req, res, next) => {
  const { email, password } = req.body;

  //checks if email & password exist in the request
  if (!email || !password) {
    const err = new CustomError(
      "please provide email address and password to login",
      400,
      "error"
    );
    next(err);
  }
  //find user with requested email
  const user = await userModel.findOne({ email }).select("+password");
  //checking cridentials
  if (!user || !(await user.comparePasswords(password, user.password))) {
    const err = new CustomError(
      "wrong email or password, please check again...",
      400,
      "wrong password/email"
    );
    return next(err);
  }
  const token = signToken(user._id);
  res.status(200).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
});

// Route for user register
const registerUser = asyncErrorHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // check user already exists or not
  const exists = await userModel.findOne({ email });
  if (exists) {
    return res.json({ success: false, message: "User Already Exists" });
  }

  //creating the user
  const newuser = await userModel.create(req.body);

  const token = signToken(newuser._id);

  res.status(200).json({
    status: "success",
    token,
    data: {
      newuser,
    },
  });
});

// Route For admin login
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { loginUser, registerUser, adminLogin };

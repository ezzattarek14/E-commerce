import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import asyncErrorHandler from "./../utils/asyncErrorHandler.js";

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.LOGIN_EXPIRES,
  });
};

// Route for user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "user doesn't exists" });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = createToken(user._id);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "invalid credintials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

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

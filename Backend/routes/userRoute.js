import express from "express";
import {
  loginUser,
  registerUser,
  forgotPassword,
  resetPassword,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.route("/forgotpassword").post(forgotPassword);
userRouter.route("/resetpassword/:Token").patch(resetPassword);

export default userRouter;

import express from "express";
import {
  placeOrder,
  placeOrderStripe,
  allOrders,
  userOrders,
  updateStatus,
  verifyStripe,
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/userAuth.js";

const orderRouter = express.Router();

// Admin Features
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

// Payment Features
orderRouter.post("/place", placeOrder);
orderRouter.post("/stripe", placeOrderStripe);
// User Feature
orderRouter.post("/userorders", authUser, userOrders);

// verify payment

orderRouter.post("/verifyStripe", authUser, verifyStripe);

export default orderRouter;

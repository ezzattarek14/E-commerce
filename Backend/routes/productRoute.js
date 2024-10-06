import express from "express";
import {
  listProduct,
  addProduct,
  removeProduct,
  singleProduct,
} from "../controllers/productController.js";
import upload from "../middleware/multer.js";
import userAuth from "./../middleware/userAuth.js";

const productRouter = express.Router();

productRouter.post(
  "/add",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);
productRouter.delete("/remove", removeProduct);
productRouter.post("/single", singleProduct);
productRouter.get("/list", userAuth, listProduct);

export default productRouter;

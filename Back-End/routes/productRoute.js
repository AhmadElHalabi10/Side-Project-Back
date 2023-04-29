import express from "express";
import uploadImage from "../middleware/uploadImage.js";
import {
  getProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();
router.get("/", getProducts);
router.post("/", uploadImage.single("image"), createProduct);
router.get("/:id", getProduct);
router.put("/:id", uploadImage.single("image"), updateProduct);
router.delete("/:id", deleteProduct);

export default router;

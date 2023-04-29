import mongoose from "mongoose";
import { TextField } from "@mui/material";

const { Schema, model } = mongoose;
const ProductModel = new Schema(
  {
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    name: {
      type: String,
      requried: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    collection: "products",
  }
);
productSchema.pre(["find", "findOne", "save", "create"], function () {
  this.populate(["categoryId"]);
});

const Product = model("Product", ProductModel);
export default Product;

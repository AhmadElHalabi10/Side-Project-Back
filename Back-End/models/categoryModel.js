import mongoose from "mongoose";
const { Schema, model } = mongoose;

const categoryModel = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
  },
  {
    collection: "Category",
  }
);

const Category = model("Category", categoryModel);
export default Category;

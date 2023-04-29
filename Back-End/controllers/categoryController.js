import CategoryModel from "../models/categoryModel.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//
//
// CRUD functions
export const createCategory = async (req, res) => {
  const { name } = req.body;
  const category = new CategoryModel({ name: name });
  try {
    const newCategory = await category.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getCategory = async (req, res) => {
  try {
    const category = await CategoryModel.findById(req.params.categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category Not Found" });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const updateCategory = async (req, res) => {
  try {
    const category = await CategoryModel.findById(req.params.categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category Not Found" });
    }
    category.name = req.body.name || category.name;
    const updated = await category.save();
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const category = await CategoryModel.findByIdAndRemove(
      req.params.categoryId
    );
    if (!category) {
      return res.status(404).json({ message: "Category Not Found" });
    }
    res.status(200).json({ message: "Category Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

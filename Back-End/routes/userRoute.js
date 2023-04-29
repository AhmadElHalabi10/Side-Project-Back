import express from "express";
import {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
  register,
  login,
  logout,
} from "../controllers/userController.js";

const router = express.Router();
router.get("/", getUsers);

// CRUD routes
router.post("/", createUser);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

// Login - Logout - Register routes
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

export default router;
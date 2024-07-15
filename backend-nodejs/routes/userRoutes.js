import express from "express";
import {
  registerUser,
  loginUser,
  deleteUser,
  getUserByUsername,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.delete("/delete", deleteUser);
router.get("/get", getUserByUsername);

export default router;

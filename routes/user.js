import express from "express";
import {
  getUser,
  addUser,
  deleteUser,
  updateUser,
} from "../controllers/user.js";

const router = express.Router();

router.post("/user", addUser);

router.get("/user", getUser);

router.put("/user/:id", updateUser);

router.delete("/user/:id", deleteUser);

export default router;

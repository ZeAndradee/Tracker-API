import express from "express";
import {
  getUsers,
  addUsers,
  deleteUser,
  updateUser,
} from "../controllers/user.js";

const router = express.Router();

router.post("/users", addUsers);

router.get("/users", getUsers);

router.put("/users/:id", updateUser);

router.delete("/users/:id", deleteUser);

export default router;

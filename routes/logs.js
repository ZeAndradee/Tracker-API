import express from "express";
import { getLog, addLog, deleteLog, updateLog } from "../controllers/logs.js";

const router = express.Router();

router.post("/logs", addLog);

router.get("/logs", getLog);
router.get("/logs/:trackurl", getLog);
router.get("/logs/:username", getLog);

router.put("/logs/:id", updateLog);

router.delete("/logs/:id", deleteLog);

export default router;

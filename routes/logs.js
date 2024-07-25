import express from "express";
import {
  getLog,
  addLog,
  deleteLog,
  updateLog,
  updateLogUser,
  deleteLogUser,
  addLogUser,
} from "../controllers/logs.js";

const router = express.Router();

router.post("/logs", addLog);
router.post("/logs", addLogUser);

router.get("/logs", getLog);
router.get("/logs/trackurl/:trackurl", getLog);
router.get("/logs/user/:username", getLog);

router.get("/logs/user/:username/:trackid", getLog);

router.put("/logs/:id", updateLog);
router.put("/logs/:id", updateLogUser);

router.delete("/logs/:id", deleteLog);
router.delete("/logs/:id", deleteLogUser);

export default router;

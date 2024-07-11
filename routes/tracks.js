import express from "express";
import {
  getTrack,
  addTrack,
  deleteTrack,
  updateTrack,
} from "../controllers/tracks.js";

const router = express.Router();

router.post("/tracks", addTrack);

router.get("/tracks", getTrack);
router.get("/tracks/:trackurl", getTrack);

router.put("/tracks/:id", updateTrack);

router.delete("/tracks/:id", deleteTrack);

export default router;

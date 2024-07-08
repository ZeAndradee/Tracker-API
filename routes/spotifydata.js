import express from "express";
import {
  getSpotifyData,
  addSpotifyData,
  deleteSpotifyData,
  updateSpotifyData,
} from "../controllers/spotifydata.js";

const router = express.Router();

router.post("/spotifydata", addSpotifyData);

router.get("/spotifydata", getSpotifyData);

router.put("/spotifydata/:id", updateSpotifyData);

router.delete("/spotifydata/:id", deleteSpotifyData);

export default router;

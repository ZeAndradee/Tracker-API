import express from "express";
import userRoutes from "./routes/user.js";
import spotifyInfoRoutes from "./routes/spotifydata.js";
import logsRoutes from "./routes/logs.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", userRoutes);
app.use("/", spotifyInfoRoutes);
app.use("/", logsRoutes);

app.listen(3000);

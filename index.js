import express from "express";
import { GenerateVideo } from "./controllers/video_controller.js";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json("hello this is the video gen root route");
});

app.post("/generateVideo/:id", GenerateVideo);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

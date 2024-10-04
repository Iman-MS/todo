import express from "express";
import dotenv from "dotenv";
import mongoSanitize from "express-mongo-sanitize";
import hpp from "hpp";
import cors from "cors";

import connectDB from "./config/db.js";
import errorHandler from "./utils/middleware/error.js";

import tasks from "./routes/tasks.js";

import colors from "colors";

dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

app.use(mongoSanitize()); // santizie data
app.use(hpp()); // prevent http params pollution
app.use(cors()); // allows cross-origin requests

app.use("/api/v1/tasks", tasks);

app.use(errorHandler);

const PORT = 5000;

app.get("/api/", (req, res) => {
  console.log("This is a get request to the root route just as a test");

  return res.json({ success: true, data: "Just a simple route" });
});

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.yellow.bold);
});

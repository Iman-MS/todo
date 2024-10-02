import express from "express";

import colors from "colors";

const app = express();

const PORT = 5000;

app.get("/api/", (req, res) => {
  console.log("This is a get request to the root route just as a test");

  return res.json({ success: true, data: "Just a simple route" });
});

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.yellow.bold);
});

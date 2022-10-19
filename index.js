const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

const category = require("./data/categories.json");

app.get("/", (req, res) => {
  res.send("Newa Api is running");
});
app.get("/news-category", (req, res) => {
  res.send(category);
});
app.listen(port, () => {
  console.log("Belivers News portal is running in port", 5000);
});

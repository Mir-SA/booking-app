const path = require("path");
const express = require("express");
require("dotenv").config();
const { connectDB } = require("./db");

const app = express();
const port = process.env.PORT || 3000;
const publicDir = path.join(__dirname, "/public");

app.use(express.static(publicDir));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile("/index.html");
});

app.post("/", (req, res) => {
  connectDB(req.body);
  res
    .status(200)
    .send(
      "<h1 style='text-align:center; margin-top:40vh;'>Sucessfullly submitted the form!</h1>"
    );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

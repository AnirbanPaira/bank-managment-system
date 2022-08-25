const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const customerRoute = require("./router/customerRoute");
app.use(express.json());

mongoose
  .connect(process.env.DATA_BASE)
  .then(() => {
    console.log("DATABASE is connected");
  })
  .catch((err) => console.log(err.message));

app.use("/", customerRoute);

app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./build/index.html"));
});

app.listen(8000, () => console.log("server is runnig post 8000"));

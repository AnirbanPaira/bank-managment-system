const express = require("express");
const app = express();
const mongoose = require("mongoose");

const customerRoute = require("./router/customerRoute");
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://anirban:1234@cluster0.40kmx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DATABASE is connected");
  })
  .catch((err) => console.log(err.message));

app.use("/", customerRoute);

app.get("/", (req, res) => {
  res.json({
    message: "server is running",
  });
});

app.listen(8000, () => console.log("server is runnig post 8000"));

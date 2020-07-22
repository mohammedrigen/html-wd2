const express = require("express");
const app = new express();
const bodyParser = require("body-parser");
const userRoute = require("./routes/User");
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "pug");

app.get("/", function (req, res) {
  res.send("Hello World");
});
app.use("/", userRoute);

app.listen(4000);
console.log("Server Started");

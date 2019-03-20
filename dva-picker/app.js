const express = require("express");
const app = express();
const mongoose = require("mongoose");
const CarSchema = require("./schemas/CarSchema");
const url = require("url");
const fs = require("fs");

app.get("/api", (req, res) => {
  const { page, pagesize } = url.parse(req.url, true).query;

  CarSchema.find()
    .skip((page - 1) * pagesize)
    .limit(parseInt(pagesize))
    .exec((err, result) => {
      if (!err) res.json({ result });
      else console.log("err:", err);
    });
});

mongoose.connect("mongodb://localhost/carsystem");
app.use(express.static("www"));
app.listen(3000);

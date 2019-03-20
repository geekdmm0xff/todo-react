const express = require("express");
const app = express();
const mongoose = require("mongoose");
const CarSchema = require("./schemas/CarSchema");
const url = require("url");
const fs = require("fs");

app.get("/api", (req, res) => {
  const {
    id,
    rate,
    brand,
    color,
    engine,
    push,
    control,
    buyDate,
    detail,
    saler,
    km,
    city,
    page,
    pagesize,
    price
  } = url.parse(req.url, true).query;

  const buildPriceQuery = () => {
    const arr = price.split(",");
    const priceMin = parseInt(arr[0]);
    const priceMax = parseInt(arr[1]);
    return {
      $gt: priceMin,
      $lt: priceMax
    };
  };

  const buildRateQuery = () => new Array(parseInt(rate)).fill("★").join("");

  const buildQuery = () => {
    let o = {};
    id && (o.id = id);
    rate && (o.rate = buildRateQuery());
    brand && (o.brand = brand);
    color && (o.color = color);
    engine && (o.engine = engine);
    push && (o.push = push);
    control && (o.control = control);
    buyDate && (o.buyDate = buyDate);
    detail && (o.detail = detail);
    saler && (o.saler = saler);
    km && (o.km = km);
    price && (o.price = buildPriceQuery());
    return o;
  };
  const query = buildQuery();
  console.log("query:", query);

  CarSchema.find(query)
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

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
    name,
    type,
    seat,
    buyDate,
    detail,
    saler,
    km,
    city,
    page,
    pagesize,
    price
  } = url.parse(req.url, true).query;

  const buildRangeQuery = range => {
    const arr = range.split(",");
    const min = parseInt(arr[0]);
    const max = parseInt(arr[1]);
    return {
      $gt: min,
      $lt: max
    };
  };

  const buildRateQuery = item => new Array(parseInt(rate)).fill(item).join("");

  const buildMultQuery = v => {
    return {
      $in: v.split(",")
    };
  };

  const buildQuery = () => {
    let o = {};
    id && (o.id = id);
    rate && (o.rate = buildRateQuery("★"));
    brand && (o.brand = brand);
    color && (o.color = color);
    engine && (o.engine = buildMultQuery(engine));
    push && (o.push = push);
    control && (o.control = control);

    name && (o["system.name"] = name);
    type && (o["system.type"] = type);
    seat && (o["system.seat"] = parseInt(seat));

    buyDate && (o.buyDate = buyDate);
    detail && (o.detail = detail);
    saler && (o.saler = saler);
    km && (o.km = km);
    price && (o.price = buildRangeQuery(price));
    return o;
  };

  const fetchCount = query => {
    return new Promise((resolve, reject) => {
      CarSchema.count(query, (err, total) => {
        !err ? resolve(total) : reject(err);
      });
    });
  };

  const fetchList = (query, page, pagesize) => {
    return new Promise((resolve, reject) => {
      CarSchema.find(query)
        .skip((page - 1) * pagesize)
        .limit(parseInt(pagesize))
        .exec((err, list) => {
          !err ? resolve(list) : reject(err);
        });
    });
  };

  const flow = async () => {
    try {
      const query = buildQuery();
      console.log("query:", query);
      let total = await fetchCount(query);
      let list = await fetchList(query, page, pagesize);
      res.json({
        page,
        total,
        list
      });
    } catch (err) {
      res.sendStatus(400).json({
        err
      });
    }
  };

  flow();
});

mongoose.connect("mongodb://localhost/carsystem");
app.use(express.static("www"));
app.listen(3000);
console.log("server start!");

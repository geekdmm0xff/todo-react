const express = require("express");
const app = express();
const mongoose = require("mongoose");
const CarSchema = require("./schemas/CarSchema");
const url = require("url");

app.get("/api", async (req, res) => {
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
    type && (o["system.type"] = buildMultQuery(type));
    seat && (o["system.seat"] = buildMultQuery(seat));

    buyDate && (o.buyDate = buildRangeQuery(buyDate));
    detail && (o.detail = detail);
    saler && (o.saler = saler);
    km && (o.km = km);
    price && (o.price = buildRangeQuery(price));
    return o;
  };

  try {
    const query = buildQuery();
    console.log("query:", query);

    let total = await CarSchema.count(query); //fetchCount(query);
    let list = await CarSchema.find(query)
      .skip((page - 1) * pagesize)
      .limit(parseInt(pagesize))
      .lean() // doc -> js's obj
      .exec();
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
});

mongoose.connect("mongodb://localhost/carsystem");
app.use(express.static("www"));
app.listen(3000);
console.log("server start!");

var express = require("express");
var app = express();
const fs = require("fs");

app.get("/cars", (req, res) => {
  const flow = async function() {
    let response = {};
    let path = "./www/images/Corolla";
    let colors = await readdir(path);

    for (const color of colors) {
      let subPath = path + "/" + color;
      if (exists(subPath)) {
        continue;
      }
      let albums = await readdir(subPath);
      response[color] = {};
      for (const album of albums) {
        let detailPath = subPath + "/" + album;
        if (exists(detailPath)) {
          continue;
        }
        let images = await readdir(detailPath);
        response[color][album] = images;
      }
    }
    console.log("response:", response);
    res.json({ result: response });
  };

  flow();
});

//
function readdir(path) {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, data) => {
      !err ? resolve(data) : reject(err);
    });
  });
}

function exists(path) {
  return path.indexOf(".DS_Store") != -1;
}

app.use(express.static("www"));

app.listen(3000);

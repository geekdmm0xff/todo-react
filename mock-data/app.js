const Mock = require("mockjs");
const fs = require("fs");
const Random = Mock.Random;

var carMap = {
  宝马: {
    pinyin: "b",
    country: "德国",
    systems: [
      {
        name: "5系",
        type: "SUV",
        seat: 4
      },
      {
        name: "3系",
        type: "三厢轿车",
        seat: 4
      },
      {
        name: "X1",
        type: "两厢轿车",
        seat: 2
      },
      {
        name: "1系",
        type: "三厢轿车",
        seat: 2
      },
      {
        name: "X3",
        type: "SUV",
        seat: 4
      },
      {
        name: "X5",
        type: "SUV",
        seat: 6
      },
      {
        name: "7系",
        type: "五厢轿车",
        seat: 6
      }
    ]
  },
  奔驰: {
    pinyin: "b",
    country: "德国",
    systems: [
      {
        name: "A",
        type: "豪华型轿车",
        seat: 4
      },
      {
        name: "B",
        type: "豪华型轿车",
        seat: 4
      },
      {
        name: "C",
        type: "中型轿车",
        seat: 4
      },
      {
        name: "D",
        type: "中型轿车",
        seat: 4
      },
      {
        name: "GLK",
        type: "中型轿车",
        seat: 4
      }
    ]
  }
};

var data = Mock.mock({
  "list|5000": [
    {
      "id|+1": 10000,
      "rate|1-5": "★",
      "brand|1": Object.keys(carMap),
      system: function() {
        let arr = carMap[this.brand].systems;
        let index = Random.integer(0, arr.length - 1);
        return arr[index];
      },
      buyDate: () => {
        let date = new Date(
          Random.integer(2015, 2019),
          Random.integer(0, 11),
          Random.integer(1, 31)
        );
        return date.getTime();
      },
      detail: () => Random.cparagraph(2),
      "color|1": ["白", "红", "黑", "灰", "黄", "绿", "银"],
      saler: () => Random.cname(),
      km: () => Random.integer(0, 1000000),
      city: () => Random.county(true),
      "engine|1": [
        "1.2T",
        "1.4T",
        "1.6T",
        "2.0T",
        "4.0T",
        "5.0T"
      ],
      price: () => parseInt(Random.float(0.4, 100) * 100) / 100,
      "push|1": ["国一", "国二", "国三", "国四", "国五"],
      "control|1": ["手动", "自动"]
    }
  ]
});
let content = data.list.reduce((acc, cur) => (acc += JSON.stringify(cur)), "");
fs.writeFile("./result.json", content, () => {
  console.log("finished");
});

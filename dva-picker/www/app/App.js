import React, { Component } from "react";
import { connect } from "dva";
import TabCtrl from "./components/TabCtrl";
import ListCtrl from "./components/ListCtrl";
import RangeCtrl from "./components/RangeCtrl";
import SelectCtrl from "./components/SelectCtrl";
import "./styles/less.less";

const carbrand = {
  a: [
    "奥迪",
    "阿尔法·罗密欧",
    "阿斯顿·马丁",
    "ALPINA",
    "安驰",
    "ARCFOX",
    "AC",
    "Schnitzer",
    "安凯客车"
  ],
  b: [
    "本田",
    "奔驰",
    "别克",
    "宝马",
    "宝骏",
    "标致",
    "比亚迪",
    "保时捷",
    "奔腾"
  ],
  c: ["长安", "长城", "长安欧尚", "昌河", "长安轻型车", "成功汽车"],
  d: ["大众", "东风风行", "东南", "东风风神", "东风风光", "道奇", "东风"]
};
const system = {
  hot: ["大众", "奥迪", "宝马", "奔驰", "丰田"],
  all: {
    两厢轿车: ["POLO", "朗逸"],
    三厢轿车: ["A3", "A4"],
    跑车: ["TT"]
  }
};
const price = {
  defaults: [
    {
      min: 0,
      max: 3,
      desc: "3万以下"
    },
    {
      min: 3,
      max: 5,
      desc: "3-5万"
    },
    {
      min: 5,
      max: 10,
      desc: "5-10万"
    },
    {
      min: 10,
      max: 20,
      desc: "10-20万"
    }
  ],
  min: 0,
  max: 100
};
const cartype = {
  type: "multi",
  title: "车型",
  options: [
    "小型车",
    "中型车",
    "豪华车",
    "小型SUV",
    "中型SUV",
    "大型SUV",
    "越野",
    "跑车",
    "面包车"
  ],
  value: ["豪华车", "大型SUV", "面包车"]
};
const seats = {
  type: "single",
  title: "座位数",
  options: ["2座", "4座", "5座", "7座"],
  value: "4座"
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      carbrand,
      system,
      price,
      cartype,
      seats
    };
  }

  render() {
    const { carbrand, system, price, cartype, seats } = this.state;
    return (
      <div>
        <div className="ant-table">
          <div className="ant-table-body">
            <table>
              <tbody className="ant-table-tbody">
                <tr className="ant-table-row">
                  <td className="td-h">品牌</td>
                  <TabCtrl data={carbrand} />
                </tr>
                <tr className="ant-table-row">
                  <td className="td-h">车系</td>
                  <ListCtrl data={system} />
                </tr>
                <tr>
                  <td className="td-h">价格</td>
                  <RangeCtrl data={price} />
                </tr>
                <tr>
                  <td className="td-h">其他</td>
                  <SelectCtrl data={cartype} />
                  <SelectCtrl data={seats} />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

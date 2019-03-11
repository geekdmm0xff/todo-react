import React, { Component } from "react";
import { connect } from "dva";
import TabCtrl from "./components/TabCtrl";
import ListCtrl from "./components/ListCtrl";
import './styles/less.less'

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
    "两厢轿车": ["POLO", "朗逸"],
    "三厢轿车": ["A3", 'A4'],
    "跑车":["TT"]
  }
};
class App extends Component {
  constructor() {
    super();
    this.state = {
      carbrand,
      system
    };
  }

  render() {
    return (
      <div>
        <div className="ant-table">
          <div className="ant-table-body">
            <table>
              <tbody className="ant-table-tbody">
                <tr className="ant-table-row">
                  <td className="td-h">品牌</td>
                  <TabCtrl data={this.state.carbrand} />
                </tr>
                <tr className="ant-table-row">
                  <td className="td-h">车系</td>
                  <ListCtrl data={this.state.system} />
                </tr>
                <tr className="ant-table-row">
                  <td>123</td>
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

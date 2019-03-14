import React, { Component } from "react";
import { Tabs } from "antd";
import * as templateHelper from "../models/templateHelper";

const TabPane = Tabs.TabPane;

class TabCtrl extends Component {
  render() {
    return (
      <td>
        <Tabs className="tab-ctrl" defaultActiveKey="0" onChange={() => {}}>
          {this.renderTabs()}
        </Tabs>
      </td>
    );
  }

  // UI
  renderTabs() {
    const { k: title, tag, updateFunc, data } = this.props;
    const keys = Object.keys(data);
    return keys.map((key, index) => {
      return (
        <TabPane tab={key} key={index}>
          {data[key].map((item, index) => {
            return (
              <a
                href="javascript:void(0)"
                key={index}
                onClick={() =>
                  updateFunc(title, item, tag, templateHelper.template1)
                }
              >
                {item}
              </a>
            );
          })}
        </TabPane>
      );
    });
  }
}

export default TabCtrl;

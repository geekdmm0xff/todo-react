import React, { Component } from "react";
import { Tabs } from "antd";

const TabPane = Tabs.TabPane;

class TabCtrl extends Component {
  render() {
    return (
      <td>
        <Tabs className="tab-ctrl" defaultActiveKey="0" onChange={() => {}}>
          {this.renderTabs(this.props.data)}
        </Tabs>
      </td>
    );
  }

  // UI
  renderTabs(data) {
    const keys = Object.keys(data);
    return keys.map((key, index) => {
      return (
        <TabPane tab={key} key={index}>
          {data[key].map((item, index) => {
            return (
              <a href="javascript:void(0)" key={index}>
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

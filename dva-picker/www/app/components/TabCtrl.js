import React, { Component } from "react";
import { Tabs } from "antd";
import classNames from "classnames";
import * as templateHelper from "../models/templateHelper";

const TabPane = Tabs.TabPane;

class TabCtrl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

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
                className={classNames({ cur: item === this.state.value })}
                onClick={() => {
                  this.setState({
                    ...this.state,
                    value: item
                  });
                  updateFunc(title, item, tag, templateHelper.template1);
                }}
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

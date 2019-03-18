import React, { Component } from "react";
import { connect } from "dva";
import { Tabs } from "antd";
import classNames from "classnames";

const TabPane = Tabs.TabPane;

class TabCtrl extends Component {
  constructor(props) {
    super(props);
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
    const filter = this.props.filter
      .filter(item => {
        return item.tag === tag;
      })
      .pop();
    let value;
    if (filter) {
      value = filter.value;
    }

    const keys = Object.keys(data);
    return keys.map((key, index) => {
      return (
        <TabPane tab={key} key={index}>
          {data[key].map((item, index) => {
            return (
              <a
                href="javascript:void(0)"
                key={index}
                className={classNames({ cur: item === value })}
                onClick={() => {
                  updateFunc(title, item, tag, `${tag}:${item}`);
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

export default connect(({ picker: { filter } }) => ({
  filter
}))(TabCtrl);

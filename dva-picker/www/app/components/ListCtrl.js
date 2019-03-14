import React, { Component } from "react";
import { Row, Col } from "antd";
import * as templateHelper from "../models/templateHelper";

export class ListCtrl extends Component {
  state = {
    showMore: false
  };

  render() {
    return (
      <td className="list-ctrl">
        <Row>
          <Col span={12}>
            <div>{this.renderList()}</div>
          </Col>
          <Col span={12}>
            <a href="javascript:void(0)" onClick={this.handlerMore}>
              更多
            </a>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <div
              className="more-box"
              style={{ display: this.state.showMore ? "block" : "none" }}
            >
              {this.renderMore()}
            </div>
          </Col>
        </Row>
      </td>
    );
  }

  /// UI
  renderList() {
    const {
      k: title,
      tag,
      updateFunc,
      data: { hot }
    } = this.props;

    return hot.map((item, index) => {
      return (
        <a
          key={index}
          href="javascript:void(0)"
          onClick={() => updateFunc(title, item, tag, templateHelper.template1)}
        >
          {item}
        </a>
      );
    });
  }

  renderMore() {
    const {
      k: title,
      tag,
      updateFunc,
      data: { all }
    } = this.props;

    return Object.keys(all).map((key, index) => {
      return (
        <dl key={index}>
          <dt>{key}</dt>
          <dd>
            {all[key].map((elem, index) => {
              return (
                <a
                  key={index}
                  href="javascript:void(0);"
                  onClick={() =>
                    updateFunc(title, elem, tag, templateHelper.template1)
                  }
                >
                  {elem}
                </a>
              );
            })}
          </dd>
        </dl>
      );
    });
  }

  /// Actions
  handlerMore = () => {
    this.setState({
      showMore: !this.state.showMore
    });
  };
}

export default ListCtrl;

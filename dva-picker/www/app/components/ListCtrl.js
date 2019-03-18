import React, { Component } from "react";
import { Row, Col } from "antd";
import classNames from "classnames";

export class ListCtrl extends Component {
  state = {
    showMore: false,
    value: ""
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
          className={classNames({ cur: item === this.state.value })}
          href="javascript:void(0)"
          onClick={() => {
            this.setState(
              {
                ...this.state,
                value: item
              },
              () => {
                updateFunc(title, item, tag, `${tag}:${item}`);
              }
            );
          }}
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
                  className={classNames({ cur: this.state.value === elem })}
                  href="javascript:void(0);"
                  onClick={() => {
                    this.setState(
                      {
                        ...this.state,
                        value: elem
                      },
                      () => {
                        updateFunc(title, elem, tag, `${tag}:${elem}`);
                      }
                    );
                  }}
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

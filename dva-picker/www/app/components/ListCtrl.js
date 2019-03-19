import React, { Component } from "react";
import { Row, Col } from "antd";
import classNames from "classnames";
import { connect } from "dva";

class ListCtrl extends Component {
  state = {
    showMore: false
  };

  render() {
    const filter = this.props.filter
      .filter(item => {
        return item.tag === this.props.tag;
      })
      .pop();
    let value;
    if (filter) {
      value = filter.value;
    }
    return (
      <td className="list-ctrl">
        <Row>
          <Col span={12}>
            <div>{this.renderList(value)}</div>
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
              {this.renderMore(value)}
            </div>
          </Col>
        </Row>
      </td>
    );
  }

  /// UI
  renderList(value) {
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
          className={classNames({ cur: item === value })}
          href="javascript:void(0)"
          onClick={() => {
            updateFunc(title, item, tag, `${tag}:${item}`);
          }}
        >
          {item}
        </a>
      );
    });
  }

  renderMore(value) {
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
                  className={classNames({ cur: value === elem })}
                  href="javascript:void(0);"
                  onClick={() => {
                    updateFunc(title, elem, tag, `${tag}:${elem}`);
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

export default connect(({ picker: { filter } }) => ({
  filter
}))(ListCtrl);

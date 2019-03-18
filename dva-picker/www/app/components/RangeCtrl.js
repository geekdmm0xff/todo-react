import React, { Component } from "react";
import { Slider, Row, Col } from "antd";
import classNames from "classnames";

class RangeCtrl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [0, 100]
    };
  }

  render() {
    const {
      data: { min, max }
    } = this.props;

    return (
      <td className="range-ctrl">
        <div className="defaults">{this.renderDefault()}</div>

        <div className="slider">
          <Row>
            <Col span={14}>
              <Slider
                range
                min={min}
                max={max}
                value={this.state.value}
                onChange={this.handerSlider}
              />
            </Col>
            <Col span={10}>
              <label>
                {min}到{max}万
              </label>
            </Col>
          </Row>
        </div>
      </td>
    );
  }

  // UI
  renderDefault() {
    const {
      k: title,
      tag,
      updateFunc,
      data: { defaults }
    } = this.props;
    return defaults.map((item, index) => (
      <a
        key={index}
        href="javascript:void(0);"
        className={classNames({
          cur: [item.min, item.max].every(elem =>
            this.state.value.includes(elem)
          )
        })}
        onClick={() => {
          this.setState(
            {
              ...this.state,
              value: [item.min, item.max]
            },
            () => {
              updateFunc(
                title,
                [item.min, item.max],
                tag,
                `${tag}:${item.desc}`
              );
            }
          );
        }}
      >
        {item.desc}
      </a>
    ));
  }

  // Action
  handerSlider = ([min, max]) => {
    const { k: title, tag, updateFunc } = this.props;

    this.setState(
      {
        ...this.state,
        value: [min, max]
      },
      () => {
        updateFunc(
          title,
          [min, max],
          tag,
          `${tag}:` + [min, max].join("到") + "万"
        );
      }
    );
  };
}

export default RangeCtrl;

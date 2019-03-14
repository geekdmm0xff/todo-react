import React, { Component } from "react";
import { Slider, Row, Col } from "antd";
import * as templateHelper from "../models/templateHelper";

class RangeCtrl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
  }

  render() {
    const {
      k: title,
      tag,
      updateFunc,
      data: { defaults, min, max }
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
                defaultValue={[min, max]}
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
      data: { defaults, min, max }
    } = this.props;

    return defaults.map((item, index) => (
      <a
        key={index}
        href="javascript:void(0);"
        onClick={() =>
          updateFunc(title, [item.min, item.max], tag, templateHelper.template2)
        }
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
        min,
        max
      },
      () => {
        updateFunc(title, [min, max], tag, templateHelper.template2);
      }
    );
  };
}

export default RangeCtrl;

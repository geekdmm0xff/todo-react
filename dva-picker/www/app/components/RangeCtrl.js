import React, { Component } from "react";
import { Slider, Row, Col } from "antd";

class RangeCtrl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
  }

  render() {
    const { defaults, min, max } = this.state;
    return (
      <td className="range-ctrl">
        <div className="defaults">{this.renderDefault(defaults)}</div>

        <div className="slider">
          <Row>
            <Col span={14}>
              <Slider
                range
                min={0}
                max={100}
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
  renderDefault(data) {
    return data.map((item, index) => (
      <a key={index} href="javascript:void(0);">
        {item.desc}
      </a>
    ));
  }

  // Action
  handerSlider = ([min, max]) => {
    this.setState({
      ...this.state,
      min,
      max
    });
  };
}

export default RangeCtrl;

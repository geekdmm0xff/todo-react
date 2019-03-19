import React, { Component } from "react";
import { Slider, Row, Col } from "antd";
import classNames from "classnames";
import { connect } from "dva";

class RangeCtrl extends Component {
  render() {
    const {
      data: { min, max }
    } = this.props;

    const filter = this.props.filter
      .filter(item => {
        return item.tag === this.props.tag;
      })
      .pop();
    let values = [0, 100];
    if (filter) {
      values = filter.value;
    }
    return (
      <td className="range-ctrl">
        <div className="defaults">{this.renderDefault(values)}</div>

        <div className="slider">
          <Row>
            <Col span={14}>
              <Slider
                range
                min={min}
                max={max}
                value={values}
                onChange={range => this.handerSlider(range, values)}
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
  renderDefault(values) {
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
          cur: [item.min, item.max].every(elem => values.includes(elem))
        })}
        onClick={() => {
          updateFunc(title, [item.min, item.max], tag, `${tag}:${item.desc}`);
        }}
      >
        {item.desc}
      </a>
    ));
  }

  // Action
  handerSlider = ([min, max], values) => {
    const { k: title, tag, updateFunc } = this.props;

    updateFunc(
      title,
      [min, max],
      tag,
      `${tag}:` + [min, max].join("到") + "万"
    );
  };
}

export default connect(({ picker: { filter } }) => ({
  filter
}))(RangeCtrl);

import React, { Component } from "react";
import classNames from "classnames";

export default class SelectCtrl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.data,
      show: false
    };
  }

  componentDidMount() {
    var self = this;
    $(document).click(function(event) {
      if ($(self.refs.select_ctr_box).find($(event.target)).length == 0) {
        self.setState({
          ...self.state,
          show: false
        });
      }
    });
  }

  render() {
    const { type, options, value, title } = this.state;
    return (
      <td className="select-ctrl" ref="select_ctr_box">
        <div className="menu-selected" onClick={this.handlerSelectedMenu}>
          {title}
        </div>
        {type === "multi"
          ? this.renderMultiMenus(options, value)
          : this.renderSingleMenus(options, value)}
      </td>
    );
  }
  // UI
  renderSingleMenus = (options, value) => {
    let pos = options.indexOf(value);
    return (
      <dl
        className="menu-single clearfix"
        style={{ display: this.state.show ? "block" : "none" }}
      >
        {options.map((item, index) => (
          <dd className={classNames({ cur: index == pos })} key={index}>
            <a href="javascript:void(0);">{item}</a>
          </dd>
        ))}
      </dl>
    );
  };

  renderMultiMenus = (options, value) => {
    return (
      <dl
        className="menu clearfix"
        style={{ display: this.state.show ? "block" : "none" }}
      >
        {options.map((item, index) => (
          <dd key={index}>
            <input type="checkbox" checked={value.includes(item)} />
            {item}
          </dd>
        ))}
      </dl>
    );
  };

  // Aciton
  handlerSelectedMenu = event => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };
}

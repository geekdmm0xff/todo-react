import React, { Component } from "react";

export default class SelectCtrl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.data,
      show: false
    };
    console.log("state:", this.state);
  }

  render() {
    const { type, options } = this.state;
    return (
      <td className="select-ctrl">
        <div className="menu-selected" onClick={this.handlerSelectedMenu}>
          车型
        </div>
        {type === "multi" ? this.renderMenus(options) : null}
      </td>
    );
  }
  // UI
  renderMenus = options => {
    return (
      <dl
        className="menu clearfix"
        style={{ display: this.state.show ? "block" : "none" }}
      >
        {options.map((item, index) => (
          <dd key={index}>
            <input type="checkbox" />
            {item}
          </dd>
        ))}
      </dl>
    );
  };
  // Aciton
  handlerSelectedMenu = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };
}

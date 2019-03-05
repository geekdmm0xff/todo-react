import React, { Component } from "react";
import { connect } from "dva";
import "./styles/less.less";
import classnames from "classname";
import Picker from "./components/Picker";
import PickerNav from "./components/PickerNav";

class App extends Component {
  constructor({ dispatch }) {
    super();
    dispatch({
      type: "car/init_aync"
    });
  }

  render() {
    return (
      <div className="albumWrapper">
        <div className="rightPart">
          <div className="titleBox">
            <h1>我是名称</h1>
            <h3>我是描述我是描述我是描述我是描述我是描述</h3>
          </div>
          <div className="cl" />
          <Picker />
          <div className="cl" />
          <PickerNav />
        </div>
      </div>
    );
  }
}

export default connect()(App);

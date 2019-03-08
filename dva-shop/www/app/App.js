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

  handlerNext = () => {
    const { dispatch } = this.props;
    dispatch({ type: "car/goNext" });
  };

  render() {
    const { color, album, index } = this.props.position;
    let path = "";
    if (color && album) {
      console.log(color, album);
      path = this.props.images[color][album][index];
    }

    return (
      <div className="albumWrapper">
        <button
          style={{ width: "200px", height: "200px", backgroundColor: "gold" }}
          onClick={this.handlerNext}
        >
          下一张
        </button>
        <img
          style={{ width: "500px", height: "500px" }}
          src={color && album ? `images/Corolla/${color}/${album}/${path}` : ""}
          alt=""
        />
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

const mapStateToProps = state => ({
  images: state.car.images,
  position: state.car.position
});

export default connect(mapStateToProps)(App);

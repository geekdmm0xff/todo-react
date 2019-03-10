import React, { Component } from "react";
import { connect } from "dva";
import classnames from "classname";

export class Picker extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="picker">
        <ul className="album">{this.showAlbum()}</ul>
        <ul className="color">{this.showColors()}</ul>
      </div>
    );
  }

  showAlbum() {
    if (!this.props.images) {
      return;
    }
    if (!this.props.position) {
      return;
    }
    const map = {
      center: "内饰",
      detail: "细节",
      view: "外观"
    };
    const { images, position } = this.props;
    const obj = images[position.color];
    let nodes = [];
    let index = 0;
    for (const key in obj) {
      // <li className="cur">内饰（8）</li>
      let node = (
        <li
          key={index++}
          className={classnames({ cur: key === position.album })}
          onClick={() => {
            this.clickAlubm(key);
          }}
        >
          {map[key]} ({obj[key].length})
        </li>
      );
      nodes.push(node);
    }
    return nodes;
  }

  showColors() {
    if (!this.props.images) {
      return;
    }
    if (!this.props.position) {
      return;
    }
    let colors = Object.keys(this.props.images);
    let curColor = this.props.position.color;
    return colors.map((item, index) => (
      <li
        key={index}
        style={{ background: item }}
        className={classnames({ cur: item === curColor })}
        onClick={() => {
          this.clickColor(item);
        }}
      />
    ));
  }

  // click
  clickAlubm(album) {
    this.props.dispatch({
      type: "car/updateAlbum",
      payload: {
        album
      }
    });
  }

  clickColor(color) {
    this.props.dispatch({
      type: "car/updateColor",
      payload: {
        color
      }
    });
  }
}
export default connect(state => ({
  images: state.car.images,
  position: state.car.position
}))(Picker);

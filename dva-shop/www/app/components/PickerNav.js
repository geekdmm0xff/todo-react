import React, { Component } from "react";
import { connect } from "dva";
import classnames from "classname";

const kMaxImages = 6;

export class PickerNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curPage: Math.floor(this.props.position.index / kMaxImages)
    };
  }

  render() {
    const {
      position: { index }
    } = this.props;
    const curpage = this.state.curPage;
    return (
      <div className="picNav">
        <div className="unit" style={{ left: curpage * -290 + "px" }}>
          {this.showPaddle()}
        </div>
        <ol>{this.showSlider()}</ol>
      </div>
    );
  }

  // UI
  showPaddle() {
    // <ul><li className="cur"><img src=""/></li></ul>
    const {
      images,
      position: { color, album, index }
    } = this.props;
    if (!images) {
      return;
    }
    let nodes = [];
    let key = 0;
    for (let i = 0; i < Math.ceil(images.length / kMaxImages); i++) {
      let node = images
        .slice(i * kMaxImages, i * kMaxImages + kMaxImages)
        .map((url, idx) => {
          return (
            <li
              key={idx}
              className={classnames({ cur: index === i * 6 + idx })}
            >
              <img src={`images/Corolla/${color}/${album}/${url}`} />
            </li>
          );
        });
      nodes.push(<ul key={key++}>{node}</ul>);
    }
    return nodes;
  }

  showSlider() {
    const {
      images,
      position: { color, album, index }
    } = this.props;
    if (!images) {
      return;
    }
    let pages = Math.ceil(images.length / kMaxImages);
    let curPage = this.state.curPage; //Math.floor(index / kMaxImages);
    return Array(pages)
      .fill()
      .map((item, index) => {
        return (
          <li
            key={index}
            style={{ width: 100 / pages + "%" }}
            className={classnames({ cur: index === curPage })}
            onClick={() => {
              this.clickSlider(index);
            }}
          />
        );
      });
  }

  // actions
  clickSlider(index) {
    this.setState({
      curPage: index
    });
  }
}

const mapStateToProps = state => ({
  images: (() => {
    const {
      images,
      position: { color, album }
    } = state.car;
    if (color && album) {
      return images[color][album];
    }
    return [];
  })(),
  position: state.car.position
});

export default connect(mapStateToProps)(PickerNav);

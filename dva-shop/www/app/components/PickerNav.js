import React, { Component } from "react";
import { connect } from "dva";
import classnames from "classname";

const kMaxImages = 6;

export class PickerNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="picNav">
        <div className="unit" ref="paddle">
          {this.showPaddle()}
        </div>
        <ol ref="slider">{this.showSlider()}</ol>
      </div>
    );
  }

  componentDidMount() {
    const paddle = $(this.refs.paddle);
    $(this.refs.slider).delegate("li", "click", function() {
      let curPage = $(this).data("page");
      $(this)
        .addClass("cur")
        .siblings()
        .removeClass("cur");
      paddle.animate({ left: curPage * -290 }, 400);
    });
  }

  componentWillUpdate(next) {
    let curPage = Math.floor(next.position.index / kMaxImages)
    $(this.refs.slider).find('li').eq(curPage).addClass('cur').siblings().removeClass('cur')
    $(this.refs.paddle).animate({ left: curPage * -290 }, 400);
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
              onClick={() => {
                this.clickImage(i * 6 + idx);
              }}
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
    let curPage = Math.floor(index / kMaxImages);
    return Array(pages)
      .fill()
      .map((item, index) => {
        return (
          <li
            key={index}
            style={{ width: 100 / pages + "%" }}
            className={classnames({ cur: index === curPage })}
            data-page={index}
          />
        );
      });
  }

  // actions
  clickSlider(index) {}

  clickImage(index) {
    this.props.dispatch({
      type: "car/updateIndex",
      payload: {
        index
      }
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

import React, { Component } from "react";
import { connect } from "dva";
import classnames from "classname";

const kMaxImages = 6;

export class PickerNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curPage: -1,
      total: -1,
    };
  }

  shouldComponentUpdate(next) {
    const total = next.images.length
    const curPage = Math.floor(this.props.position.index / kMaxImages);
    if (curPage != this.state.curPage || total != this.state.total) {
      this.setState({
        curPage,
        total
      })
      console.log('in state:', this.state, next)

      return true
    }
    console.log('out state:', this.state, next)

    return false
  }
  
  render() {
    const {
      position: { index }
    } = this.props;
    const curPage = Math.floor(this.props.position.index / kMaxImages);
    this.setState({
      curPage
    })
    return (
      <div className="picNav">
        <div className="unit" style={{ left: curPage * -290 + "px" }}>
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
    console.log('show:', images)
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
              onClick={() => { this.clickImage(idx) } }
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

  clickImage(idx) {
    let index = idx + this.state.curPage * kMaxImages
    this.props.dispatch({
      type: 'car/updateIndex',
      payload: {
        index,
      }
    })
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

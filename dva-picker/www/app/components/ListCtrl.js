import React, { Component } from "react";
import { Row, Col } from 'antd';

export class ListCtrl extends Component {
  state = {
    showMore: false,
  }

  render() {
    const { hot, all } = this.props.data
    return (
      <td className="list-ctrl">
        <Row>
          <Col span={12}>
            <div>{this.renderList(hot)}</div>
          </Col>
          <Col span={12}><a href="javascript:void(0)" onClick={this.handlerMore}>更多</a></Col>
        </Row>
        <Row>
          <Col span={12}>
            <div className="more-box" 
            style={{display: this.state.showMore ? 'block' : 'none'}} 
            >
              {this.renderMore(all)}
            </div>
          </Col>
        </Row>
      </td>
    );
  }

  /// UI
  renderList(data) {
    return data.map((item, index) => {
      return (
        <a key={index} href="javascript:void(0)">
          {item}
        </a>
      );
    });
  }

  renderMore(data) {
    return Object.keys(data).map((key, index) => {
      return (
        <dl key={index}>
          <dt>{key}</dt>
          <dd>
          {
            data[key].map((elem, index) => {
              return (
                <a key={index} href="javascript:void(0);">
                  {elem}
                </a>
              )
            })
          }
          </dd>
        </dl>
      )
    })
  }

  /// Actions
  handlerMore = () => {
    this.setState({
      showMore: !this.state.showMore
    })
  }
}

export default ListCtrl;

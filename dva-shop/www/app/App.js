import React from "react";
import { connect } from "dva";
import "./styles/less.less";
import classnames from "classname";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    let colors = ["white", "red", "yellow", "green"];
    let curColor = "yellow";
    return (
      <div className="albumWrapper">
        <div className="rightPart">
          <div className="titleBox">
            <h1>我是名称</h1>
            <h3>我是描述我是描述我是描述我是描述我是描述</h3>
          </div>
          <div className="picker">
            <ul className="album">
              <li>外观（8）</li>
              <li className="cur">内饰（8）</li>
              <li>细节（8）</li>
            </ul>
            <ul className="color">
              {colors.map((item, index) => (
                <li
                  key={index}
                  style={{ background: item }}
                  className={classnames({ cur: item === curColor })}
                />
              ))}
            </ul>
          </div>
          <div className="cl" />
          <div className="picNav">
            <ul>
              <li className="cur">
                <img src="images/Corolla/blue/center/1024x0_1_q87_autohomecar__wKjBwVkUMoaAT0nVAAdSNGZJdvc138.jpg" />
              </li>
              <li>
                <img src="images/Corolla/blue/center/1024x0_1_q87_autohomecar__wKjBwVkUMoaAT0nVAAdSNGZJdvc138.jpg" />
              </li>
              <li>
                <img src="images/Corolla/blue/center/1024x0_1_q87_autohomecar__wKjBwVkUMoaAT0nVAAdSNGZJdvc138.jpg" />
              </li>
              <li>
                <img src="images/Corolla/blue/center/1024x0_1_q87_autohomecar__wKjBwVkUMoaAT0nVAAdSNGZJdvc138.jpg" />
              </li>
              <li>
                <img src="images/Corolla/blue/center/1024x0_1_q87_autohomecar__wKjBwVkUMoaAT0nVAAdSNGZJdvc138.jpg" />
              </li>
              <li>
                <img src="images/Corolla/blue/center/1024x0_1_q87_autohomecar__wKjBwVkUMoaAT0nVAAdSNGZJdvc138.jpg" />
              </li>
            </ul>

            <ol>
              <li className="cur" style={{ width: 100 / 6 + "%" }} />
              <li style={{ width: 100 / 6 + "%" }} />
              <li style={{ width: 100 / 6 + "%" }} />
              <li style={{ width: 100 / 6 + "%" }} />
              <li style={{ width: 100 / 6 + "%" }} />
              <li style={{ width: 100 / 6 + "%" }} />
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(App);

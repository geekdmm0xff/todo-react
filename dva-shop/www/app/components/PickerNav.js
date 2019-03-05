import React, { Component } from "react";
import { connect } from "dva";
import classnames from "classname";

export class PickerNav extends Component {
  render() {
    return (
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
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(PickerNav);

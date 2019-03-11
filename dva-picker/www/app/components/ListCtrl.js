import React, { Component } from "react";

export class ListCtrl extends Component {
  render() {
    return (
      <td>
        <div className="list-ctrl">{this.renderList(this.props.data)}</div>
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
}

export default ListCtrl;

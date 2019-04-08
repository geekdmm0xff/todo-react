import React, { Component } from "react";
import { connect } from "dva";
import { Table } from "antd";

class TableCtrl extends Component {
  render() {
    const columns = [
      {
        title: "ID",
        dataIndex: "id",
        key: "id"
      },
      {
        title: "品牌",
        dataIndex: "brand",
        key: "brand"
      },
      {
        title: "颜色",
        dataIndex: "color",
        key: "color"
      }
    ];
    return <Table dataSource={this.props.list} columns={columns} />;
  }
}

const mapStateToProps = ({ picker }) => ({
  list: picker.list
});

export default connect(mapStateToProps)(TableCtrl);

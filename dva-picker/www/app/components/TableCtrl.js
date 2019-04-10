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
        title: "车系",
        dataIndex: "system.name",
        key: "system_name"
      },
      {
        title: "颜色",
        dataIndex: "color",
        key: "color"
      },
      //
      {
        title: "发动机",
        dataIndex: "engine",
        key: "engine"
      },
      {
        title: "购买日期",
        dataIndex: "buyDate",
        key: "buyDate"
      },
      {
        title: "已经行驶(千米)",
        dataIndex: "km",
        key: "km"
      },
      {
        title: "排放标准",
        dataIndex: "push",
        key: "push"
      },
      {
        title: "价格",
        dataIndex: "price",
        key: "price"
      },
      {
        title: "类型",
        dataIndex: "system.type",
        key: "system_type"
      },
      {
        title: "变速箱",
        dataIndex: "control",
        key: "control"
      },
      {
        title: "车主",
        dataIndex: "saler",
        key: "saler"
      }
    ];
    const pageConfig = {
      current: this.props.page,
      pageSize: this.props.pagesize,
      total: this.props.total
    };
    return (
      <div>
        <h3>共找到{this.props.total}条数据</h3>
        <br />
        <Table
          rowKey="id"
          dataSource={this.props.list}
          columns={columns}
          pagination={pageConfig}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ picker: { list = [], total, page, pagesize } }) => ({
  list: (function() {
    return list.map(item => {
      const date = new Date(item.buyDate);
      item.buyDate = `${date.getFullYear()}-${date.getMonth() +
        1}-${date.getDay() + 1}`;
      return item;
    });
  })(),
  page,
  total,
  pagesize
});

export default connect(mapStateToProps)(TableCtrl);

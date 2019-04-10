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
        title: "已经行驶",
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
      item.buyDate = item.buyDate.replace(
        /(\d{4})-(\d{1,2})-(\d{1,2})/g,
        (total, year, month, day) => {
          return `${year}-${parseInt(month) + 1}-${parseInt(day) + 1}`;
        }
      );
      return item;
    });
  })(),
  page,
  total,
  pagesize
});

export default connect(mapStateToProps)(TableCtrl);

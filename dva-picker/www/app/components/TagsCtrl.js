import React, { Component } from "react";
import { connect } from "dva";
import { Tag } from "antd";
import filter from "../App";

class TagsCtrl extends Component {
  render() {
    /*
    
    */
    console.log("tags:", this);
    return (
      <div>
        <label>当前：</label>
        <div>{this.renderTags(this.props.filter)}</div>
      </div>
    );
  }
  // ui
  renderTags = filter => {
    console.log("filter:", filter);
    return filter.map((item, index) => {
      const { value, tag } = item;
      return (
        <Tag
          key={index}
          closable
          onClose={event => {
            event.preventDefault();
            this.handerClose(tag);
          }}
        >
          {item.template(value, tag)}
        </Tag>
      );
    });
  };
  // actions
  handerClose = tag => {
    this.props.dispatch({ type: "picker/deleteTag", payload: { tag } });
  };
}

const mapStateToProps = state => {
  return {
    filter: state.picker.filter
  };
};

export default connect(mapStateToProps)(TagsCtrl);

import React, { Component } from "react";
import { connect } from "dva";
import { Tag } from "antd";

class TagsCtrl extends Component {
  render() {
    return (
      <div>
        <label>当前：</label>
        <div>{this.renderTags(this.props.filter)}</div>
      </div>
    );
  }
  // ui
  renderTags = filter => {
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
          {item.words}
        </Tag>
      );
    });
  };
  // actions
  handerClose = tag => {
    this.props.dispatch({ type: "picker/async_deleteTag", payload: { tag } });
  };
}

const mapStateToProps = state => {
  return {
    filter: state.picker.filter
  };
};

export default connect(mapStateToProps)(TagsCtrl);

import React, { Component } from "react";
import { connect } from "dva";
import classNames from "classnames";
import { mapParamToState } from "../helpers/HelperUtils";

class SelectCtrl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      value: props.type === "multi" ? [] : ""
    };
  }

  componentDidMount() {
    var self = this;
    $(document).click(function(event) {
      if ($(self.refs.select_ctr_box).find($(event.target)).length == 0) {
        self.setState({
          ...self.state,
          show: false
        });
      }
    });
  }

  render() {
    const {
      data: { type, title }
    } = this.props;

    const filter = this.props.filter
      .filter(item => {
        return item.tag === this.props.tag;
      })
      .pop();
    let value;
    if (filter) {
      value = filter.value;
    }

    return (
      <td className="select-ctrl" ref="select_ctr_box">
        <div className="menu-selected" onClick={this.handlerSelectedMenu}>
          {title}
        </div>
        {type === "multi"
          ? this.renderMultiMenus(value)
          : this.renderSingleMenus(value)}
      </td>
    );
  }
  // UI
  renderSingleMenus = select => {
    const {
      k,
      tag,
      updateFunc,
      data: { options }
    } = this.props;

    return (
      <dl
        className="menu-single clearfix"
        style={{ display: this.state.show ? "block" : "none" }}
      >
        {options.map((item, index) => (
          <dd className={classNames({ cur: item == select })} key={index}>
            <a
              href="javascript:void(0);"
              onClick={() => {
                updateFunc(k, item, tag, tag + ":" + item);
              }}
            >
              {item}
            </a>
          </dd>
        ))}
      </dl>
    );
  };

  renderMultiMenus = (select = []) => {
    const {
      k,
      tag,
      updateFunc,
      data: { options }
    } = this.props;

    const addTags = item => {
      select.push(item);
      updateFunc(k, select, tag, tag + ":" + select.join("或"));
    };

    const removeTag = item => {
      let value = select.filter(title => title != item);
      updateFunc(k, value, tag, tag + ":" + item);
    };
    const arr = mapParamToState(k, select);

    return (
      <dl
        className="menu clearfix"
        style={{ display: this.state.show ? "block" : "none" }}
      >
        {options.map((item, index) => (
          <dd key={index}>
            <input
              type="checkbox"
              checked={arr.includes(item)}
              onChange={event => {
                if (event.target.checked) {
                  addTags(item);
                } else {
                  removeTag(item);
                }
              }}
            />
            {item}
          </dd>
        ))}
      </dl>
    );
  };

  // Aciton
  handlerSelectedMenu = event => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };
}
export default connect(({ picker: { filter } }) => ({
  filter
}))(SelectCtrl);

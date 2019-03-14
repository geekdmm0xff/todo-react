import React, { Component } from "react";
import classNames from "classnames";
import * as templateHelper from "../models/templateHelper";

export default class SelectCtrl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.data,
      show: false
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
      data: { type, options, value, title }
    } = this.props;
    return (
      <td className="select-ctrl" ref="select_ctr_box">
        <div className="menu-selected" onClick={this.handlerSelectedMenu}>
          {title}
        </div>
        {type === "multi" ? this.renderMultiMenus() : this.renderSingleMenus()}
      </td>
    );
  }
  // UI
  renderSingleMenus = () => {
    const { k, tag, updateFunc } = this.props;
    const { type, options, value, title } = this.state;

    let pos = options.indexOf(value);
    return (
      <dl
        className="menu-single clearfix"
        style={{ display: this.state.show ? "block" : "none" }}
      >
        {options.map((item, index) => (
          <dd className={classNames({ cur: index == pos })} key={index}>
            <a
              href="javascript:void(0);"
              onClick={() => {
                this.setState(
                  {
                    ...this.state,
                    show: false,
                    value: item
                  },
                  () => {
                    console.log("over:", this.state);
                    updateFunc(k, item, tag, templateHelper.template1);
                  }
                );
              }}
            >
              {item}
            </a>
          </dd>
        ))}
      </dl>
    );
  };

  renderMultiMenus = () => {
    const { k, tag, updateFunc } = this.props;
    const { type, options, value, title } = this.state;

    const addTags = item => {
      this.setState(
        {
          ...this.state,
          value: [...this.state.value, item]
        },
        () => {
          updateFunc(k, this.state.value, tag, templateHelper.template3);
        }
      );
    };

    const removeTag = item => {
      this.setState(
        {
          ...this.state,
          value: this.state.value.filter(title => title != item)
        },
        () => {
          updateFunc(k, this.state.value, tag, templateHelper.template3);
        }
      );
    };

    return (
      <dl
        className="menu clearfix"
        style={{ display: this.state.show ? "block" : "none" }}
      >
        {options.map((item, index) => (
          <dd key={index}>
            <input
              type="checkbox"
              checked={value.includes(item)}
              onChange={e => {
                // () =>
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

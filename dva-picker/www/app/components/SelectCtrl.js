import React, { Component } from "react";
import classNames from "classnames";

export default class SelectCtrl extends Component {
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
    const {
      k,
      tag,
      updateFunc,
      data: { options }
    } = this.props;
    const { value } = this.state;

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
                    updateFunc(k, item, tag, tag + ":" + this.state.value);
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
    const {
      k,
      tag,
      updateFunc,
      data: { options }
    } = this.props;
    const { value } = this.state;

    const addTags = item => {
      this.setState(
        {
          ...this.state,
          value: [...this.state.value, item]
        },
        () => {
          updateFunc(
            k,
            this.state.value,
            tag,
            tag + ":" + this.state.value.join("或")
          );
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
          updateFunc(k, this.state.value, tag, tag + ":" + this.state.value);
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

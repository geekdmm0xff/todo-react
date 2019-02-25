import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {
  render() {
    const {title} = this.props.item
    return (
      <li>
        <input type="checkbox"/>
        <span>{title}</span>
      </li>
    )
  }
}

TodoItem.propTypes = {
    item: PropTypes.object.isRequired,
}

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
      onEdit: false,
      title: this.props.item.title,
    }
  }

  render() {
    const {title, done, id} = this.props.item
    return (
      <li>
        <input type="checkbox" checked={done} onChange={ ()=>{this.handleChecked(this.props.item)} }/>
        {
          this.state.onEdit 
          ?
          <input 
          value={this.state.title} 
          onChange={ (e)=>{this.handleInput(e)} } 
          onBlur={ ()=>{this.handleBlur(this.props.item)} }>
          </input>
          :
          <span onClick={ ()=>{this.handleDouleClick()} }>{title}</span>
        }
        
        <button onClick={ ()=>(this.handleDelete(id)) }>删除</button>
      </li>
    )
  }

  handleDelete(id) {
    this.props.deleteFunc(id)
  }

  handleChecked(item) {
    this.props.checkedFunc(item)
  }

  handleInput(e) {
    this.setState({
      ...this.state,
      title: e.target.value,
    })
  }

  handleBlur(item) {
    this.props.updatedFunc({...item, title: this.state.title})
    this.setState({
      ...this.state,
      onEdit: false,
    })
  }

  handleDouleClick() {
    this.setState({
      ...this.state,
      onEdit: true,
    })
  }
}

TodoItem.propTypes = {
    item: PropTypes.object.isRequired,
    deleteFunc: PropTypes.func.isRequired,
    checkedFunc: PropTypes.func.isRequired,
}

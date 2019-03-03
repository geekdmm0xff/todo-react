import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import * as todoActions from '../action/todoActions'

export class TodoHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
    }
  }

  render() {
    return (
      <div onKeyDown={(e) => {this.handleKeyDown(e)}}>
        <input type="text" value={this.state.title} onChange={this.handleInput.bind(this)}/>
        <button onClick={this.handleAdd.bind(this)}>增加</button>
      </div>
    )
  }

  handleInput(e) {
    this.setState({
      title: e.target.value
    })
  }

  handleAdd() {
    this.props.add(this.state.title)
    this.setState({
      title: ''
    })
  }

  handleKeyDown(e) {
    if (e.keyCode === 13) {
      this.handleAdd()
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  add(title) {
    dispatch({ type: 'ADD_TODO', title })
  }
})

export default connect(null, mapDispatchToProps)(TodoHeader)

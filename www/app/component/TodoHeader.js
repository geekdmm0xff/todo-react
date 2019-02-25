import React, { Component } from 'react'
import { connect } from 'react-redux'

export class TodoHeader extends Component {
  render() {
    return (
      <div>
        <input type="text"/>
        <button>增加</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoHeader)

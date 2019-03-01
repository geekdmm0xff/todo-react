import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoHeader from './component/TodoHeader'
import TodoBody from './component/TodoBody'
import TodoFooter from './component/TodoFooter'

export class App extends Component {

  constructor(prop) {
    super(prop)
    this.props.fetch()
  }

  render() {
    return (
      <div>
        <TodoHeader/>
        <hr/>
        <TodoBody/>
        <hr/>
        <TodoFooter/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = (dispatch) => ({ // 此处才有 dispatch
  fetch() {
    dispatch({ type: 'FETCH_TODOS' })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

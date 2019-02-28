import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TodoHeader from './component/TodoHeader'
import TodoBody from './component/TodoBody'
import TodoFooter from './component/TodoFooter'
import * as todoActions from './action/todoActions'

export class App extends Component {

  constructor(prop) {
    super(prop)
    prop.actions.fetchInit()
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

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(todoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

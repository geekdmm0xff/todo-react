import React, { Component } from 'react'
import { connect } from 'dva'
import TodoHeader from './component/TodoHeader'
import TodoBody from './component/TodoBody'
import TodoFooter from './component/TodoFooter'

export class App extends Component {

  render() {
    return (
      <div>
        <TodoHeader/>
        <TodoBody/>
        <TodoFooter/>
      </div>
    )
  }
}
export default connect()(App)
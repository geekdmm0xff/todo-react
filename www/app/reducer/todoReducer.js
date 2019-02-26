const initialState = {
  todos: [
  ],
}

export default (state = initialState, action) => {
  switch (action.type) {
  case "INIT": {
    const r = {
      ...state,
      todos: action.todos,
    }
    return r
  }
    
  case 'DELETE': {
    let todos = state.todos.filter(todo => todo.id != action.id)
    return {
      ...state,
      todos,
    }
  }
    
  case 'ADD': {
    return {
      ...state,
      todos: [...state.todos, action.todo]
    }
  }
    
  case 'UPDATE': {
    let todos = state.todos.map(todo => {
      return todo.id == action.todo.id ? action.todo : todo
    })
    return {
      ...state,
      todos,
    }
  }
    
  default:
    return state
  }
}
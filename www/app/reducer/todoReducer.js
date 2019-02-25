const initialState = {
  todos: [
  ],
  id: -1,
}

export default (state = initialState, action) => {
  switch (action.type) {
  case "INIT":
    const r = {
      ...state,
      todos: action.todos,
    }
    return r
  case 'DELETE':
    let todos = state.todos.filter(todo => todo.id != action.id)
    return {
      ...state,
      todos,
    }
  default:
    return state
  }
}
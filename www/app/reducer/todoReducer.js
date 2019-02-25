const initialState = {
  todos: [
    {name: 'jack1', done: false},
    {name: 'jack2', done: false},
    {name: 'jack3', done: true},
  ]
}

export default (state = initialState, { type, todos }) => {
  switch (type) {
  case "INIT":
    return {
      ...state,
      todos: todos,
    }
  default:
    return state
  }
}
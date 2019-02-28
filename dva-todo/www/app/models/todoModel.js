export default {
    namespace: 'todo',

    state: {
        todos: [],
    },

    reducers: {
        fetch(state, { payload: { todos } }) {
            return {
                ...state,
                todos: todos
            }
        },

        add(state, { payload: { todo } }) {
            return {
                ...state,
                todos: [
                    ...state.todos,
                    todo,
                ]
            }
            return state
        },

        delete(state, { payload: { id } }) {
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id != id)
            }
        }
    },

    effects: {
        *fetchTodos(action, { call, put }) {
            const todos = yield fetch('/todos').then(data => data.json())
            yield put({
                type: 'fetch',
                payload: {
                    todos,   
                }
            })
        },

        *addTodo({ payload: { title } }, { call, put }) {
            const todo = yield fetch('/todos', {
                headers: {
                    'content-type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({ title, done: false })
            }).then(data => data.json())
            if (todo) {
                yield put({
                    type: 'add',
                    payload: {
                        todo
                    }
                })
            }
        },

        *deleteTodo({ payload: { todo: { id, title, done }} }, { call, put }) {
            const r = yield fetch(`/todos/${id}`, {
                headers: {
                    'content-type': 'application/json'
                },
                method: 'DELETE',
            }).then(data => data.json())
            if (r) {
                yield put({
                    type: 'delete',
                    payload: {
                        id,
                    }
                })
            }
        },


    }
}
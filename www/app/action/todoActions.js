export const fetchInit = () => async (dispatch) => {
    const todos = await fetch('/todos').then(data => data.json())
    dispatch({ type: 'INIT', todos, })
}

export const postDeleteTodo = (id) => async (dispatch) => {
    const r = await fetch('/todos/' + id, { method: 'DELETE' }).then(data => data.json())
    if (r) {
        dispatch({ type: 'DELETE', id })
    }
}

export const postAddTodo = (title) => async (dispatch) => {
    const r = await fetch('/todos', {
        body: JSON.stringify({ title, done: false }),
        headers: {
            'content-type': 'application/json'
        },
        method: 'POST',
    }).then(data => data.json())
    if (r) {
        dispatch({ type: 'ADD', todo: r })
    }
}

export const postCheckedTodo = ({id, done}) => async (dispatch) => {
    const r = await fetch(`/todos/${id}`, {
        body: JSON.stringify({ done: !done }),
        headers: {
            'content-type': 'application/json'
        },
        method: 'PATCH',
    }).then(data => data.json())
    if (r) {
        dispatch({ type: 'CHECKED', todo: r })
    }
}
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
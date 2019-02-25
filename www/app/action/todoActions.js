export const fetchInit = () => async (dispatch) => {
    const todos = await fetch('/todos').then(data => data.json())
    dispatch({
        type: 'INIT',
        todos,
    })
}
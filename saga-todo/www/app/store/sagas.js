import { put, takeEvery, all } from 'redux-saga/effects'

// request
export function* fetchTodos() {
    const todos = yield fetch('/todos').then(data => data.json())
    yield put({ type: 'INIT', todos, })
}

export function* addTodo({title}) {
    const todo = yield fetch('/todos', {
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ title, done: false }),
        method: 'POST',
    }).then(data => data.json())
    console.log('todo:', todo)
    if (todo) {
        yield put({ type: 'ADD', todo })
    }
}

// listen
export function* watchAddRequest() {
    yield takeEvery('ADD_TODO', addTodo)
}

export function* watchFetchRequest() {
    yield takeEvery("FETCH_TODOS", fetchTodos);
}

// root generator
export default function* rootSaga() {
    yield all([
        watchFetchRequest(),
        watchAddRequest(),
    ])
}
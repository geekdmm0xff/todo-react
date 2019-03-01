import { put, takeEvery, all } from 'redux-saga/effects'

// request
export function* fetchTodos() {
    const todos = yield fetch('/todos').then(data => data.json())
    yield put({ type: 'INIT', todos, })
}

// listen
export function* watchFetchRequest() {
    yield takeEvery("FETCH_TODOS", fetchTodos);
}

// root generator
export default function* rootSaga() {
    yield all([
        watchFetchRequest(),
    ])
}
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga' 

import rootReducer from '../reducer/index'
import todoSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

export default createStore(
    rootReducer, 
    applyMiddleware(logger, sagaMiddleware)
)

sagaMiddleware.run(todoSaga)

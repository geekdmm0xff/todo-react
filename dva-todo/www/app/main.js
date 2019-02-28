import dva from 'dva'
import { createLogger } from 'redux-logger'
import router from './router'
import counterModel from './models/counterModel'
import todoModel from './models/todoModel'

// Initialize
const app = dva({
    onAction: createLogger(),
});

// model = reducer + action
// app.model(counterModel)
app.model(todoModel)

// config router
app.router(router)

// Start
app.start('#root');
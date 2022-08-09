import  { createStore, combineReducers, applyMiddleware } from 'redux'
import countReduser from './countReducer'
import userReduser from './userReducer'
import createSagaMiddleware from 'redux-saga'
import { rootWatcher } from '../saga'


const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    countReduser,
    userReduser
})

export const store = createStore(rootReducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootWatcher)
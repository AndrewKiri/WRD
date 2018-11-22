import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import createSagaMiddleware from 'redux-saga'
import { logger } from 'redux-logger'
import rootSaga from './sagas'

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware(rootSaga)

let middleware = composeEnhancers(applyMiddleware(logger, sagaMiddleware));

const store = createStore(reducers, middleware)

sagaMiddleware.run(rootSaga)

export default store

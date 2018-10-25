import { createStore, applyMiddleware } from 'redux';

const createStoreWithMiddleware = applyMiddleware()(createStore);

import reducers from './reducers';

const store = createStoreWithMiddleware(reducers);

export default store;
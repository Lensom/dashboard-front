import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware, { Task } from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducers, rootSagas } from './reducer';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

function makeStore() {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(rootReducers, bindMiddleware([sagaMiddleware]));

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSagas);

  return store;
}

const wrapper = makeStore();

export default wrapper;

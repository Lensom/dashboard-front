import { combineReducers } from 'redux';
import { reducer as mainReducer } from './pages/main/reducer';
import MainSaga from './pages/main/sagas';
import { all } from 'redux-saga/effects';

import { IMainReducer } from './pages/main/reducer';

export interface IReducer {
  main: IMainReducer;
}

export const rootReducers = combineReducers<IReducer>({
  main: mainReducer,
});

export const rootSagas = function* rootSaga() {
  yield all([MainSaga()]);
};

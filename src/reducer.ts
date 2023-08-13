import { combineReducers } from 'redux';
import { reducer as mainReducer, IMainReducer } from './pages/main/reducer';
import {
  reducer as modalsReducer,
  IModalsReducer,
} from './pages/modals/reducer';
import MainSaga from './pages/main/sagas';

import { all } from 'redux-saga/effects';

export interface IReducer {
  main: IMainReducer;
  modals: IModalsReducer;
}

export const rootReducers = combineReducers<IReducer>({
  main: mainReducer,
  modals: modalsReducer,
});

export const rootSagas = function* rootSaga() {
  yield all([MainSaga()]);
};

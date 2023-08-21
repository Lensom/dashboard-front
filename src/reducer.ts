import { combineReducers } from 'redux';
import { reducer as mainReducer, IMainReducer } from './pages/main/reducer';
import {
  reducer as modalsReducer,
  IModalsReducer,
} from './pages/modals/reducer';
import {
  reducer as portfolioReducer,
  IPortfolioReducer,
} from './pages/portfolio/overview/reducer';
import MainSaga from './pages/main/sagas';
import PortfolioSaga from './pages/portfolio/overview/saga';

import { all } from 'redux-saga/effects';

export interface IReducer {
  main: IMainReducer;
  modals: IModalsReducer;
  portfolio: IPortfolioReducer;
}

export const rootReducers = combineReducers<IReducer>({
  main: mainReducer,
  modals: modalsReducer,
  portfolio: portfolioReducer,
});

export const rootSagas = function* rootSaga() {
  yield all([MainSaga(), PortfolioSaga()]);
};

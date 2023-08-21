import { takeLatest, put } from 'redux-saga/effects';
import { IPortfolioReducer, actions } from './reducer';

import * as API from 'services';
import { requestMiddleware } from 'utils';
import { closeAddStockModal } from 'pages/modals/reducer';

interface IMiddleware {
  req: any;
  params: Object;
  success: any;
  error: () => void;
  postSuccessEffect?: (responseSuccess: IPortfolioReducer) => void;
  token?: string;
}

function* fetchPortfolio({ payload }: any) {
  const req = API.getPortfolio;

  const { fetchPortfolioSuccess: success, fetchPortfolioError: error } =
    actions;

  const middleware: IMiddleware = {
    req,
    params: payload,
    success,
    error,
  };

  yield requestMiddleware(middleware);
}

function* addNewStockPortfolio({ payload }: any) {
  const req = API.addNewStock;

  const {
    addStockToPortfolioSuccess: success,
    addStockToPortfolioError: error,
  } = actions;

  function* postSuccessEffect() {
    yield put(closeAddStockModal());
  }

  const middleware: IMiddleware = {
    req,
    params: payload,
    success,
    error,
    postSuccessEffect,
  };

  yield requestMiddleware(middleware);
}

function* removeStockPortfolio({ payload }: any) {
  const req = API.removeStock;

  const { removeStockSuccess: success, removeStockError: error } = actions;

  // function* postSuccessEffect() {
  //   yield put(closeAddStockModal());
  // }

  const middleware: IMiddleware = {
    req,
    params: payload,
    success,
    error,
    // postSuccessEffect,
  };

  yield requestMiddleware(middleware);
}

export default function* watchSaga() {
  yield takeLatest(actions.fetchPortfolioRequest.type, fetchPortfolio);
  yield takeLatest(
    actions.addStockToPortfolioRequest.type,
    addNewStockPortfolio
  );
  yield takeLatest(actions.removeStockRequest.type, removeStockPortfolio);
}

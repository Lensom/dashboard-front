import { takeLatest } from 'redux-saga/effects';
import { IPortfolioReducer, actions } from './reducer';

import * as API from 'services';
import { requestMiddleware } from 'utils';

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

  const middleware: IMiddleware = {
    req,
    params: payload,
    success,
    error,
  };

  yield requestMiddleware(middleware);
}

export default function* watchSaga() {
  yield takeLatest(actions.fetchPortfolioRequest.type, fetchPortfolio);
  yield takeLatest(
    actions.addStockToPortfolioRequest.type,
    addNewStockPortfolio
  );
}

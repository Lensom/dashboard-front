import { takeLatest } from 'redux-saga/effects';

import * as API from 'services';
import { requestMiddleware } from 'utils';
import { actions } from './reducer';

interface IMiddleware {
  req: any;
  params: Object;
  success: () => void;
  error: () => void;
  postSuccessEffect?: () => void;
  token?: string;
}

function* userRegistration({ payload }: any) {
  const req = API.userRegistration;

  const { registrationSuccess: success, registrationError: error } = actions;

  const middleware: IMiddleware = {
    req,
    params: payload,
    success,
    error,
  };

  yield requestMiddleware(middleware);
}

export default function* watchSaga() {
  yield takeLatest(actions.registrationRequest().type, userRegistration);
}

import { takeLatest } from 'redux-saga/effects';
import Cookies from 'js-cookie';
import { IUserInfo } from './reducer';

import * as API from 'services';
import { requestMiddleware } from 'utils';
import { actions } from './reducer';

interface IMiddleware {
  req: any;
  params: Object;
  success: any;
  error: () => void;
  postSuccessEffect?: (responseSuccess: IUserInfo) => void;
  token?: string;
}

function* postSuccessEffect(responseSuccess: IUserInfo) {
  yield Cookies.set('dashboardAccessToken', responseSuccess.token);
}

function* userRegistration({ payload }: any) {
  const req = API.userRegistration;

  const { registrationSuccess: success, registrationError: error } = actions;

  const middleware: IMiddleware = {
    req,
    params: payload,
    success,
    error,
    postSuccessEffect,
  };

  yield requestMiddleware(middleware);
}

function* userInformation({ payload }: any) {
  const req = API.userInformation;

  const { fetchUserInfoSuccess: success, fetchUserInfoError: error } = actions;

  const middleware: IMiddleware = {
    req,
    params: payload,
    success,
    error,
  };

  yield requestMiddleware(middleware);
}

export default function* watchSaga() {
  yield takeLatest(actions.registrationRequest.type, userRegistration);
  yield takeLatest(actions.fetchUserInfoRequest.type, userInformation);
}

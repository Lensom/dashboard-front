import { call, put } from 'redux-saga/effects';
// import { setRequestError } from 'ErrorPage/saga';

// TODO: CHANGE IT
interface IMiddleware {
  req: any;
  params: any;
  success: any;
  error: any;
  postSuccessEffect?: any;
  token?: any;
}

function* requestMiddleware({
  req,
  params,
  success,
  error,
  postSuccessEffect,
  token,
}: IMiddleware): Generator<any, void, any> {
  try {
    const data = yield call(req, { params, token });
    if (data.status >= 200 && data.status < 300) {
      yield put(success(data.data));

      if (postSuccessEffect) yield postSuccessEffect(data.data);
    } else {
      yield put(error(data.data));
      // yield call(setRequestError, data);
    }
  } catch (err) {
    console.log(err);
    yield put(error(err));
    // yield call(setRequestError);
  }
}

export { requestMiddleware };

import { call, put, takeLatest } from "redux-saga/effects";

import * as AuthAPI from "../requests/auth";
import { login, loginFailed, loginSuccess } from "../slices/authSlice";

function* loginSaga(action) {
  try {
    const { payload } = action;
    const loginResponse = yield call(AuthAPI.login, payload);
    yield put(loginSuccess(loginResponse));
  } catch (error) {
    yield put(loginFailed(error));
  }
}
export function* watchLoginSaga() {
  yield takeLatest(login.type, loginSaga);
}

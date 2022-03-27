import { call, put, takeLatest } from "redux-saga/effects";

import * as UserAPI from "../requests/users";

import {
  user,
  userFailed,
  userSuccess,
} from "../slices/userSlice";

function* userSaga(action) {
  try {
    const userResponse = yield call(UserAPI.getUsers);
    
    yield put(userSuccess(userResponse));
  } catch (error) {
    yield put(userFailed(error));
  }
}


export function* watchUserSaga() {
  yield takeLatest(user.type, userSaga);
}

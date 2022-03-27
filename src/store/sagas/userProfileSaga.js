import { call, put, takeLatest } from "redux-saga/effects";

import * as ProfileAPI from "../requests/profile";
import { userProfile, userProfileFailed, userProfileSuccess } from "../slices/userProfileSlice";

function* userProfileSaga(action) {
  try {
    const { payload } = action;
    const profileResponse = yield call(ProfileAPI.profile, payload);
    yield put(userProfileSuccess(profileResponse));
  } catch (error) {
    yield put(userProfileFailed(error));
  }
}
export function* watchUserProfileSaga() {
  yield takeLatest(userProfile.type, userProfileSaga);
}
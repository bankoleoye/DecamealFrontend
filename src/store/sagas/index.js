import { all, fork } from "redux-saga/effects";
import { watchLoginSaga } from "./authSaga";
import { watchMealsSaga } from "./meals";
import { watchTicketsSaga } from "./ticketsSaga";
import { watchUserSaga } from "./userSaga";
import { watchUserProfileSaga } from "./userProfileSaga";

export default function* rootSaga() {
  yield all([fork(watchUserSaga), fork(watchLoginSaga), fork(watchMealsSaga), fork(watchUserProfileSaga), fork(watchTicketsSaga)]);
}

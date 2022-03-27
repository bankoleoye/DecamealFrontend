import { call, put, takeLatest } from "redux-saga/effects";

import * as TicketsAPI from "../requests/tickets";
import { tickets, ticketsFailed, ticketsSuccess } from "../slices/ticketsSlice";

function* ticketsSaga() {
  try {
    const ticketsResponse = yield call(TicketsAPI.tickets);
    yield put(ticketsSuccess(ticketsResponse));
  } catch (error) {
    yield put(ticketsFailed(error));
  }
}
export function* watchTicketsSaga() {
  yield takeLatest(tickets.type, ticketsSaga);
}

import { call, put, takeLatest } from "redux-saga/effects";

import * as MealsAPI from "../requests/meals";
import { meals, mealsFailed, mealsSuccess } from "../slices/meals";

function* mealsSaga() {
  try {
    const mealsResponse = yield call(MealsAPI.meals);
    yield put(mealsSuccess(mealsResponse));
  } catch (error) {
    yield put(mealsFailed(error));
  }
}
export function* watchMealsSaga() {
  yield takeLatest(meals.type, mealsSaga);
}

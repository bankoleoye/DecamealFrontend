import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas";
import users from "./slices/userSlice";
import auth from "./slices/authSlice";
import meals from "./slices/meals";
import userProfile from "./slices/userProfileSlice";
import tickets from "./slices/ticketsSlice";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  users,
  auth,
  meals,
  userProfile,
  tickets,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch =  store.dispatch;

export default store;

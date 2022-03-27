import { createSlice } from "@reduxjs/toolkit";
import { saveUserToken, getSavedUserToken, saveUserId } from "../../utils";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    loading: false,
    errors: null,
    data: [],
    token: getSavedUserToken(),
    isFetchingUser: false,
    userError: null,
    userData: [],
  },

  reducers: {
    login(state, action) {
      return {
        ...state,
        loading: true,
      };
    },

    loginSuccess(state, action) {
      saveUserToken(action.payload.token);
      saveUserId(JSON.stringify(action.payload.user))
      return {
        ...state,
        loading: false,
        data: action.payload.token,
        token: action.payload.token,
        errors: null,
        userData: action.payload.user,
        message: "Successfully Login",
      };
    },

    loginFailed(state, action) {
      return {
        ...state,
        loading: false,
        errors: action.payload,
        data: [],
        token: null,
        message: "Login failed, invalid credentials",
      };
    },
    clearMsg(state) {
      return {
        ...state,
        errors: null,
        message: "",
      };
    },
  },
});

export const { login, loginSuccess, loginFailed, clearMsg } = authSlice.actions;

export default authSlice.reducer;

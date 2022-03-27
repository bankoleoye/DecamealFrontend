import { createSlice } from "@reduxjs/toolkit";
import { getSavedUserToken } from "../../utils";

const userProfileSlice = createSlice({
  name: "userProfile",

  initialState: {
    loading: false,
    errors: null,
    data: [],
    token: getSavedUserToken(),
  },

  reducers: {
    userProfile(state) {
      return {
        ...state,
        loading: true,
      };
    },

    userProfileSuccess(state, action) {
      return {
        ...state,
        loading: false,
        data: action.payload,
        errors: null,
      };
    },
    
    userProfileFailed(state, action) {
      return {
        ...state,
        loading: false,
        errors: action.payload,
        data: [],
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

export const { userProfile, userProfileSuccess, userProfileFailed, clearMsg } =
  userProfileSlice.actions;

export default userProfileSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { saveUserId, getSavedUserId } from "../../utils";

const userSlice = createSlice({
  name: "user",

  initialState: {
    loading: false,
    errors: null,
    data: [],
    id: getSavedUserId(),
  },

  reducers: {
    user(state) {
      return {
        ...state,
        loading: true,
      };
    },

    userSuccess(state, action) {
      saveUserId(action.payload[0]["id"]);
      return {
        ...state,
        loading: false,
        data: action.payload,
        errors: null,
      };
    },
    
    userFailed(state, action) {
      return {
        ...state,
        loading: false,
        errors: action.payload,
        data: [],
      };
    },
  },
});

export const { user, userSuccess, userFailed } =
  userSlice.actions;

export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const mealsSlice = createSlice({
  name: "meals",

  initialState: {
    loading: false,
    errors: null,
    data: [],
  },

  reducers: {
    meals(state) {
      return {
        ...state,
        loading: true,
      };
    },

    mealsSuccess(state, action) {
      return {
        ...state,
        loading: false,
        data: action.payload,
        errors: null,
      };
    },
    
    mealsFailed(state, action) {
      return {
        ...state,
        loading: false,
        errors: action.payload,
        data: [],
      };
    },
  },
});

export const { meals, mealsSuccess, mealsFailed } =
  mealsSlice.actions;

export default mealsSlice.reducer;

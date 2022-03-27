import { createSlice } from "@reduxjs/toolkit";

const ticketsSlice = createSlice({
  name: "tickets",

  initialState: {
    loading: false,
    errors: null,
    data: [],
  },

  reducers: {
    tickets(state) {
      return {
        ...state,
        loading: true,
      };
    },

    ticketsSuccess(state, action) {
      return {
        ...state,
        loading: false,
        data: action.payload,
        errors: null,
      };
    },

    ticketsFailed(state, action) {
      return {
        ...state,
        loading: false,
        errors: action.payload,
        data: [],
      };
    },
  },
});

export const { tickets, ticketsSuccess, ticketsFailed } = ticketsSlice.actions;

export default ticketsSlice.reducer;
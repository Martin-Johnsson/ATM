import { createSlice } from "@reduxjs/toolkit";

const atmSlice = createSlice({
  name: "atm",
  initialState: {
    showAtm: false,
    balance: 1000,
  },
  reducers: {
    toggleAtm: (state) => {
      state.showAtm = !state.showAtm;
    },
    withdrawnValue: (state, action) => ({
      ...state,
      balance: state.balance - action.payload,
    }),
    depositedValue: (state, action) => ({
      ...state,
      balance: state.balance + action.payload,
    }),
  },
});
export const { toggleAtm, withdrawnValue, depositedValue } = atmSlice.actions;

export default atmSlice.reducer;

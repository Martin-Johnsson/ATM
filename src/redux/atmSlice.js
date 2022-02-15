import { createSlice } from "@reduxjs/toolkit";

const atmSlice = createSlice({
  name: "atm",
  initialState: {
    showAtm: false,
    defaultMoney: 1000,
  },
  reducers: {
    toggleAtm: (state) => {
      state.showAtm = !state.showAtm;
    },
    withdrawByValue: (state, action) => {
      state.defaultMoney -= action.payload;
    },
    withdrawByOneHundred: (state) => {
      state.defaultMoney -= 100;
    },
    withdrawByTwoHundred: (state) => {
      state.defaultMoney -= 200;
    },
    withdrawByFiveHundred: (state) => {
      state.defaultMoney -= 500;
    },
    withdrawByOneThousand: (state) => {
      state.defaultMoney -= 1000;
    },
    depositByValue: (state, action) => {
      state.defaultMoney += action.payload;
    },
    depositByOneHundred: (state) => {
      state.defaultMoney += 100;
    },
    depositByTwoHundred: (state) => {
      state.defaultMoney += 200;
    },
    depositByFiveHundred: (state) => {
      state.defaultMoney += 500;
    },
    depositByOneThousand: (state) => {
      state.defaultMoney += 1000;
    },
  },
});

export const {
  toggleAtm,
  withdrawByValue,
  withdrawByOneHundred,
  withdrawByTwoHundred,
  withdrawByFiveHundred,
  withdrawByOneThousand,
  depositByValue,
  depositByOneHundred,
  depositByTwoHundred,
  depositByFiveHundred,
  depositByOneThousand,
} = atmSlice.actions;

export default atmSlice.reducer;

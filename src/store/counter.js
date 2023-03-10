import { createSlice } from "@reduxjs/toolkit";

const initialCounterSlice = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterSlice,
  reducers: {
    increment(state, action) {
      state.counter += action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;

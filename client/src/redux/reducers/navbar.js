import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "navbar",
  initialState: false,
  reducers: {
    setBtnVisibilityTrue: (state) => (state = true),
    setBtnVisibilityFalse: (state) => (state = false),
  },
});

export const { setBtnVisibilityTrue, setBtnVisibilityFalse } =
  counterSlice.actions;

export default counterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

interface resetPasswordState {
  isGetOTP: boolean;
}

const initialState: resetPasswordState = {
  isGetOTP: false,
};

const resetPasswordSlice = createSlice({
  name: "resetPasswordSlice",
  initialState,
  reducers: {
    toggleGetOTP: (state) => {
      state.isGetOTP = !state.isGetOTP;
    },
  },
});

export default resetPasswordSlice.reducer;
export const { toggleGetOTP } = resetPasswordSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

interface authSelectionState {
  isSignIn: boolean;
}

const initialState: authSelectionState = {
  isSignIn: false,
};

const authSelectionSlice = createSlice({
  name: "authSelection",
  initialState,
  reducers: {
    toggleAuthSelection: (state) => {
      state.isSignIn = !state.isSignIn;
    },
  },
});

export default authSelectionSlice.reducer;
export const { toggleAuthSelection } = authSelectionSlice.actions;

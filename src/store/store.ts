import { configureStore } from "@reduxjs/toolkit";
import authSelectionSlice from "./slices/authSelectionSlice";
import resetPasswordSlice from "./slices/resetPasswordSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    authSelection: authSelectionSlice,
    resetPassword: resetPasswordSlice,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
export default store;

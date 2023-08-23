import { useAppDispatch } from "../store/store";
import { toggleAuthSelection } from "../store/slices/authSelectionSlice";
const dispatch = useAppDispatch();
export const toggleAuthSelectionFunction = () => {
  dispatch(toggleAuthSelection());
};

import { useAppDispatch } from '../store/store';
import { toggleAuthSelection } from '../store/slices/authenticationSlice';
const dispatch = useAppDispatch();
export const toggleAuthSelectionFunction = () => {
    dispatch(toggleAuthSelection());
};

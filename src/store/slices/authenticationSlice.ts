import { createSlice } from '@reduxjs/toolkit';

// const isLoggedIn = localStorage.getItem('isLoggedIn')

// const storageIsLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));

// const setLoggedInFnc = (storageIsLoggedIn) => {
//   localStorage.setItem("isLoggedIn", JSON.stringify(storageIsLoggedIn))
// }

interface authSelectionState {
    isSignIn: boolean;
    isLoggedIn: boolean;
    authToken: string;
}

const initialState: authSelectionState = {
    isSignIn: false,
    isLoggedIn: false,
    authToken: ''
};

const authentication = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        toggleAuthSelection: (state) => {
            state.isSignIn = !state.isSignIn;
        },
        toggleLoggedIn: (state) => {
            state.isLoggedIn = !state.isLoggedIn;
            // localStorage.setItem('isLoggedIn', !state.isLoggedIn);
        },
        setAuthToken: (state, action) => {
            state.authToken = action.payload;
        }
    }
});

export default authentication.reducer;
export const { toggleAuthSelection, toggleLoggedIn, setAuthToken } = authentication.actions;

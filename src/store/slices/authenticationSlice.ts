import { createSlice } from '@reduxjs/toolkit';

const accessToken = localStorage.getItem('accessToken') !== null ? JSON.parse(localStorage?.getItem('accessToken') as string) : null;
const refreshToken = localStorage.getItem('refreshToken') !== null ? JSON.parse(localStorage?.getItem('refreshToken') as string) : null;
const isLoggedIn = localStorage.getItem('isLoggedIn') !== null ? JSON.parse(localStorage.getItem('isLoggedIn') as string) : false;
const isSignIn = localStorage.getItem('isSignIn') !== null ? JSON.parse(localStorage?.getItem('isSignIn') as string) : false;
interface authSelectionState {
    isSignIn: boolean;
    isLoggedIn: boolean;
    accessToken: string | null;
    refreshToken: string | null;
}

const initialState: authSelectionState = {
    isSignIn: isSignIn,
    isLoggedIn: isLoggedIn,
    accessToken: accessToken,
    refreshToken: refreshToken
};

const authentication = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        toggleAuthSelection: (state) => {
            state.isSignIn = !state.isSignIn;
            localStorage.setItem('isSignIn', JSON.stringify(state.isSignIn));
        },
        toggleLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
            localStorage.setItem('isLoggedIn', JSON.stringify(state.isLoggedIn));
        },
        setAuthenticationTokens: (state, action) => {
            localStorage.setItem('accessToken', JSON.stringify(action.payload.accessToken));
            localStorage.setItem('refreshToken', JSON.stringify(action.payload.refreshToken));
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        }
    }
});

export default authentication.reducer;
export const { toggleAuthSelection, toggleLoggedIn, setAuthenticationTokens } = authentication.actions;

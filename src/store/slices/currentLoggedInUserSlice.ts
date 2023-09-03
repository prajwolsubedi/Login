import { createSlice } from '@reduxjs/toolkit';

const currentUserId = localStorage.getItem('currentUserId') !== null ? JSON.parse(localStorage.getItem('currentUserId') as string) : null;
const currentUserName = localStorage.getItem('currentUserName') !== null ? JSON.parse(localStorage.getItem('currentUserName') as string) : null;
const currentUserEmail = localStorage.getItem('currentUserEmail') !== null ? JSON.parse(localStorage.getItem('currentUserEmail') as string) : null;
const currentUserPhoneNumber = localStorage.getItem('currentUserPhoneNumber') !== null ? JSON.parse(localStorage.getItem('currentUserPhoneNumber') as string) : null;

interface currentUserValuesType {
    id: number | null;
    email: string | null;
    name: string | null;
    phoneNumber: string | null;
}

interface currentUserPropsType {
    userInfo: currentUserValuesType;
}

type setUserPayloadType = {
    id: number | null;
    email: string | null;
    name: string | null;
    phoneNumber: string | null;
    password?: string | null;
};

const initialState: currentUserPropsType = {
    userInfo: {
        id: currentUserId,
        email: currentUserEmail,
        name: currentUserName,
        phoneNumber: currentUserPhoneNumber
    }
};

const currentLoggedInUserSlice = createSlice({
    name: 'currentLoggedInUserSlice',
    initialState,
    reducers: {
        setCurrentUser: (state, action: { payload: setUserPayloadType }) => {
            state.userInfo.id = action.payload.id;
            state.userInfo.email = action.payload.email;
            state.userInfo.name = action.payload.name;
            state.userInfo.phoneNumber = action.payload.phoneNumber;
            localStorage.setItem('currentUserId', JSON.stringify(state.userInfo.id));
            localStorage.setItem('currentUserName', JSON.stringify(state.userInfo.name));
            localStorage.setItem('currentUserEmail', JSON.stringify(state.userInfo.email));
            localStorage.setItem('currentUserPhoneNumber', JSON.stringify(state.userInfo.phoneNumber));
        }
    }
});

export default currentLoggedInUserSlice.reducer;
export const { setCurrentUser } = currentLoggedInUserSlice.actions;

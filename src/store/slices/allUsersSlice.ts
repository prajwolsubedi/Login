import { createSlice } from "@reduxjs/toolkit"
import { AllUsersType } from "../../interface/interface"


interface GetAllUserState {
    allUsers: [] | AllUsersType[]
}

const initialState: GetAllUserState = {
    allUsers: []
}

const alllUsersSlice = createSlice({
    name: 'alllUsers',
    initialState,
    reducers: {
        setAllUsers  : (state, action) => {
            state.allUsers = action.payload
        }
    }
})

export default alllUsersSlice.reducer
export const  {setAllUsers} = alllUsersSlice.actions
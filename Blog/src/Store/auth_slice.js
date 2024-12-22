import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    initiale_state: false,
    userData: null
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login : (state,action) => {
            state.initiale_state = true
            state.userData = action.payload.userData
        },
        logout: (state) => {
            state.initiale_state = false;
            state.userData = null;
        }
    }


})

export const { login , logout } = authSlice.actions

export default authSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    status: "offline",
    isLogged: false,
    error: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = { ...action.payload };
            state.isLogged = true;
            state.status = "online";
        },
        logOut: (state) => {
            state.user = {};
            state.isLogged = false;
            state.status = "offline";
        },
    },
});

export const { login, logOut } = userSlice.actions;

export default userSlice.reducer;

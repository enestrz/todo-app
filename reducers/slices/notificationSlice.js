import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
    items: [],
};

export const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        addNotification: (state, action) => {
            state.items.push(action.payload);
        },
        removeNotification: (state, action) => {
            if (state.items.length !== 0) {
                // console.log(state.items[0], action.payload);
                const newItems = state.items.filter(
                    (_, index) => index !== action.payload
                );

                state.items = newItems;
            }
        },
    },
});

export const { addNotification, removeNotification } =
    notificationSlice.actions;
export default notificationSlice.reducer;

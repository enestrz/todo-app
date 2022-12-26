import { configureStore } from "@reduxjs/toolkit";
import notesSlice from "./slices/notesSlice";
import sidebarReducer from "./slices/sidebarSlice";
import notificationSlice from "./slices/notificationSlice";

const store = configureStore({
    reducer: {
        // Add your reducers here
        sidebar: sidebarReducer,
        notes: notesSlice,
        notification: notificationSlice,
    },
});
// Hello world
export default store;

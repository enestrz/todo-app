import { configureStore } from "@reduxjs/toolkit";
import notesSlice from "./slices/notesSlice";
import sidebarReducer from "./slices/sidebarSlice";

const store = configureStore({
    reducer: {
        // Add your reducers here
        sidebar: sidebarReducer,
        notes: notesSlice,
    },
});
// Hello world
export default store;

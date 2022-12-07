import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebarSlice";

const store = configureStore({
    reducer: {
        // Add your reducers here
        sidebar: sidebarReducer,
    },
});
// Hello world
export default store;

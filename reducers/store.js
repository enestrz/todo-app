import { configureStore } from "@reduxjs/toolkit";
import notesSlice from "./slices/notesSlice";
import sidebarReducer from "./slices/sidebarSlice";
import notificationSlice from "./slices/notificationSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
    reducer: {
        // Add your reducers here
        sidebar: sidebarReducer,
        notes: notesSlice,
        notification: notificationSlice,
        user: userSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
});

export default store;

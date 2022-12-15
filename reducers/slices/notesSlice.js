import { createSlice } from "@reduxjs/toolkit";
import { noteList } from "../sampleData";

const initialState = {
    todos: noteList,
};

export const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        addNewTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        deleteTodo: (state, action) => {
            const newTodos = state.todos.filter(
                (item) => item.id !== action.payload
            );
            state.todos = newTodos;
        },
    },
});

export const { addNewTodo, deleteTodo } = notesSlice.actions;
export default notesSlice.reducer;

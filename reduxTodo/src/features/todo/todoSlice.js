import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "hello" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };

      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// export individual functionality of reducer for use in the component
export const { addTodo, removeTodo } = todoSlice.actions;

//  export all reducer for store to maintain state and update the state using the reducer
export default todoSlice.reducer;

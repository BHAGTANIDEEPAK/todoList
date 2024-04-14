import { createSlice, nanoid } from '@reduxjs/toolkit';

// Function to load state from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('todos');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Function to save state to local storage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('todos', serializedState);
  } catch {
    // ignore write errors
  }
};

const initialState = loadState() || {
  todos: [{ id: 1, text: "This is the demo task ", completed: false }]
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const text = action.payload.trim();
      if(text!==''){
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(todo);
      saveState(state); // Save state to local storage
    }
    else{
        alert("Oops! Your Task is Empty!")
    }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      saveState(state); // Save state to local storage
      
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        saveState(state); // Save state to local storage
      }
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
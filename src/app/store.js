import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';
import {persistReducer } from 'redux-persist';


export const store = configureStore({
    reducer: todoReducer
})
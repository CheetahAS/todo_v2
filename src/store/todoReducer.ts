import { ITodo, Todos } from '../types/types';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';

interface TodosState {
    todos: Todos
    count: number
}

const initialState:TodosState = {
    todos: [],
    count: 0,
}

export const todosSlice = createSlice({ 
    name: 'todos', 
    initialState, 
    reducers: {
        addTodo(state, action: PayloadAction<ITodo>) { 
            state.todos = [...state.todos,  action.payload]
        },
        deleteTodo(state, action: PayloadAction<ITodo>) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id) 
        },
        incrementCounter(state) {
            state.count += 1
        },
        decrementCounter(state) {
            state.count -= 1
        },
    },
})

export default todosSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Todo{
    id: number,
    todo: String,
    completed: Boolean
}

export interface TodoState{
    todos: Todo[]
}

const initialState: TodoState = {
    todos: [
        {
            id: 0,
            todo: 'Visit the website: erikaax.com',
            completed: false
        },
        {
            id: 1,
            todo: 'Follow @ErikaAX08 on GitHub',
            completed: false
        },
        {
            id: 2,
            todo: 'Follow @ErikaAX08 on Twitter',
            completed: false
        },
        {
            id: 3,
            todo: 'Follow @erikaax08 on Instagram',
            completed: false
        },
        {
            id: 4,
            todo: 'Take the country quiz challenge',
            completed: false
        },
        {
            id: 5,
            todo: 'Complete the random quote generator challenge',
            completed: true
        }
    ]
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers:{
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.todos.push(action.payload)
        },
        deleteTodo: (state, action: PayloadAction<Todo>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
        },
        deleteAllTodos: (state) => {
            state.todos = state.todos.filter((todo) => todo.completed === false);
        },
        setCompletedTodo: (state, action: PayloadAction<Todo>) => {
            state.todos.map((todo) => {
                if (todo.id === action.payload.id) {    
                    todo.completed = action.payload.completed;
                }
            });
        }
    }
});

export const { addTodo, deleteTodo, deleteAllTodos, setCompletedTodo } = todoSlice.actions;
export default todoSlice.reducer;
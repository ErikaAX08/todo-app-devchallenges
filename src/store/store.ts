import { configureStore } from '@reduxjs/toolkit';
import tabReducer from './slices/tabSlice';
import todoSlice from './slices/todoSlice';

export const store = configureStore({
    reducer: {
        tab: tabReducer,
        todos: todoSlice
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
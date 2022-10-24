import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface TabState{
    tab: number
}

const initialState: TabState = {
    tab: 0,
}

export const tabSlice = createSlice({
    name: 'tab',
    initialState,
    reducers:{
        setTab: (state, action: PayloadAction<number>) => {
            state.tab = action.payload
        }
    }
});

export const { setTab } = tabSlice.actions;
export default tabSlice.reducer;
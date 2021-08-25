import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: InitialStateType = {
    screen: ''
};

const slice = createSlice({
    name: 'contentReducer',
    initialState: initialState,
    reducers: {
        setLocationAC(state: InitialStateType, action: PayloadAction<{ screen: string }>) {
            state.screen = action.payload.screen;
        }
    }
});
export const contentReducer = slice.reducer;
export const {setLocationAC} = slice.actions;


//types
type InitialStateType = {
    screen: string
}

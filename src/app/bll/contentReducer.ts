import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: InitialStateType = {
    location: ''
};

const slice = createSlice({
    name: 'contentReducer',
    initialState: initialState,
    reducers: {
        setLocationAC(state: InitialStateType, action: PayloadAction<{ location: string }>) {
            state.location = action.payload.location;
        }
    }
});
export const contentReducer = slice.reducer;
export const { setLocationAC } = slice.actions;


//types
type InitialStateType = {
    location: string
}

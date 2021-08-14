import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: InitialStateType = {
    loginName: ''
};

// const setSenderName = createAction<string>('chat/SET_SENDER-NAME');
// createReducer(builder => builder.addCase(setSenderName, (state, action) => {state.senderName = action.payload}));
// setSenderName.type
const slice = createSlice({
    name: 'loginName',
    initialState: initialState,
    reducers: {
        setLoginNameAC(state: InitialStateType, action: PayloadAction<{ loginName: string }>) {
            state.loginName = action.payload.loginName;
        }
    }
});
export const loginNameReducer = slice.reducer;
export const { setLoginNameAC } = slice.actions;

//types
type InitialStateType = {
    loginName: string
}




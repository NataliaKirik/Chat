import { Dispatch } from 'redux';
import { chatAPI, ChatUserDataType } from '../../../api/api';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: InitialStateType = {
    data: []
};

const slice = createSlice({
    name: 'chatMessages',
    initialState: initialState,
    reducers: {
        setChatMessageDataAC(state: InitialStateType, action: PayloadAction<{ arrayUsersData: ChatUserDataType[] }>) {
            state.data = action.payload.arrayUsersData;
        }
    }
});
export const chatMessageDataReducer = slice.reducer;
const { setChatMessageDataAC } = slice.actions;


// thunk
export const getChatMessageDataTC = () => (dispatch: Dispatch) => {
    chatAPI.getChatUserData()
        .then(res => {
            dispatch(setChatMessageDataAC({ arrayUsersData: res }));
        })
        .catch(e => {
            console.log('error: ', e);
        });
};


//types
type InitialStateType = {
    data: ChatUserDataType[]
}

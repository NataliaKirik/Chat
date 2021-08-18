import {Dispatch} from 'redux';
import {chatAPI, ChatDataType} from '../../../api/api';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: InitialStateType = {
    data: []
};

const slice = createSlice({
    name: 'chatMessages',
    initialState: initialState,
    reducers: {
        setChatDataAC(state: InitialStateType, action: PayloadAction<{ arrayUsersData: ChatDataType[] }>) {
            state.data = action.payload.arrayUsersData;
        }
    }
});
export const chatReducer = slice.reducer;
const {setChatDataAC} = slice.actions;


// thunk
export const getChatDataTC = (forumId: number) => (dispatch: Dispatch) => {
    chatAPI.getChatUserData(forumId)
        .then(res => {
            dispatch(setChatDataAC({arrayUsersData: res}));
        })
        .catch(e => console.log(e));
};

export const addChatData = (forumId: number, receiverName: string, message: string) => {
    chatAPI.addChatUserData(forumId, receiverName, message).catch(e => console.log(e))
};


//types
type InitialStateType = {
    data: ChatDataType[]
}

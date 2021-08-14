import { Dispatch } from 'redux';
import { chatAPI, ChatDataType } from '../../../api/api';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
export const chatMessageDataReducer = slice.reducer;
const { setChatDataAC } = slice.actions;


// thunk
export const getChatDataTC = (username: string, forumID: number) => (dispatch: Dispatch) => {
    chatAPI.getChatUserData(username, forumID)
        .then(res => {
            dispatch(setChatDataAC({ arrayUsersData: res }));
        })
        .catch(e => {
            console.log('error: ', e);
        });
};

export const addChatData = (forumId: number, receiverName: string, message: string, username: string) => {
    chatAPI.addChatUserData(forumId, receiverName, message, username)
        .then(res => {
            return console.log(res);
        })
        .catch(e => {
            return console.log(e);
        });
};


//types
type InitialStateType = {
    data: ChatDataType[]
}

import { Dispatch } from 'redux';
import { commonAPI } from '../../../api/api';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: InitialStateType = {
    senderName: ''
};

// const setSenderName = createAction<string>('chat/SET_SENDER-NAME');
// createReducer(builder => builder.addCase(setSenderName, (state, action) => {state.senderName = action.payload}));
// setSenderName.type
const slice = createSlice({
    name: 'chatUserName',
    initialState: initialState,
    reducers: {
        setSenderNameAC(state: InitialStateType, action: PayloadAction<{ senderName: string }>) {
            state.senderName = action.payload.senderName;
        }
    }
});
export const chatUserNameReducer = slice.reducer;
export const { setSenderNameAC } = slice.actions;

// thunk
export const addChatUserDataTC = (senderName: string, message: string) => (dispatch: Dispatch) => {
    commonAPI.addChatUserData(senderName, message)
        .then(res => {
            dispatch(setSenderNameAC({ senderName: res.data.senderName }));
        })
        .catch(e => {
            console.log('error: ', e);
        });
};


//types
type InitialStateType = {
    senderName: string
}




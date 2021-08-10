import {Dispatch} from 'redux';
import {commonAPI} from '../../../api/api';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

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
export const {setLoginNameAC} = slice.actions;

// thunk
export const addChatUserDataTC = (loginName: string, message: string) => (dispatch: Dispatch) => {
    commonAPI.addChatUserData(loginName, message)
        .then(res => {
            dispatch(setLoginNameAC({loginName: res.data.loginName}));
        })
        .catch(e => {
            console.log('error: ', e);
        });
};


//types
type InitialStateType = {
    loginName: string
}




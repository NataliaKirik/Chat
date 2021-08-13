import { Dispatch } from 'redux';
import { forumAPI, ForumUserDataType } from '../../../api/api';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: InitialStateType = {
    data: []
};

const slice = createSlice({
    name: 'forum',
    initialState: initialState,
    reducers: {
        setForumDataAC(state: InitialStateType, action: PayloadAction<{ arrayUsersData: ForumUserDataType[] }>) {
            state.data = action.payload.arrayUsersData;
        }
    }
});
export const forumReducer = slice.reducer;
const { setForumDataAC } = slice.actions;

// thunk
export const getForumAllDataTC = (username: string) => (dispatch: Dispatch) => {
    forumAPI.getForumAllData(username)
        .then(res => {
            dispatch(setForumDataAC({ arrayUsersData: res }));
        })
        .catch(e => {
            console.log(e);
        });
};

//types
type InitialStateType = {
    data: ForumUserDataType[]
}

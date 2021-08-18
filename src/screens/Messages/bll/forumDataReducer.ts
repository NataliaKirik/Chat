import { Dispatch } from 'redux';
import { forumAPI, ForumDataType } from '../../../api/api';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: InitialStateType = {
    data: []
};

const slice = createSlice({
    name: 'forum',
    initialState: initialState,
    reducers: {
        setForumDataAC(state: InitialStateType, action: PayloadAction<{ arrayUsersData: ForumDataType[] }>) {
            state.data = action.payload.arrayUsersData;
        },
        likeAC(state: InitialStateType, action: PayloadAction<{ user: ForumDataType }>) {
            state.data.map((u) => {
                u.id === action.payload.user.id ? u.like = action.payload.user.like : u;
            });
        }
    }
});
export const forumReducer = slice.reducer;
const { setForumDataAC } = slice.actions;
const { likeAC } = slice.actions;

// thunk
export const getForumAllDataTC = (username: string) => (dispatch: Dispatch) => {
    forumAPI.getForumAllData(username)
        .then(res => {
            dispatch(setForumDataAC({ arrayUsersData: res }));
        })
        .catch(e => console.log(e));
};
export const likeTC = (username: string, id: number) => (dispatch: Dispatch) => {
    forumAPI.like(username, id)
        .then(res => {
            dispatch(likeAC({ user: res }));
        })
        .catch(e => console.log(e));
};
export const dislikeTC = (username: string, id: number) => (dispatch: Dispatch) => {
    forumAPI.unLike(username, id)
        .then(res => {
            dispatch(likeAC({ user: res }));
        })
        .catch(e => console.log(e));
};


//types
type InitialStateType = {
    data: ForumDataType[]
}

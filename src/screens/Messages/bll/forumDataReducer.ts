import {Dispatch} from 'redux';
import {forumAPI, ForumDataType} from '../../../api/api';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: InitialStateType = {
    data: []
};


// const setSenderName = createAction<string>('chat/SET_SENDER-NAME');
// createReducer(builder => builder.addCase(setSenderName, (state, action) => {state.senderName = action.payload}));
// setSenderName.type

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
const {setForumDataAC} = slice.actions;
const {likeAC} = slice.actions;

// thunk
export const getForumAllDataTC = () => (dispatch: Dispatch) => {
    forumAPI.getForumAllData()
        .then(res => {
            dispatch(setForumDataAC({arrayUsersData: res}));
        })
        .catch(e => console.log(e));
};
export const likeTC = (id: number) => (dispatch: Dispatch) => {
    forumAPI.like(id)
        .then(res => {
            dispatch(likeAC({user: res}));
        })
        .catch(e => console.log(e));
};
export const dislikeTC = (id: number) => (dispatch: Dispatch) => {
    forumAPI.unLike(id)
        .then(res => {
            dispatch(likeAC({user: res}));
        })
        .catch(e => console.log(e));
};


//types
type InitialStateType = {
    data: ForumDataType[]
}

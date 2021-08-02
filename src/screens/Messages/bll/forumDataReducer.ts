import {Dispatch} from "redux";
import {commonAPI, ForumAllDataResponseType} from "../../../api/api";

const initialState = {
    data: []
}

export const forumReducer = (state: InitialStateType = initialState, action: setForumDataACType): InitialStateType => {
    switch (action.type) {
        case 'forum/SET_DATA':
            return {...state, ...action.arrayUsersData}
        default:
            return state
    }
};

//actions
export const setForumDataAC = (arrayUsersData: any) => ({
    type: 'forum/SET_DATA',
    arrayUsersData
} as const)


// thunk
export const getForumAllDataTC = () => (dispatch: Dispatch) => {
    commonAPI.getForumAllData()
        .then(res => {
            dispatch(setForumDataAC(res))
        })
        .catch(e => {
            console.log('error: ', e)
        })
}


//types
type InitialStateType = typeof initialState
export type setForumDataACType = ReturnType<typeof setForumDataAC>


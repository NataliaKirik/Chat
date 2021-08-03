import {Dispatch} from "redux";
import {commonAPI, ForumUserDataType} from "../../../api/api";

const initialState: InitialStateType = {
    data: []
}

export const forumReducer = (state: InitialStateType = initialState, action: setForumDataACType): InitialStateType => {
    switch (action.type) {
        case 'forum/SET_DATA':
            return {...state, data: action.arrayUsersData}
        default:
            return state
    }
};

//actions
export const setForumDataAC = (arrayUsersData: ForumUserDataType[]) => ({
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
type InitialStateType = {
    data: ForumUserDataType[]
}
export type setForumDataACType = ReturnType<typeof setForumDataAC>


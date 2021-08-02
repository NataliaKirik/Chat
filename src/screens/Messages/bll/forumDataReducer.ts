import {Dispatch} from "redux";
import {commonAPI} from "../../../api/api";

const initialState = {
    data: []
}

export const forumReducer = (state: InitialStateType = initialState, action: setForumDataACType): InitialStateType => {
    switch (action.type) {
        case 'forum/SET_DATA':
            return {...state, ...action.data}
        default:
            return state
    }
};

//actions
export const setForumDataAC = (data: any) => ({type: 'forum/SET_DATA', data} as const)


// thunk
export const getForumAllDataTC = () => (dispatch: Dispatch) => {
    commonAPI.getForumAllData()
        .then(res => {
            dispatch(setForumDataAC(res))
        })
        .catch(e => {
            console.log(e)
        })
}


//types
type InitialStateType = typeof initialState
export type setForumDataACType = ReturnType<typeof setForumDataAC>

import {Dispatch} from "redux";
import {commonAPI} from "../../../api/api";

const initialState = {
    data: []
}

export const chatMessageDataReducer = (state: InitialStateType = initialState, action: setChatMessageDataACType): InitialStateType => {
    switch (action.type) {
        case 'chat/SET_DATA':
            return {...state, ...action.arrayUsersData}
        default:
            return state
    }
};

//actions
export const setChatMessageDataAC = (arrayUsersData: any) => ({
    type: 'chat/SET_DATA',
    arrayUsersData
} as const)


// thunk
export const getChatMessageDataTC = () => (dispatch: Dispatch) => {
    commonAPI.getChatUserData()
        .then(res => {
            dispatch(setChatMessageDataAC(res))
        })
        .catch(e => {
            console.log('error: ', e)
        })
}


//types
type InitialStateType = typeof initialState
export type setChatMessageDataACType = ReturnType<typeof setChatMessageDataAC>

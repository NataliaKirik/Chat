import {Dispatch} from "redux";
import {ChatUserDataType, commonAPI} from "../../../api/api";

const initialState: InitialStateType = {
    data: []
}

export const chatMessageDataReducer = (state: InitialStateType = initialState, action: setChatMessageDataACType): InitialStateType => {
    switch (action.type) {
        case 'chat/SET_DATA':
            return {...state, data: action.arrayUsersData}
        default:
            return state
    }
};

//actions
export const setChatMessageDataAC = (arrayUsersData: ChatUserDataType[]) => ({
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
type InitialStateType = {
    data: ChatUserDataType[]
}
export type setChatMessageDataACType = ReturnType<typeof setChatMessageDataAC>

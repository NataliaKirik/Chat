import {Dispatch} from "redux";
import {commonAPI} from "../../../api/api";

const initialState = {
    senderName: "test",
    receiverName: "me",
    message: ""
}

export const chatReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'chat/SET_SENDER-NAME':
            return {...state, senderName: action.senderName}
        case 'chat/SET_MESSAGE':
            return {...state, message: action.message}
        default:
            return state
    }
};

//actions
export const setSenderNameAC = (senderName: string) => ({
    type: 'chat/SET_SENDER-NAME',
    senderName
} as const)
export const setMessageAC = (message: string) => ({
    type: 'chat/SET_MESSAGE',
    message
} as const)


// thunk
export const addChatUserDataTC = (senderName: string, message: string) => (dispatch: Dispatch) => {
    commonAPI.addChatUserData(senderName, message)
        .then(res => {
            dispatch(setSenderNameAC(res.data.senderName))
            dispatch(setMessageAC(res.data.message))
        })
        .catch(e => {
            console.log('error: ', e)
        })
}


//types
type InitialStateType = typeof initialState

export type setSenderNameACType = ReturnType<typeof setSenderNameAC>
export type setMessageACType = ReturnType<typeof setMessageAC>
type ActionsType =
    setSenderNameACType
    | setMessageACType


import {Dispatch} from "redux";
import {commonAPI} from "../../../api/api";

const initialState = {
    senderName: ''
}

// const setSenderName = createAction<string>('chat/SET_SENDER-NAME');
// createReducer(builder => builder.addCase(setSenderName, (state, action) => {state.senderName = action.payload}));
// setSenderName.type
export const chatUserNameReducer = (state: InitialStateType = initialState, action: setSenderNameACType): InitialStateType => {
    switch (action.type) {
        case 'chat/SET_SENDER-NAME':
            return {...state, senderName: action.senderName}
        default:
            return state
    }
};

//actions
export const setSenderNameAC = (senderName: string) => ({
    type: 'chat/SET_SENDER-NAME',
    senderName
} as const)


// thunk
export const addChatUserDataTC = (senderName: string, message: string) => (dispatch: Dispatch) => {
    commonAPI.addChatUserData(senderName, message)
        .then(res => {
            dispatch(setSenderNameAC(res.data.senderName))
        })
        .catch(e => {
            console.log('error: ', e)
        })
}


//types
type InitialStateType = typeof initialState

export type setSenderNameACType = ReturnType<typeof setSenderNameAC>




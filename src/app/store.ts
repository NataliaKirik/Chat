import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import {forumReducer} from "../screens/Messages/bll/forumDataReducer";
import {chatUserNameReducer} from "../screens/Chat/bll/chatUserNameReducer";
import {chatMessageDataReducer} from "../screens/Chat/bll/chatMessagesReducer";

const rootReducer = combineReducers({
    forum: forumReducer,
    chatUserName: chatUserNameReducer,
    chatMessages: chatMessageDataReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store;

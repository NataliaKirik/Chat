import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import {forumReducer} from "../screens/Messages/bll/forumDataReducer";
import {chatReducer} from "../screens/Chat/bll/chatReducer";

const rootReducer = combineReducers({
    forum: forumReducer,
    chat: chatReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store;

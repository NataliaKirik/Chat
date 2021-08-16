import {combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {forumReducer} from '../screens/Messages/bll/forumDataReducer';
import {configureStore} from '@reduxjs/toolkit';
import {chatMessageDataReducer} from '../screens/Chat/bll/chatReducer';
import {loginReducer} from "../screens/Login/bll/loginReducer";

const rootReducer = combineReducers({
    loginName: loginReducer,
    forum: forumReducer,
    chatMessages: chatMessageDataReducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
});


export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store;

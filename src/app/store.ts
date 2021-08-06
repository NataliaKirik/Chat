import { combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { forumReducer } from '../screens/Messages/bll/forumDataReducer';
import { configureStore } from '@reduxjs/toolkit';
import { chatMessageDataReducer } from '../screens/Chat/bll/chatMessagesReducer';
import { chatUserNameReducer } from '../screens/Chat/bll/chatUserNameReducer';

const rootReducer = combineReducers({
    forum: forumReducer,
    chatUserName: chatUserNameReducer,
    chatMessages: chatMessageDataReducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
});


export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store;

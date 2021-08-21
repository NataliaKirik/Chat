import { combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { forumReducer } from '../screens/Messages/bll/forumDataReducer';
import { configureStore } from '@reduxjs/toolkit';
import { chatReducer } from '../screens/Chat/bll/chatReducer';
import { contentReducer } from './bll/contentReducer';

const rootReducer = combineReducers({
    forum: forumReducer,
    chatMessages: chatReducer,
    content: contentReducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
});


export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store;

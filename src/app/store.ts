import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import {forumReducer} from "../screens/Messages/bll/forumDataReducer";

const rootReducer = combineReducers({
    forum: forumReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


export type AppRootStateType = ReturnType<typeof rootReducer>

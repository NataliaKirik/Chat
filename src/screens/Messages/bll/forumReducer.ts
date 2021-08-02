import {Dispatch} from "redux";
import {commonAPI} from "../../../api/api";

const initialState = {
    title: '',
    photo: '',
    name: '',
    replies: 0,
    date: '',
    like: false
}

//  const forumReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
//     switch (action.type) {
//         case 'forum/SET_TITLE':
//             return {...state, title: action.title}
//         case 'forum/SET-PHOTO':
//             return {...state, photo: action.photo}
//         case 'forum/SET-NAME':
//             return {...state, name: action.name}
//         case 'forum/SET-REPLIES':
//             return {...state, replies: action.replies}
//         case 'forum/SET-DATE':
//             return {...state, date: action.date}
//         case 'forum/SET-LIKE':
//             return {...state, like: action.like}
//         default:
//             return state
//     }
// };

//actions
export const setForumTitleAC = (title: string) => ({type: 'forum/SET_TITLE', title} as const)
export const setForumPhotoAC = (photo: string) => ({type: 'forum/SET-PHOTO', photo} as const)
export const setForumNameAC = (name: string) => ({type: 'forum/SET-NAME', name} as const)
export const setForumRepliesAC = (replies: number) => ({type: 'forum/SET-REPLIES', replies} as const)
export const setForumDateAC = (date: string) => ({type: 'forum/SET-DATE', date} as const)
export const setForumLikeAC = (like: boolean) => ({type: 'forum/SET-LIKE', like} as const)


// thunk
export const getForumAllDataTC = () => (dispatch: Dispatch) => {
    commonAPI.getForumAllData()
        .then(res => {
            // dispatch(setAuthUserDataAC(res.data.name, true))
        })
        .catch(e => {
            console.log(e)
        })
        .finally(() => {
            //
        })
}


// //types
// type InitialStateType = typeof initialState
// export type setForumTitleACType = ReturnType<typeof setForumTitleAC>
// export type setForumPhotoACType = ReturnType<typeof setForumPhotoAC>
// export type setForumNameACType = ReturnType<typeof setForumNameAC>
// export type setForumRepliesACType = ReturnType<typeof setForumRepliesAC>
// export type setForumDateACType = ReturnType<typeof setForumDateAC>
// export type setForumLikeACType = ReturnType<typeof setForumLikeAC>
// type ActionsType =
//     setForumTitleACType
//     | setForumPhotoACType
//     | setForumNameACType
//     | setForumRepliesACType
//     | setForumDateACType
//     | setForumLikeACType

